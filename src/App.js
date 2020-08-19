// Utilities
import React from 'react';
import './App.css';
import { Container, Card, Row } from 'react-bootstrap';

// Components
import Header from './components/Header.js';
import About from './components/About.js';

// Static Files
import profile_pic from './static/me_mountaintop_thumb.jpg';
import banner from './static/banner2.png';



class App extends React.Component {
    userInfo = {
        header: {
            name: "Zenen Treadwell",
            profile_pic,
            banner,
            links: [
                { name: "LinkedIn", addr: "https://www.linkedin.com/in/zenen-treadwell/"},
                { name: "Instagram", addr: "https://www.instagram.com/zenentreadwell/"},
                { name: "Reddit", addr: "https://www.reddit.com/user/Zenen/"},
                { name: "Github", addr: "https://github.com/ZenenTreadwell/"},
                { name: "Facebook", addr: "https://www.facebook.com/zenenenenen"},
            ],
        },

        about: {
            intro: "Hi, I'm Zenen. I'm an amateur web developer looking to get my start in the industry. Some of my interests include music (listening, mixing, writing), yoga, cycling, treeplanting, rock climbing, and of course: software development! I arrived in Victoria this August, so let me know if you have any suggestions on places to see as a newcomer to the island.",
            hometown: "Cambridge, ON",
            location: "Colwood, BC",
            birthday: "January 25th, 1996",
            phone: "+1-519-242-7741",
            email: "zenen52@gmail.com",
            pronouns: "he/him/his",
        }
    }

    render() {
        return (
            <div className="App col-12 col-xl-10 no-gutters  mx-auto">
            <Header userInfo={this.userInfo.header}/>
            <Row className="col-12 col-sm-10 mx-auto">
                <About sizing="col-12 col-md-4" about={this.userInfo.about} />

                <Container className="col-12 col-md-8 ml-auto bg-primary" style={{zIndex:-1}}>
                <p>Feed</p>
                <br/>
                <Card>
                <p className="text-primary">Blog Post</p>
                </Card>
                <Card>
                <p className="text-primary">News Article</p>
                </Card>
                </Container>
            </Row>
            </div>
        );
    }
}

export default App;
