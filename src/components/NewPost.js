import React from 'react';

import { Card, Form, Button } from 'react-bootstrap';

class NewPost extends React.Component {
    state = {
        text: ""
    }

    onChange = (e) => this.setState(
        { [e.target.name]: e.target.value }
    )

    onSubmit = (e) => {
        e.preventDefault();
        this.props.newPost(this.state.text);
        this.setState({text: ""});
    }

    render() {
        return (
            <Card className="bg-light mb-3">
                <Card.Header className="h5">New Post</Card.Header>
                <Card.Body>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group controlId="formTextPost">
                            <Form.Control 
                                name="text" 
                                as="textarea" 
                                placeholder="Enter text here..." 
                                rows="3" 
                                value={this.state.text} 
                                onChange={this.onChange}
                            />
                        </Form.Group>
                        <Button className="float-right rounded-pill mr-2" variant="primary" type="submit">Post</Button>
                    </Form>
                </Card.Body>
            </Card>
        );
    }
}
    
export default NewPost;
