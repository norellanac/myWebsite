import React from "react";
import { FormattedMessage } from "react-intl";
import LinkTranslated from "../LinkTranslated";
import { StaticImage } from 'gatsby-plugin-image'
import SimpleLocalize from "../SimpleLocalize";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Row, Col, Button } from 'react-bootstrap';
import norellanacEn from "../norellanac-resume.pdf"
import norellanacEs from "../norellanac-hoja-de-vida.pdf"
import Header from '../components/header'

function IndexPage(props) {
  // const language = props.pageContext.language;
  console.warn("lenguage: ",  props.location.href);
  return (

    <SimpleLocalize {...props}>
      <div>
        <Navbar bg="dark" variant="dark" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#"><span className="text-light">norellanac</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" className="text-light" />
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
                  <Link
                    className="nav-link"
                    to={props.location.href + "resume/"}
                  >
                    <FormattedMessage
                      id="resume"
                      defaultMessage="Resume"
                    />
                  </Link>
                  <NavDropdown title="Lenguage" id="offcanvasNavbarDropdown">
                    <Link
                      className="pl-4 dropdown-item nav-link "
                      to="/"
                    >
                      English (Default)
                    </Link>
                    <Link
                      className="pl-4 dropdown-item nav-link"
                      to="/es/"
                    >Español
                    </Link>
                  </NavDropdown>
                  <NavDropdown title="Dowload Resume" id="offcanvasNavbarDropdown">
                    <a
                      className="pl-4 dropdown-item nav-link "
                      href={norellanacEn}
                      target="_blank"
                    >
                      Dowload | English (Default)
                    </a>
                    <a
                      className="pl-4 dropdown-item nav-link"
                      href={norellanacEs}
                      target="_blank"
                    >Descargar en Español
                    </a>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
      <section >
        <Container>
          <Row >
            <Col xs={6} md={4} lg={4} className="mt-5"><StaticImage
              src="../img/docker1.png" alt="docker1"
              placeholder="blurred"
              layout="fixed"
              width={140}
              height={110}
            />
            </Col>
            <Col xs={6} md={4} lg={4} className="mt-5"><StaticImage
              src="../img/laravel.png"
              alt="laravel"
              placeholder="blurred"
              layout="fixed"
              width={150}
              height={110}
            />
            </Col>
            <Col xs={6} md={4} lg={4} className="mt-5">
              <StaticImage
                src="../img/react.png" alt="react"
                placeholder="blurred"
                layout="fixed"
                width={110}
                height={110}
              />
            </Col>
            <Col xs={6} md={4} lg={4} className="mt-5">
              <StaticImage
                src="../img/docker.png" alt="docker"
                placeholder="blurred"
                layout="fixed"
                width={130}
                height={110}
              />
            </Col>
            <Col xs={6} md={4} lg={4} className="mt-5">
              <StaticImage
                src="../img/aws.png" alt="aws"
                placeholder="blurred"
                layout="fixed"
                width={120}
                height={110}
              />
            </Col>
            <Col xs={6} md={4} lg={4} className="mt-5">
              <StaticImage
                src="../img/kubernetes.png" alt="kubernetes"
                placeholder="blurred"
                layout="fixed"
                width={140}
                height={110}
              />
            </Col>
          </Row>
        </Container>
      </section>
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


    </SimpleLocalize>
  );
}

export default IndexPage
