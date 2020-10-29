import React from 'react';

import { Row, Container, Card } from 'react-bootstrap';

class PostFeed extends React.Component {
    componentDidMount() {
        this.props.getPosts();
    };

    buildPost = (post) => {
        let date = Date(post.posted);

        if (post.type === "text") {
            return (
                <Card className="bg-light mb-3">
                    <Card.Body className="pt-1">
                        <Row className="d-flex mx-1 mb-2 border-bottom">
                            <Container className="col-2 px-0 h-100">
                                <img src={post.user.profile_pic} alt="Profile" className="img-thumbnail rounded-circle w-100 mb-1 float-left" />
                            </Container>
                            <Card.Text className="col-10 pl-1 mt-3 float-left" style={{lineHeight: 1.0 }}>
                                <a href={post.user.profile}>{post.user.name}</a><br/>
                                <small>{`posted ${date.split(" ").slice(0,3).join(' ')}`}</small>
                            </Card.Text>
                        </Row>
                        <Card.Text>{post.content}</Card.Text>
                    </Card.Body>
                </Card>
            )
        }
    }

    render() {
        let posts = this.props.posts;
        let byDate = (post1,post2) => {
            return (post1.date > post2.date)
            ? -1
            : 1
        }

        return (
            <>
            {posts.sort(byDate).map(this.buildPost)}
            </>
        );
    }
}
    
export default PostFeed;
