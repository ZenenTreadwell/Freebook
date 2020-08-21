// Utilities
import React from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap';

// Components
import Header from './components/Header.js';
import About from './components/About.js';
import NewPost from './components/NewPost.js';
import PostFeed from './components/PostFeed.js';

// Static Files
import profile_pic from './static/me_mountaintop_thumb.jpg';
import banner from './static/banner2.png';

// FontAwesome Config
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBirthdayCake, faPhone, faCompass, faHome, faEnvelope, faVenusMars, faCircle } from '@fortawesome/free-solid-svg-icons'
library.add( faBirthdayCake, faPhone, faCompass, faHome, faEnvelope, faVenusMars, faCircle );

class App extends React.Component {
    state = {
        header: {
            name: "Zenen Treadwell",
            profile_pic,
            banner,
            links: [
                { id: 1, name: "Github", addr: "https://github.com/ZenenTreadwell/"},
                { id: 2, name: "LinkedIn", addr: "https://www.linkedin.com/in/zenen-treadwell/"},
                { id: 3, name: "Instagram", addr: "https://www.instagram.com/zenentreadwell/"},
                { id: 4, name: "Reddit", addr: "https://www.reddit.com/user/Zenen/"},
                { id: 5, name: "Facebook", addr: "https://www.facebook.com/zenenenenen"},
            ],
        },

        intro: {
            quote: "Upstanding citizen & totally average human being - not a wizard",
            text: "Hi, I'm Zenen. I'm an amateur web developer looking to get my start in the industry. Some of my interests include music (listening, mixing, writing), yoga, cycling, treeplanting, rock climbing, and of course: software development! I arrived in Victoria this August, so let me know if you have any suggestions on places to see as a newcomer to the island.",
        },

        about: {
            hometown: "Cambridge, ON",
            loc: "Colwood, BC",
            birthday: "January 25th, 1996",
            phone: "+1-519-242-7741",
            email: "zenen52@gmail.com",
            pronouns: "he/him/his",
        },

        posts: [
            {
                type: "text",
                content: "Wow, building profile templates is hard work!",
            }
        ],
    }

    newPost = (text) => {
        console.log("making a new post. state is now:");
        let post = {
            type: "text",
            content: text,
        };

        this.setState({posts:[...this.state.posts,post]}, () => console.log(this.state.posts));
    }

    render() {
        return (
            <div className="App col-12 col-xl-10 no-gutters  mx-auto">
            <Header userInfo={this.state.header} />
            <Row className="col-12 col-sm-11 col-md-10 mx-auto">
                <Container fluid className="col-12 col-md-5 px-0 pr-md-3 no-gutters" style={{zIndex:-1}}>
                    <About intro={this.state.intro} about={this.state.about} />
                </Container>

                <Container fluid className="col-12 col-md-7 px-0">
                    <NewPost newPost={this.newPost} />
                    <PostFeed posts={this.state.posts} />
                </Container>
            </Row>
            </div>
        );
    }
}

export default App;
