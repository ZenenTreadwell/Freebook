import React from 'react';

import { Card } from 'react-bootstrap';

class PostFeed extends React.Component {
    buildPost = (post) => {
        if (post.type === "text") {
            return (
                <Card className="bg-light mb-3">
                    <Card.Body>
                        <Card.Text>{post.content}</Card.Text>
                    </Card.Body>
                </Card>
            )
        }
    }

    render() {
        let posts = this.props.posts;

        return (
            <>
            {posts.map(this.buildPost)}
            </>
        );
    }
}
    
export default PostFeed;
