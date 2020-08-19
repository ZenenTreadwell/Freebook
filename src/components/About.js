import React from 'react';

import { Card, ListGroup, Row } from 'react-bootstrap';

class About extends React.Component {

    // This will take each entry in the about object and output a listGroup member with a logo based on the key
    listEntry = (key, value) => {
        return <Row></Row>;
    }

    render() {
        let about = this.props.about;
        return (
            <Card className="col-12 col-md-4 bg-light">
                <Card.Body>
                    <Card.Title className="text-center"><i>"Upstanding citizen & totally average human being"</i></Card.Title>
                    <Card.Text className="text-justify"><small>{about.intro}</small></Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>Test</ListGroup.Item>
                    <ListGroup.Item>Test2</ListGroup.Item>
                </ListGroup>
            </Card>
        )
    }
}
    
export default About;
