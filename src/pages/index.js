import React from "react";
import { FormattedMessage } from "react-intl";
import LinkTranslated from "../LinkTranslated";
import SimpleLocalize from "../SimpleLocalize";
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import Header from '../components/header'

function IndexPage(props) {
  // const language = props.pageContext.language;
  return (

    <SimpleLocalize {...props}>
      <div>
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
      <div>
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">norellanac</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">norellanac</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1"><FormattedMessage
                    id="hello-world"
                    defaultMessage="Hello World!"
                  /></Nav.Link>
                  <Nav.Link href="/resume">
                    <FormattedMessage
                      id="resume"
                      defaultMessage="Resume"
                    />
                  </Nav.Link>
                  <NavDropdown title="Lenguage" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="/">English (Default)</NavDropdown.Item>
                    <NavDropdown.Item href="/es/">Español</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
      <h1>
        <FormattedMessage
          id="hello-world"
          defaultMessage="Hello World!"
        />
      </h1>

      <p>
        <FormattedMessage
          id="welcome-on-our-website"
          defaultMessage="Welcome on our multi-language website"
        />
      </p>

      <LinkTranslated
        className="btn btn-link"
        href="/about"
      >
        <FormattedMessage
          id="learn-more-about-us"
          defaultMessage="Learn more about us"
        />
      </LinkTranslated>
      <p>hi</p>
      <LinkTranslated
        className="btn btn-link"
        href="/resume"
      >
        <FormattedMessage
          id="learn-more-about-us"
          defaultMessage="resume"
        />
      </LinkTranslated>


      <ul>
        <li><a href="/">English (Default)</a></li>
        <li><a href="/pl/">Polish</a></li>
        <li><a href="/es/">Spanish</a></li>
      </ul>

    </SimpleLocalize>
  );
}

export default IndexPage
