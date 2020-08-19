import React from 'react';

import { Container, Jumbotron, Card, Row, Navbar } from 'react-bootstrap';

class Header extends React.Component {

    toNavHTML(links) {
        return (
        <ul className="navbar-nav ml-auto">
            {links.map(this.buildNav)}
            // Fix Dropdown Menu
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    More
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
        </ul>
        );
    }

    buildNav = (json) => {
        return <li className="nav-link border-right"><a href={json.addr}>{json.name}</a></li>;
    }

    getHeaderStyle = (user) => {
        return {
            backgroundImage: "url("+ user.banner +")",
            backgroundSize: 'cover',
        };
    }

    render() {
        let user = this.props.userInfo;

        return (
            <Container className="col-12">
                <Jumbotron className="col-12 col-sm-10 rounded container-fluid mx-auto m-3 p-3" style={this.getHeaderStyle(user)}>
                    <Row className="pl-4">
                        <img src={user.profile_pic} alt="Profile" className="img-thumbnail rounded-circle w-25"  style={{ zIndex: 1 }}/>
                        <p className="col-9 align-self-end mb-4" style={nameStyle}>Zenen Treadwell</p>
                    </Row>
                    <Card className="col-12 align-bottom" style={navCardStyle}>
                        <Navbar className="col-10 col-sm-8 ml-auto">
                            {this.toNavHTML(user.links)}
                        </Navbar>
                    </Card>
                </Jumbotron>
            </Container>
        )
    }
}

const navCardStyle = {
    marginTop: '-20px',
    opacity: 0.8,
}

const nameStyle = {
    color: "#eee",
    textShadow: "0.1em 0.1em 0.1em grey",
    fontSize: '32px',
}

export default Header;

