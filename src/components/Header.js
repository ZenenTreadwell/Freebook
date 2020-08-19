import React from 'react';

import { Container, Jumbotron, Card, Row, Navbar, Dropdown, Button, ButtonGroup } from 'react-bootstrap';

class Header extends React.Component {

    // Builder for the navigation bar
    navBar = (links, maxLen) => {
        let len = links.length;

        if (len <= maxLen) {
            // Return basic navbar
            return (
                <ButtonGroup className="bg-light text-dark ml-auto" aria-label="Navigation Links" style={{marginRight:"-30px"}}>
                    { links.map(this.buildLink) }
                </ButtonGroup>
            );
        } else {
            // return navbar with dropdown
            return (
                <ButtonGroup className="bg-light text-dark ml-auto" aria-label="Navigation Links">
                    { links.slice(0,maxLen-1).map(this.buildLink) }
                    { this.buildDropdown(links.slice(maxLen)) }
                </ButtonGroup>
            );
        }
    }

    buildLink = (json) => {
        return <Button className="bg-light text-dark" variant="light" href={json.addr}>{json.name}</Button>;
    }

    // Provides a dropdown menu for link overflow
    buildDropdown = (more_links) => {
        console.log(more_links);

        return (
            <Dropdown>
                <Dropdown.Toggle className="bg-light text-dark" variant="primary" id="dropdown-basic" style={{marginRight:"-30px"}}>
                    More
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ zIndex: 2 }}>
                    { more_links.map(this.buildDropEntry) }
                </Dropdown.Menu>
            </Dropdown>
        );
    }

    buildDropEntry = (json) => {
        return <Dropdown.Item href={json.addr}>{json.name}</Dropdown.Item>
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
                        <Navbar className="d-flex d-sm-none col-10 ml-auto mr-1">
                            {this.navBar(user.links, 3)}
                        </Navbar>
                        <Navbar className="d-none d-sm-flex d-md-none col-11 ml-auto mr-1">
                            {this.navBar(user.links, 4)}
                        </Navbar>
                        <Navbar className="d-none d-md-flex d-lg-none col-11 ml-auto mr-1">
                            {this.navBar(user.links, 5)}
                        </Navbar>
                        <Navbar className="d-none d-lg-flex col-11 ml-auto">
                            {this.navBar(user.links, 6)}
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

