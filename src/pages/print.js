import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'
import SimpleLocalize from "../SimpleLocalize";
import { FormattedMessage } from "react-intl";
import LinkTranslated from "../LinkTranslated";
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelopeOpenText,
    faMobileAlt,
    faBrows,
    faAmbulance,
    faAtom,
    faBus,
    faCoins,
    faDice,
    faMap,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faChrome, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { circle } from '../components/general.module.css'
import { Row, Container, Col, Card, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';

function ResumePrintPage(props) {
    // const language = props.pageContext.language;
    console.log("resume: ", props);
    return (

        <SimpleLocalize {...props}>
            <div>
                <div>

                    <section className="bg-light">
                        <Container fluid className="mt-5">
                            <Row>
                                <Col xs={8} lg={8} md={8} className="">
                                    <div className=" d-flex align-items-start">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <StaticImage
                                                src="../img/norellanac.jpeg" alt="norellanac"
                                                placeholder="blurred"
                                                layout="fixed"
                                                width={150}
                                                height={150}
                                                style={{ marginRight: 30, marginLeft: 30, marginTop: 30 }}
                                                className={circle}
                                            />
                                        </div>
                                        <div className="media-body pl-4 ml-4">
                                            <h1 className="heading mb-2 text-primary" style={{ fontsize: "35px;" }}>Nery Alexis Orellana Cuy</h1>
                                            <p>
                                                <span className="ml-4">
                                                    <FontAwesomeIcon style={{ marginRight: 10 }} icon={faMobileAlt} size="1x" />
                                                    <FormattedMessage
                                                        id="phone"
                                                        defaultMessage="phone"
                                                    />
                                                    : <a
                                                        href="tel:50233120413">+502
                                                        33120413</a> </span> <br />
                                                <span className="ml-4">
                                                    <FontAwesomeIcon style={{ marginRight: 10 }} icon={faEnvelopeOpenText} />
                                                    <FormattedMessage
                                                        id="email"
                                                        defaultMessage="email"
                                                    />
                                                    : <a
                                                        href="mailto:alexis_oc@yahoo.es">alexis_oc@yahoo.es</a> </span> <br />
                                                <span className="ml-4">

                                                    <FontAwesomeIcon style={{ marginRight: 10 }} icon={faMap} size="1x" />
                                                    <FormattedMessage
                                                        id="address"
                                                        defaultMessage="address"
                                                    />
                                                    : <a
                                                        href="https://goo.gl/maps/tzokv8QcD8RgRRms9">San José Pinula, Guatemala</a>
                                                </span> <br />
                                                <span className="ml-4">
                                                    <FontAwesomeIcon style={{ marginRight: 10 }} icon={faChrome} size="1x" />
                                                    <FormattedMessage
                                                        id="website"
                                                        defaultMessage="website"
                                                    />
                                                    : <a
                                                        href="https://norellanac.github.io/myWebsite">norellanac</a>
                                                </span> <br />
                                                <span className=" h1 mt-5 text-center ml-5" style={{ fontsize: "60px;" }}>
                                                    <a href="https://github.com/norellanac">
                                                        <FontAwesomeIcon style={{ marginRight: 30 }} icon={faGithub} size="1x" />
                                                    </a>
                                                    <a href="https://www.linkedin.com/in/nery-alexis-orellana-cuy-3612888b/">
                                                        <FontAwesomeIcon style={{ marginRight: 30 }} icon={faLinkedin} size="1x" />
                                                    </a>
                                                    <a href="https://m.facebook.com/alexis.orellana2">
                                                        <FontAwesomeIcon style={{ marginRight: 30 }} icon={faFacebook} size="1x" />
                                                    </a>
                                                    <a href="https://www.instagram.com/norellanac/">
                                                        <FontAwesomeIcon style={{ marginRight: 30 }} icon={faInstagram} size="1x" />
                                                    </a>
                                                    <a href="https://api.whatsapp.com/send?phone=50233120413">
                                                        <FontAwesomeIcon style={{ marginRight: 30 }} icon={faWhatsapp} size="1x" />                                                   </a>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col xs={4} lg={4} md={4} className="ftco-animate justify-content-center">
                                    <div className="media block-6 services d-flex text-center">
                                        <div className="media-body">
                                            <StaticImage
                                                src="../oldCv/img/umg.png" alt="umg"
                                                placeholder="blurred"
                                                layout="fixed"
                                                width={100}
                                                height={100}
                                                style={{ marginLeft: 70 }}
                                                className={circle}
                                            />
                                            <div style={{ marginLeft: 35 }}>
                                                <h3 className="" style={{ fontSize: "25px;" }}>
                                                    <FormattedMessage
                                                        id="education"
                                                        defaultMessage="education"
                                                    />
                                                </h3>
                                                <p className="p-1">
                                                    <FormattedMessage
                                                        id="education_description"
                                                        defaultMessage=""
                                                    />
                                                    <br />
                                                    <strong>
                                                        <FormattedMessage
                                                            id="education_title"
                                                            defaultMessage="education_title"
                                                        />
                                                    </strong>
                                                    <br />
                                                    <FormattedMessage
                                                        id="education_date"
                                                        defaultMessage="education_date"
                                                    />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="bg-primary pb-2">
                        <div className="container-fluid">
                            <div className="row justify-content-center mb-3">
                                <div className="text-center">
                                    <h2 className="mb-2 mt-2 text-light">
                                        <FormattedMessage
                                            id="skills"
                                            defaultMessage="skills"
                                        />
                                    </h2>
                                </div>
                            </div>

                            <div>
                                <Row>
                                    <Col xs={4}>
                                        <Card
                                            bg="light"
                                            text="dark"
                                            className="mb-2"
                                        >
                                            <Card.Header>Databases</Card.Header>
                                            <Card.Body>

                                                <div className="media-body">
                                                    <div className="progress mt-3">
                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                                            role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                            style={{ width: "80%" }}>
                                                            <strong>MySql</strong>
                                                        </div>
                                                    </div>
                                                    <div className="progress mt-3">
                                                        <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                                            role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                            style={{ width: "60%" }}>
                                                            <strong>DDL, DML </strong>
                                                        </div>
                                                    </div>
                                                    <div className="progress mt-3">
                                                        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                                            role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                            style={{ width: "50%" }}>
                                                            <strong>Triggers, store procedures</strong>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <StaticImage
                                                            className="ml-2 d-inline-block"
                                                            src="../oldCv/img/logos/mySql.png" alt="mySql"
                                                            placeholder="blurred"
                                                            layout="fixed"
                                                            width={60}
                                                            height={30}
                                                        />
                                                        <StaticImage
                                                            className="ml-2 d-inline-block"
                                                            src="../oldCv/img/logos/oracle.png" alt="oracle"
                                                            placeholder="blurred"
                                                            layout="fixed"
                                                            width={60}
                                                            height={30}
                                                        />
                                                        <StaticImage
                                                            className="ml-2 d-inline-block"
                                                            src="../oldCv/img/logos/postgres.png" alt="postgres"
                                                            placeholder="blurred"
                                                            layout="fixed"
                                                            width={55}
                                                            height={35}
                                                        />
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={4}>
                                        <Card
                                            bg="light"
                                            text="dark"
                                            className="mb-2"
                                        >
                                            <Card.Header>Front End</Card.Header>
                                            <Card.Body>
                                                <div className="">
                                                    <div className="progress mt-3">
                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                                            role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                                                            style={{ width: "90%" }}>
                                                            <strong>Bootstrap</strong>
                                                        </div>
                                                    </div>
                                                    <div className="progress mt-3">
                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                                            role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                            style={{ width: "80%" }}>
                                                            <strong> React</strong>
                                                        </div>
                                                    </div>
                                                    <div className="progress mt-3">
                                                        <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                                            role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                            style={{ width: "50%" }}>
                                                            <strong>Gatsby</strong>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <StaticImage
                                                            className="ml-2 d-inline-block"
                                                            src="../oldCv/img/logos/javascript.png" alt="javascript"
                                                            placeholder="blurred"
                                                            layout="fixed"
                                                            width={60}
                                                            height={35}
                                                        />
                                                        <StaticImage
                                                            className="ml-2 d-inline-block"
                                                            src="../oldCv/img/logos/bootstrap.png" alt="bootstrap"
                                                            placeholder="blurred"
                                                            layout="fixed"
                                                            width={55}
                                                            height={35}
                                                        />
                                                        <StaticImage
                                                            className="ml-2 d-inline-block"
                                                            src="../oldCv/img/logos/materialize.png" alt="materialize"
                                                            placeholder="blurred"
                                                            layout="fixed"
                                                            width={45}
                                                            height={35}
                                                        />
                                                    </div>

                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={4}>
                                        <Card
                                            bg="light"
                                            text="dark"
                                            className="mb-2"
                                        >
                                            <Card.Header>Movil Apps</Card.Header>
                                            <Card.Body>
                                                <div >
                                                    <div className="icon d-flex align-items-center justify-content-center">
                                                        <span className="flaticon">
                                                            <i className="fab fa-android"></i>
                                                        </span>
                                                    </div>
                                                    <div className="media-body pl-4">
                                                        <div className="progress mt-3">
                                                            <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                                                role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                                style={{ width: "95%" }}>
                                                                <strong>React Native</strong>
                                                            </div>
                                                        </div>
                                                        <div className="progress mt-3">
                                                            <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                                                role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                                style={{ width: "60%" }}>
                                                                <strong>Redux</strong>
                                                            </div>
                                                        </div>
                                                        <div className="progress mt-3">
                                                            <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                                                role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                                style={{ width: "50%" }}>
                                                                <strong>UI/UX</strong>
                                                            </div>
                                                        </div>
                                                        <div className="mt-4">
                                                            <StaticImage
                                                                className="ml-2 d-inline-block"
                                                                src="../oldCv/img/logos/android.png" alt="android"
                                                                placeholder="blurred"
                                                                layout="fixed"
                                                                width={40}
                                                                height={35}
                                                                style={{ marginLeft: 30 }}
                                                            />
                                                            <StaticImage
                                                                className="ml-2 d-inline-block"
                                                                src="../oldCv/img/logos/reactjs.png" alt="reactjs"
                                                                placeholder="blurred"
                                                                layout="fixed"
                                                                width={45}
                                                                height={35}
                                                            />
                                                            <StaticImage
                                                                className="ml-2 d-inline-block"
                                                                src="../oldCv/img/logos/apple.png" alt="apple"
                                                                placeholder="blurred"
                                                                layout="fixed"
                                                                width={45}
                                                                height={35}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col xs={4}>
                                        <Card
                                            bg="light"
                                            text="dark"
                                            className="mb-2"
                                        >
                                            <Card.Header><FormattedMessage
                                                id="servers"
                                                defaultMessage="servers"
                                            /></Card.Header>
                                            <Card.Body>
                                                <div >
                                                    <div className="progress mt-3">
                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                                            role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                            style={{ width: "80%" }}>
                                                            <strong>Amazon EC2, Amazon RDS</strong>
                                                        </div>
                                                    </div>
                                                    <div className="progress mt-3">
                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                                            role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                                            style={{ width: "75%" }}>
                                                            <strong>Docker</strong>
                                                        </div>
                                                    </div>
                                                    <div className="progress mt-3">
                                                        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                                            role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                            style={{ width: "50%" }}>
                                                            <strong>kubernetes</strong>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <StaticImage
                                                            className="ml-2 d-inline-block"
                                                            src="../img/aws.png" alt="aws"
                                                            placeholder="blurred"
                                                            layout="fixed"
                                                            width={40}
                                                            height={35}
                                                            style={{ marginLeft: 30, marginRight: 10 }}
                                                        />
                                                        <StaticImage
                                                            className="ml-2 d-inline-block"
                                                            src="../oldCv/img/logos/kubernetes.png" alt="kubernetes"
                                                            placeholder="blurred"
                                                            layout="fixed"
                                                            width={35}
                                                            height={35}
                                                            style={{ marginRight: 10 }}
                                                        />
                                                        <StaticImage
                                                            className="ml-2 d-inline-block"
                                                            src="../img/docker1.png" alt="docker1"
                                                            placeholder="blurred"
                                                            layout="fixed"
                                                            width={50}
                                                            height={35}
                                                            style={{ marginRight: 10 }}
                                                        />
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={4}>
                                        <Card
                                            bg="light"
                                            text="dark"
                                            className="mb-2"
                                        >
                                            <Card.Header>Back End</Card.Header>
                                            <Card.Body>
                                                <div >
                                                    <div className="progress mt-3">
                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                                            role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                                                            style={{ width: "90%" }}>
                                                            <strong>Laravel Framework</strong>
                                                        </div>
                                                    </div>
                                                    <div className="progress mt-3">
                                                        <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                                            role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                            style={{ width: "60%" }}>
                                                            <strong>API REST</strong>
                                                        </div>
                                                    </div>
                                                    <div className="progress mt-3">
                                                        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                                            role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                            style={{ width: "50%" }}>
                                                            <strong>Java Spring Framework</strong>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4">
                                                        <StaticImage
                                                            className="ml-2 d-inline-block"
                                                            src="../img/laravel.png" alt="laravel"
                                                            placeholder="blurred"
                                                            layout="fixed"
                                                            width={40}
                                                            height={35}
                                                            style={{ marginLeft: 30, marginRight: 10 }}
                                                        />
                                                        <StaticImage
                                                            className="ml-2 mr-4 d-inline-block"
                                                            src="../oldCv/img/logos/java.png" alt="java"
                                                            placeholder="blurred"
                                                            layout="fixed"
                                                            width={20}
                                                            height={35}
                                                            style={{ marginLeft: 10, marginRight: 10 }}
                                                        />
                                                        <StaticImage
                                                            className="ml-2 d-inline-block"
                                                            src="../oldCv/img/logos/spring.png" alt="spring"
                                                            placeholder="blurred"
                                                            layout="fixed"
                                                            width={35}
                                                            height={35}
                                                            style={{ marginLeft: 10, marginRight: 10 }}
                                                        />
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={4}>
                                        <Card
                                            bg="light"
                                            text="dark"
                                            className="mb-2"
                                        >
                                            <Card.Header>DevOps</Card.Header>
                                            <Card.Body>
                                                <div className="">
                                                    <div className="">
                                                        <div className="icon d-flex align-items-center justify-content-center">
                                                            <span className="flaticon">
                                                                <i className="fab fa-git-alt"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <div className="progress mt-3">
                                                                <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                                                    role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                                    style={{ width: "95%" }}>
                                                                    <strong>Git, Github</strong>
                                                                </div>
                                                            </div>
                                                            <div className="progress mt-3">
                                                                <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                                                    role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                                    style={{ width: "60%" }}>
                                                                    <strong>Agile Scrum</strong>
                                                                </div>
                                                            </div>
                                                            <div className="progress mt-3">
                                                                <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                                                    role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                                    style={{ width: "50%" }}>
                                                                    <strong>CI/CD</strong>
                                                                </div>
                                                            </div>
                                                            <div className="mt-4 align-items-center justify-content-center">
                                                                <StaticImage
                                                                    className="ml-2 d-inline-block"
                                                                    src="../oldCv/img/logos/github.png" alt="github"
                                                                    placeholder="blurred"
                                                                    layout="fixed"
                                                                    width={35}
                                                                    height={35}
                                                                    style={{ marginLeft: 30, marginRight: 10 }}
                                                                />
                                                                <StaticImage
                                                                    className="ml-2 d-inline-block"
                                                                    src="../oldCv/img/logos/docker.png" alt="docker"
                                                                    placeholder="blurred"
                                                                    layout="fixed"
                                                                    width={50}
                                                                    height={35}
                                                                    style={{ marginLeft: 10, marginRight: 10 }}
                                                                />
                                                                <StaticImage
                                                                    className="ml-2 d-inline-block"
                                                                    src="../oldCv/img/logos/linux.png" alt="linux"
                                                                    placeholder="blurred"
                                                                    layout="fixed"
                                                                    width={45}
                                                                    height={35}
                                                                    style={{ marginLeft: 10, marginRight: 10 }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services d-flex align-items-start">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon">
                                                <FontAwesomeIcon icon={["fal", "laptop-code"]} />
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="ftco-section ftco-counter bg-light img pt-3" id="section-counter">
                        <div className="container">
                            <div className="row justify-content-center mb-1">
                                <div className="col-md-10 text-center heading-section ftco-animate">
                                    <h2 className="mb-4">
                                        <FormattedMessage
                                            id="projects_title"
                                            defaultMessage="projects_title"
                                        />
                                    </h2>
                                </div>
                            </div>
                            <Row className="justify-content-center">
                                <Col xs={3} className="d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <h4 className="number text-primary" data-number="36">+35</h4>
                                            <h5 className="text-secondary">
                                                <FormattedMessage
                                                    id="github_experience"
                                                    defaultMessage="github_experience"
                                                />
                                            </h5>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={3} className="d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <h4 className="number text-primary" data-number="5">+5</h4>
                                            <h5 className="text-secondary">
                                                <FormattedMessage
                                                    id="years_experience"
                                                    defaultMessage="years_experience"
                                                />
                                            </h5>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={3} className="d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <h4 className="number text-primary" data-number="10">+10</h4>
                                            <h5 className="text-secondary">
                                                <FormattedMessage
                                                    id="managed_projects"
                                                    defaultMessage="managed_projects"
                                                />
                                            </h5>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={3} className="d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <h4 className="number text-primary" data-number="2">2</h4>
                                            <h5 className="text-secondary">
                                                <FormattedMessage
                                                    id="mobile_apps"
                                                    defaultMessage="mobile_apps"
                                                />
                                            </h5>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </section>

                    <section className="bg-primary pb-1">
                        <div className="container-fluid">
                            <div className="row justify-content-center pt-5">
                                <div className="col-md-7 text-center">
                                    <h2 className="mb-4 text-light">
                                        <FormattedMessage
                                            id="experience"
                                            defaultMessage="experience"
                                        />
                                    </h2>
                                    <p></p>
                                </div>
                            </div>
                            <div className="row ftco-animate">
                                <div className="col-md-12">
                                    <Row >
                                        <Col xs={3} className="item">
                                            <div className="testimony-wrap p-4 text-center">
                                                <StaticImage
                                                    src="../img/ideaCodex.jpeg" alt="ideaCodex"
                                                    placeholder="blurred"
                                                    layout="fixed"
                                                    width={100}
                                                    height={100}
                                                    className={circle}
                                                />
                                                <div className="text-light">
                                                    <p className="mb-4">
                                                        <FormattedMessage
                                                            id="exp-cont-1"
                                                            defaultMessage="exp-cont-1"
                                                        />
                                                    </p>
                                                    <a href="www.ideacodex.co/" target="_blank">
                                                        <p className="text-light">Idea Codex</p>
                                                    </a>
                                                    <span className="text-light h4">
                                                        <FormattedMessage
                                                            id="exp-t1"
                                                            defaultMessage="exp-t1"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={3} className="item">
                                            <div className="testimony-wrap p-4 text-center">
                                                <StaticImage
                                                    src="../img/10x.png" alt="10x"
                                                    placeholder="blurred"
                                                    layout="fixed"
                                                    width={100}
                                                    height={100}
                                                    className={circle}
                                                />
                                                <div className="text-light">
                                                    <p className="mb-4">
                                                        <FormattedMessage
                                                            id="exp-cont-2"
                                                            defaultMessage="exp-cont-2"
                                                        />
                                                    </p>
                                                    <p className="text-light">10x Informatica</p>
                                                    <span className="text-light h4">
                                                        <FormattedMessage
                                                            id="exp-t2"
                                                            defaultMessage="exp-t2"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={3} className="item">                                            <div className="testimony-wrap p-4 text-center">
                                            <StaticImage
                                                src="../img/bi.jpg" alt="bi"
                                                placeholder="blurred"
                                                layout="fixed"
                                                width={100}
                                                height={100}
                                                className={circle}
                                            />
                                            <div className="text-light">
                                                <p className="mb-4">
                                                    <FormattedMessage
                                                        id="exp-cont-3"
                                                        defaultMessage="exp-cont-3"
                                                    />
                                                </p>
                                                <p className="text-light">Banco Industrial S.A.</p>
                                                <span className="text-light h5">
                                                    <FormattedMessage
                                                        id="exp-t3"
                                                        defaultMessage="exp-t3"
                                                    /></span>
                                            </div>
                                        </div>
                                        </Col>
                                        <Col xs={3} className="item">
                                            <div className="testimony-wrap p-4 text-center">
                                                <StaticImage
                                                    src="https://encrypted-tbn0.gstatic.com/./img?q=tbn%3AANd9GcRUTwpWFWHceUTHAx7toKUbZs0NBXn_1ZJqxg&usqp=CAU" alt="bi"
                                                    placeholder="blurred"
                                                    layout="fixed"
                                                    width={100}
                                                    height={100}
                                                    className={circle}
                                                />
                                                <div className="text-light">
                                                    <p className="mb-4">
                                                        <FormattedMessage
                                                            id="exp-cont-4"
                                                            defaultMessage="exp-cont-4"
                                                        /></p>
                                                        <br></br><br></br>
                                                    <p className="text-light">Tigo Guatemala</p>
                                                    <span className="text-light h4">
                                                        <FormattedMessage
                                                            id="exp-t4"
                                                            defaultMessage="exp-t4"
                                                        /></span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-light pb-0">
                        <div className="container pb-0">
                            <div className="row justify-content-center mb-3 pb-3 pt-3">
                                <div className="col-md-7 text-center heading-section ftco-animate">
                                    <h2>
                                        <FormattedMessage
                                            id="portfolio"
                                            defaultMessage="portfolio"
                                        />
                                    </h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="blog-entry">
                                        <a href="https://app.canjeaton.com/" className="block-20">
                                            <StaticImage
                                                src="../img/canjeaton.png" alt="canjeaton"
                                                placeholder="blurred"
                                                layout="fixed"
                                                width={140}
                                                height={110}
                                            />
                                        </a>

                                        <div className="text text-center py-3">
                                            <div className="">
                                                <div><a href="https://app.canjeaton.com/">
                                                    <FormattedMessage
                                                        id="post_date1"
                                                        defaultMessage="post_date1"
                                                    />
                                                </a></div>
                                                <div><a href="https://app.canjeaton.com/">
                                                    <FormattedMessage
                                                        id="post_label1"
                                                        defaultMessage="post_label1"
                                                    />
                                                </a></div>
                                            </div>
                                            <div className="desc">
                                                <h5 ><a href="https://app.canjeaton.com/">
                                                    <FormattedMessage
                                                        id="post_title1"
                                                        defaultMessage="post_title1"
                                                    />
                                                </a> <a className="text-primary" href="http://tenxprotocol.com/">10x Informatica</a> </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="blog-entry">
                                        <a href="http://www.rrhhpayroll.com/" className="block-20" style={{ backgroundImage: "url('http://www.rrhhpayroll.com/storage/banners/1.jpg');" }}>
                                            <StaticImage
                                                src="http://demo.rrhhpayroll.com/storage/banners/1.jpg" alt="canjeaton"
                                                placeholder="blurred"
                                                layout="fixed"
                                                width={140}
                                                height={110}
                                            />
                                        </a>
                                        <div className="text text-center py-3">
                                            <div className="">
                                                <div><a href="http://www.rrhhpayroll.com/">
                                                    <FormattedMessage
                                                        id="post_date2"
                                                        defaultMessage="post_date2"
                                                    />
                                                </a></div>
                                                <div>
                                                    <a href="http://www.rrhhpayroll.com/">
                                                        <FormattedMessage
                                                            id="post_label2"
                                                            defaultMessage="post_label2"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="desc">
                                                <h5 ><a href="http://www.rrhhpayroll.com/">
                                                    <FormattedMessage
                                                        id="post_title2"
                                                        defaultMessage="post_title2"
                                                    />
                                                </a></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-none col-md-4">
                                    <div className="blog-entry" >
                                        <a href="http://pakal.website/" className="block-20" style={{ backgroundImage: "url('../img/pakal.png');" }}>
                                        </a>
                                        <StaticImage
                                            src="../img/pakal.png" alt="pakal"
                                            placeholder="blurred"
                                            layout="fixed"
                                            width={140}
                                            height={110}
                                        />
                                        <div className="text text-center py-3">
                                            <div className="">
                                                <div><a href="http://pakal.website/">
                                                    <FormattedMessage
                                                        id="post_date3"
                                                        defaultMessage="post_date3"
                                                    />
                                                </a></div>
                                                <div><a href="http://pakal.website/">
                                                    <FormattedMessage
                                                        id="post_label3"
                                                        defaultMessage="post_label3"
                                                    />
                                                </a></div>
                                            </div>
                                            <div className="desc">
                                                <h5 ><a href="http://pakal.website/">A
                                                    <FormattedMessage
                                                        id="post_title3"
                                                        defaultMessage="post_title3"
                                                    />
                                                </a></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="blog-entry" >
                                        <a target="_blank" href="http://tecunapp.com/" className="block-20"
                                            style={{ backgroundImage: "url('../img/grupotecun.png');" }}>
                                            <StaticImage
                                                src="../img/grupotecun.png" alt="grupotecun"
                                                placeholder="blurred"
                                                layout="fixed"
                                                width={140}
                                                height={110}
                                            />
                                        </a>
                                        <div className="text text-center py-3">
                                            <div className="">
                                                <div><a target="_blank" href="http://tecunapp.com/">
                                                    <FormattedMessage
                                                        id="post_date3"
                                                        defaultMessage="post_date3"
                                                    />
                                                </a></div>
                                                <div>
                                                    <a target="_blank" href="http://tecunapp.com/">
                                                        <FormattedMessage
                                                            id="post_label3"
                                                            defaultMessage="post_label3"
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="desc">
                                                <h5 ><a target="_blank" href="http://tecunapp.com/"><FormattedMessage
                                                        id="post_title3"
                                                        defaultMessage="post_title3"
                                                    /></a></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </SimpleLocalize>
    );
}

export default ResumePrintPage;
