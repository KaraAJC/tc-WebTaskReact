import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Navbar, Jumbotron, Button, Nav, NavItem, Col, ListGroup, ListGroupItem, Carousel, Glyphicon,  } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar.Header>
            <Navbar.Brand>
              <Nav>
                <NavItem >Link Right</NavItem>
                <NavItem >Link Right</NavItem>
              </Nav>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Jumbotron>
        <h1>Ford Focus</h1>
          <Grid>
            <p>
              <Button
                bsStyle="success"
                bsSize="large"
                href="/"
                target="_blank">
                Contact US
              </Button>
            </p>
            <Col md={6} className="white-block">
              <h4>Exterior</h4>
              <ListGroup >
                <ListGroupItem>Item 1</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={6} className="white-block">
              <h4>Performance</h4>
              <ListGroup >
                <ListGroupItem>Item 1</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
              </ListGroup>
            </Col>
          </Grid>
        </Jumbotron>
      <Row>
        <Col md={2} smHidden xsHidden><img src="http://placekitten.com/200/300" class="img-responsive"></img></Col>
        <Col md={2} smHidden xsHidden><img src="http://placekitten.com/200/300" class="img-responsive"></img></Col>
        <Col md={2} smHidden xsHidden><img src="http://placekitten.com/200/300" class="img-responsive"></img></Col>
        <Col md={2} smHidden xsHidden><img src="http://placekitten.com/200/300" class="img-responsive"></img></Col>
        <Col md={2} smHidden xsHidden><img src="http://placekitten.com/200/300" class="img-responsive"></img></Col>
        <Col md={2} smHidden xsHidden><img src="http://placekitten.com/200/300" class="img-responsive"></img></Col>
      </Row>
    </div>
    );
  }
}

export default App;
