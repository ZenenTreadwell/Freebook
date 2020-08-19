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
        name: "Zenen Treadwell",
        profile_pic,
        banner,
        links: [
            { name: "LinkedIn", addr: "https://www.linkedin.com/in/zenen-treadwell/"},
            { name: "Instagram", addr: "https://www.instagram.com/zenentreadwell/"},
            { name: "Reddit", addr: "https://www.reddit.com/user/Zenen/"},
            { name: "Github", addr: "https://github.com/ZenenTreadwell/"},
        ],

    }

    render() {
        return (
            <div className="App">
            <Header userInfo={this.userInfo}/>
            <Row className="col-12 col-sm-10 mx-auto">
                <About sizing="col-12 col-md-4" />

                <Container className="col-12 col-md-8 ml-auto bg-primary">
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
