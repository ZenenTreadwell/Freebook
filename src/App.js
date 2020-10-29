// Utilities
import React from 'react';
import './App.css';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';

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
    constructor(props) {
        super(props);
        this.state = {
            viewCompleted: false,
            data: [],
            posts: [],
            activeUser: {
                name: "",
                profile: '',
                profile_pic,
            },

            header: {
                name: "",
                profile_pic,
                banner,
                links: [
                ],
            },

            intro: {
                quote: "",
                text: "",
            },

            about: {
            },

//            posts: [
//                {
//                    type: "text",
//                    user: {
//                        name: "Zenen Treadwell",
//                        profile: '#',
//                        profile_pic,
//                    },
//                    posted: Date(),
//                    content: "Want to know more about what I can do? Check out my resume! It's linked up on the navbar.",
//                },
//                {
//                    type: "text",
//                    user: {
//                        name: "Zenen Treadwell",
//                        profile: '#',
//                        profile_pic,
//                    },
//                    posted: Date(),
//                    content: "So you might be asking: where's the backend? Well, I recently moved across the country from Cambridge, ON to Victoria, BC. A lot of my belongings are still in transit - including the Raspberry Pi that I usually use to host my webpage. Rather than attempt to recreate the entire setup on  github.io, I thought it best to whip up a quick placeholder page so that I can focus on what's most important - getting situated in my new home! Expect updates soon.",
//                }
//            ],
        };
    };

    componentDidMount = () => {
        this.getProfile(1);
    };


    getProfile = (id=1) => {
        axios
        .get('/api/users/'+id)
        .then(res => this.setState({
            data: res.data,
            profile: res.data.profile,
            
            activeUser: {
                name: res.data.profile.name,
                profile: res.data.profile_url,
                profile_pic,
            },

            header: {
                name: res.data.profile.name,
                profile_pic,
                banner,
                links: res.data.profile.links,
            },

            intro: {
                quote: res.data.profile.quote,
                text: res.data.profile.blurb,
            },

            about: res.data.profile.about,
        }))
        .catch(err => console.log(err));
    };

    getPosts = () => {
        axios
        .get('/api/posts/')
        .then(res => this.setState({posts: res.data}))
        .catch(err => console.log(err));
    };

    newPost = (text) => {
        let post = {
            type: "text",
            user: this.state.activeUser,
            posted: Date(),
            content: text,
        };

        this.setState({posts:[...this.state.posts,post]});

        console.log(this.state.posts);
    };

    render() {
        return (
            <div className="App col-12 col-xl-10 no-gutters  mx-auto">
            <Header userInfo={this.state.header} />
            <Row className="col-12 col-sm-11 col-md-10 mx-auto" >
                <Container fluid className="col-12 col-md-5 px-0 pr-md-3 no-gutters">
                    <About intro={this.state.intro} about={this.state.about} />
                </Container>

                <Container fluid className="col-12 col-md-7 px-0">
                    <NewPost newPost={this.newPost} />
                    <PostFeed user={this.state.header} getPosts={this.getPosts} posts={this.state.posts} />
                </Container>
            </Row>
            </div>
        );
    }
}

export default App;
