import React from 'react';

import { Card } from 'react-bootstrap';

import icoEntry from './icoEntry.js';

class About extends React.Component {

    // This will take each entry in the about object and output a listGroup member with a logo based on the key
    listInfo = (json) => {
        let keys = Object.keys(json);
        
        return (
            <ul style={{listStyleType: "none", lineHeight:"150%"}}>
                {keys.map( key => icoEntry(key,json[key]))}
            </ul>
        );
    }

    render() {
        let intro = this.props.intro;
        return (
            <Card className="bg-light mb-3">
                <Card.Body>
                    <Card.Title className="text-center"><i>"{intro.quote}"</i></Card.Title>
                    <hr/>
                    <Card.Text className="text-justify"><small>{intro.text}</small></Card.Text>
                    <hr/>
                    {this.listInfo(this.props.about)}
                </Card.Body>
            </Card>
        );
    }
}
    
export default About;
