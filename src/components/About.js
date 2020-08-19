import React from 'react';

import { Card } from 'react-bootstrap';

class About extends React.Component {

    render() {
        let sizing = this.props.sizing;
        return (
            <Card className={sizing + " bg-dark text-white"}>
                <div className="card-header">About Me</div>
                <div className="card-body">
                    <h5 className="card-title">Title Here</h5>
                    <p className="card-text">Example Text</p>
                </div>
            </Card>
        )
    }
}
    
export default About;
