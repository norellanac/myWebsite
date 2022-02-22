import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import SimpleLocalize from "../SimpleLocalize";
import { FormattedMessage } from "react-intl";
import LinkTranslated from "../LinkTranslated";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faMobileAlt,
  faMap,
  faCalendarAlt,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faChrome,
  faFacebook,
  faInstagram,
  faWhatsapp,
  faAndroid,
  faReact,
  faGooglePlay,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { circle } from "../components/general.module.css";
import {
  Row,
  Container,
  Col,
  Card,
  Badge,
  Form,
  FormControl,
  Button,
  ListGroup,
} from "react-bootstrap";

function ResumePage(props) {
  // const language = props.pageContext.language;
  console.log("resume: ", props);
  return (
    <SimpleLocalize {...props}>
      <div>
        <div>
          <section className="bg-light">
            <Container fluid className="mt-4">
              <Row>
                <Col xs={12} lg={8} md={8} className="">
                  <div className=" d-flex align-items-start">
                    <div className="d-flex align-items-center justify-content-center">
                      <StaticImage
                        src="../img/norellanac.jpeg"
                        alt="norellanac"
                        placeholder="blurred"
                        layout="fixed"
                        width={150}
                        height={150}
                        style={{
                          marginRight: 30,
                          marginLeft: 30,
                          marginTop: 30,
                        }}
                        className={circle}
                      />
                    </div>
                    <div className="media-body pl-4 ml-4">
                      <h1
                        className="heading mb-2 text-primary"
                        style={{ fontsize: "35px;" }}
                      >
                        Nery Alexis Orellana Cuy
                      </h1>
                      <p>
                        <span className="ml-4">
                          <FontAwesomeIcon
                            style={{ marginRight: 10 }}
                            icon={faMobileAlt}
                            size="1x"
                          />
                          <FormattedMessage id="phone" defaultMessage="phone" />
                          : <a href="tel:50233120413">+502 33120413</a>{" "}
                        </span>{" "}
                        <br />
                        <span className="ml-4">
                          <FontAwesomeIcon
                            style={{ marginRight: 10 }}
                            icon={faEnvelopeOpenText}
                          />
                          <FormattedMessage id="email" defaultMessage="email" />
                          :{" "}
                          <a href="mailto:alexis_oc@yahoo.es">
                            alexis_oc@yahoo.es
                          </a>{" "}
                        </span>{" "}
                        <br />
                        <span className="ml-4">
                          <FontAwesomeIcon
                            style={{ marginRight: 10 }}
                            icon={faMap}
                            size="1x"
                          />
                          <FormattedMessage
                            id="address"
                            defaultMessage="address"
                          />
                          :{" "}
                          <a href="https://goo.gl/maps/tzokv8QcD8RgRRms9">
                            San José Pinula, Guatemala
                          </a>
                        </span>{" "}
                        <br />
                        <span className="ml-4">
                          <FontAwesomeIcon
                            style={{ marginRight: 10 }}
                            icon={faChrome}
                            size="1x"
                          />
                          <FormattedMessage
                            id="website"
                            defaultMessage="website"
                          />
                          :{" "}
                          <a href="https://norellanac.github.io/myWebsite">
                            norellanac
                          </a>
                        </span>{" "}
                        <br />
                        <span
                          className=" h1 mt-5 text-center ml-5"
                          style={{ fontsize: "60px;" }}
                        >
                          <a href="https://github.com/norellanac">
                            <FontAwesomeIcon
                              style={{ marginRight: 20 }}
                              icon={faGithub}
                              size="1x"
                            />
                          </a>
                          <a href="https://www.linkedin.com/in/nery-alexis-orellana-cuy-3612888b/">
                            <FontAwesomeIcon
                              style={{ marginRight: 20 }}
                              icon={faLinkedin}
                              size="1x"
                            />
                          </a>
                          <a href="https://m.facebook.com/alexis.orellana2">
                            <FontAwesomeIcon
                              style={{ marginRight: 20 }}
                              icon={faFacebook}
                              size="1x"
                            />
                          </a>
                          <a href="https://www.instagram.com/norellanac/">
                            <FontAwesomeIcon
                              style={{ marginRight: 20 }}
                              icon={faInstagram}
                              size="1x"
                            />
                          </a>
                          <a href="https://api.whatsapp.com/send?phone=50233120413">
                            <FontAwesomeIcon
                              style={{ marginRight: 20 }}
                              icon={faWhatsapp}
                              size="1x"
                            />{" "}
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </Col>

                <Col xs={12} lg={4} md={4} className="justify-content-center">
                  <div className="media block-6 services d-flex text-center justify-content-center">
                    <div className="">
                      <StaticImage
                        src="../oldCv/img/umg.png"
                        alt="umg"
                        placeholder="blurred"
                        layout="fixed"
                        width={100}
                        height={100}
                        style={{
                          display: "block",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                        className={circle}
                      />
                      <div style={{ marginLeft: 0 }}>
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
                    <FormattedMessage id="skills" defaultMessage="skills" />
                  </h2>
                </div>
              </div>

              <div>
                <Row>
                  <Col xs={12} md={4}>
                    <Card bg="light" text="dark" className="mb-2">
                      <Card.Header>Databases</Card.Header>
                      <Card.Body>
                        <div className="media-body">
                          <div className="progress mt-3">
                            <div
                              className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "80%" }}
                            >
                              <strong>MySql</strong>
                            </div>
                          </div>
                          <div className="progress mt-3">
                            <div
                              className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "60%" }}
                            >
                              <strong>DDL, DML </strong>
                            </div>
                          </div>
                          <div className="progress mt-3">
                            <div
                              className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "50%" }}
                            >
                              <strong>Triggers, store procedures</strong>
                            </div>
                          </div>
                          <div className="mt-4">
                            <StaticImage
                              className="ml-2 d-inline-block"
                              src="../oldCv/img/logos/mySql.png"
                              alt="mySql"
                              placeholder="blurred"
                              layout="fixed"
                              width={60}
                              height={30}
                            />
                            <StaticImage
                              className="ml-2 d-inline-block"
                              src="../oldCv/img/logos/oracle.png"
                              alt="oracle"
                              placeholder="blurred"
                              layout="fixed"
                              width={60}
                              height={30}
                            />
                            <StaticImage
                              className="ml-2 d-inline-block"
                              src="../oldCv/img/logos/postgres.png"
                              alt="postgres"
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
                  <Col xs={12} md={4}>
                    <Card bg="light" text="dark" className="mb-2">
                      <Card.Header>Front End</Card.Header>
                      <Card.Body>
                        <div className="">
                          <div className="progress mt-3">
                            <div
                              className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="90"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "90%" }}
                            >
                              <strong>Bootstrap</strong>
                            </div>
                          </div>
                          <div className="progress mt-3">
                            <div
                              className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "80%" }}
                            >
                              <strong> React</strong>
                            </div>
                          </div>
                          <div className="progress mt-3">
                            <div
                              className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "50%" }}
                            >
                              <strong>Gatsby</strong>
                            </div>
                          </div>
                          <div className="mt-4">
                            <StaticImage
                              className="ml-2 d-inline-block"
                              src="../oldCv/img/logos/javascript.png"
                              alt="javascript"
                              placeholder="blurred"
                              layout="fixed"
                              width={60}
                              height={35}
                            />
                            <StaticImage
                              className="ml-2 d-inline-block"
                              src="../oldCv/img/logos/bootstrap.png"
                              alt="bootstrap"
                              placeholder="blurred"
                              layout="fixed"
                              width={55}
                              height={35}
                            />
                            <StaticImage
                              className="ml-2 d-inline-block"
                              src="../oldCv/img/logos/materialize.png"
                              alt="materialize"
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
                  <Col xs={12} md={4}>
                    <Card bg="light" text="dark" className="mb-2">
                      <Card.Header>Movil Apps</Card.Header>
                      <Card.Body>
                        <div>
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="flaticon">
                              <i className="fab fa-android"></i>
                            </span>
                          </div>
                          <div className="media-body pl-4">
                            <div className="progress mt-3">
                              <div
                                className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="95"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "95%" }}
                              >
                                <strong>React Native</strong>
                              </div>
                            </div>
                            <div className="progress mt-3">
                              <div
                                className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="60"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "60%" }}
                              >
                                <strong>Redux</strong>
                              </div>
                            </div>
                            <div className="progress mt-3">
                              <div
                                className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                role="progressbar"
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: "50%" }}
                              >
                                <strong>UI/UX</strong>
                              </div>
                            </div>
                            <div className="mt-4">
                              <StaticImage
                                className="ml-2 d-inline-block"
                                src="../oldCv/img/logos/android.png"
                                alt="android"
                                placeholder="blurred"
                                layout="fixed"
                                width={40}
                                height={35}
                                style={{ marginLeft: 30 }}
                              />
                              <StaticImage
                                className="ml-2 d-inline-block"
                                src="../oldCv/img/logos/reactjs.png"
                                alt="reactjs"
                                placeholder="blurred"
                                layout="fixed"
                                width={45}
                                height={35}
                              />
                              <StaticImage
                                className="ml-2 d-inline-block"
                                src="../oldCv/img/logos/apple.png"
                                alt="apple"
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
                  <Col xs={12} md={4}>
                    <Card bg="light" text="dark" className="mb-2">
                      <Card.Header>
                        <FormattedMessage
                          id="servers"
                          defaultMessage="servers"
                        />
                      </Card.Header>
                      <Card.Body>
                        <div>
                          <div className="progress mt-3">
                            <div
                              className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="80"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "80%" }}
                            >
                              <strong>Amazon EC2, Amazon RDS</strong>
                            </div>
                          </div>
                          <div className="progress mt-3">
                            <div
                              className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "75%" }}
                            >
                              <strong>Docker</strong>
                            </div>
                          </div>
                          <div className="progress mt-3">
                            <div
                              className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "50%" }}
                            >
                              <strong>kubernetes</strong>
                            </div>
                          </div>
                          <div className="mt-4">
                            <StaticImage
                              className="ml-2 d-inline-block"
                              src="../img/aws.png"
                              alt="aws"
                              placeholder="blurred"
                              layout="fixed"
                              width={40}
                              height={35}
                              style={{ marginLeft: 30, marginRight: 10 }}
                            />
                            <StaticImage
                              className="ml-2 d-inline-block"
                              src="../oldCv/img/logos/kubernetes.png"
                              alt="kubernetes"
                              placeholder="blurred"
                              layout="fixed"
                              width={35}
                              height={35}
                              style={{ marginRight: 10 }}
                            />
                            <StaticImage
                              className="ml-2 d-inline-block"
                              src="../img/docker1.png"
                              alt="docker1"
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
                  <Col xs={12} md={4}>
                    <Card bg="light" text="dark" className="mb-2">
                      <Card.Header>Back End</Card.Header>
                      <Card.Body>
                        <div>
                          <div className="progress mt-3">
                            <div
                              className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="90"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "90%" }}
                            >
                              <strong>Laravel Framework</strong>
                            </div>
                          </div>
                          <div className="progress mt-3">
                            <div
                              className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "60%" }}
                            >
                              <strong>API REST</strong>
                            </div>
                          </div>
                          <div className="progress mt-3">
                            <div
                              className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style={{ width: "50%" }}
                            >
                              <strong>Java Spring Framework</strong>
                            </div>
                          </div>
                          <div className="mt-4">
                            <StaticImage
                              className="ml-2 d-inline-block"
                              src="../img/laravel.png"
                              alt="laravel"
                              placeholder="blurred"
                              layout="fixed"
                              width={40}
                              height={35}
                              style={{ marginLeft: 30, marginRight: 10 }}
                            />
                            <StaticImage
                              className="ml-2 mr-4 d-inline-block"
                              src="../oldCv/img/logos/java.png"
                              alt="java"
                              placeholder="blurred"
                              layout="fixed"
                              width={20}
                              height={35}
                              style={{ marginLeft: 10, marginRight: 10 }}
                            />
                            <StaticImage
                              className="ml-2 d-inline-block"
                              src="../oldCv/img/logos/spring.png"
                              alt="spring"
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
                  <Col xs={12} md={4}>
                    <Card bg="light" text="dark" className="mb-2">
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
                                <div
                                  className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                  role="progressbar"
                                  aria-valuenow="95"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "95%" }}
                                >
                                  <strong>Git, Github</strong>
                                </div>
                              </div>
                              <div className="progress mt-3">
                                <div
                                  className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "60%" }}
                                >
                                  <strong>Agile Scrum</strong>
                                </div>
                              </div>
                              <div className="progress mt-3">
                                <div
                                  className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                  role="progressbar"
                                  aria-valuenow="50"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "50%" }}
                                >
                                  <strong>CI/CD</strong>
                                </div>
                              </div>
                              <div className="mt-4 align-items-center justify-content-center">
                                <StaticImage
                                  className="ml-2 d-inline-block"
                                  src="../oldCv/img/logos/github.png"
                                  alt="github"
                                  placeholder="blurred"
                                  layout="fixed"
                                  width={35}
                                  height={35}
                                  style={{ marginLeft: 30, marginRight: 10 }}
                                />
                                <StaticImage
                                  className="ml-2 d-inline-block"
                                  src="../oldCv/img/logos/docker.png"
                                  alt="docker"
                                  placeholder="blurred"
                                  layout="fixed"
                                  width={50}
                                  height={35}
                                  style={{ marginLeft: 10, marginRight: 10 }}
                                />
                                <StaticImage
                                  className="ml-2 d-inline-block"
                                  src="../oldCv/img/logos/linux.png"
                                  alt="linux"
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

          <section
            className="ftco-section ftco-counter bg-light img pt-5"
            id="section-counter"
          >
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
                <Col
                  xs={12}
                  md={3}
                  className="mt-3 d-flex justify-content-center counter-wrap ftco-animate"
                >
                  <div className="block-18 text-center">
                    <div className="text">
                      <h4 className="number text-primary" data-number="36">
                        +35
                      </h4>
                      <h5 className="text-secondary">
                        <FormattedMessage
                          id="github_experience"
                          defaultMessage="github_experience"
                        />
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={3}
                  className="mt-3 d-flex justify-content-center counter-wrap ftco-animate"
                >
                  <div className="block-18 text-center">
                    <div className="text">
                      <h4 className="number text-primary" data-number="5">
                        +5
                      </h4>
                      <h5 className="text-secondary">
                        <FormattedMessage
                          id="years_experience"
                          defaultMessage="years_experience"
                        />
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={3}
                  className="mt-3 d-flex justify-content-center counter-wrap ftco-animate"
                >
                  <div className="block-18 text-center">
                    <div className="text">
                      <h4 className="number text-primary" data-number="10">
                        +10
                      </h4>
                      <h5 className="text-secondary">
                        <FormattedMessage
                          id="managed_projects"
                          defaultMessage="managed_projects"
                        />
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col
                  xs={12}
                  md={3}
                  className="mt-3 d-flex justify-content-center counter-wrap ftco-animate"
                >
                  <div className="block-18 text-center">
                    <div className="text">
                      <h4 className="number text-primary" data-number="2">
                        2
                      </h4>
                      <h5 className="text-secondary">
                        <FormattedMessage
                          id="mobile_apps"
                          defaultMessage="mobile_apps"
                        />
                      </h5>
                    </div>
                  </div>
                </Col>
                <p></p>
              </Row>
            </div>
          </section>

          <section className="bg-primary pb-1">
            <div className="container-fluid">
              <div className="row justify-content-center pt-3">
                <div className="col-md-7 text-center">
                  <h2 className="mb-4 text-light">
                    <FormattedMessage
                      id="experience"
                      defaultMessage="experience"
                    />
                  </h2>
                </div>
              </div>
              <div className="row ftco-animate">
                <div className="col-md-12">
                  <Row>
                    <Col xs={12} md={3} className="mt-2 item">
                      <div className="testimony-wrap p-4 text-center">
                        <a
                          className="text-primary"
                          target="_blank"
                          href="http://www.ideacodex.co/"
                        >
                          <StaticImage
                            src="../img/ideaCodex.jpeg"
                            alt="ideaCodex"
                            placeholder="blurred"
                            layout="fixed"
                            width={100}
                            height={100}
                            className={circle}
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          />
                        </a>
                        <div className="text-light">
                          <p className="mb-4">
                            <FormattedMessage
                              id="exp-cont-1"
                              defaultMessage="exp-cont-1"
                            />
                          </p>
                          <p className="mb-1">
                            <FormattedMessage
                              id="exp-date-1"
                              defaultMessage="exp-date-1"
                            />
                          </p>
                          <a href="www.ideacodex.co/" target="_blank">
                            <h5 className="text-light">Idea Codex</h5>
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
                    <Col xs={12} md={3} className="mt-2 item">
                      <div className="testimony-wrap p-4 text-center">
                        <a href="http://tenxprotocol.com/" target="_blank">
                          <StaticImage
                            src="../img/10x.png"
                            alt="10x"
                            placeholder="blurred"
                            layout="fixed"
                            width={100}
                            height={100}
                            className={circle}
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          />
                        </a>
                        <div className="text-light">
                          <p className="mb-4">
                            <FormattedMessage
                              id="exp-cont-2"
                              defaultMessage="exp-cont-2"
                            />
                          </p>
                          <p className="mb-1">
                            <FormattedMessage
                              id="exp-date-2"
                              defaultMessage="exp-date-2"
                            />
                          </p>
                          <a href="http://tenxprotocol.com/" target="_blank">
                            <h5 className="text-light">10x Informatica</h5>{" "}
                          </a>
                          <span className="text-light h4">
                            <FormattedMessage
                              id="exp-t2"
                              defaultMessage="exp-t2"
                            />
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={3} className="mt-2 item">
                      <div className="testimony-wrap p-4 text-center">
                        <a
                          href="https://www.corporacionbi.com/"
                          target="_blank"
                        >
                          <StaticImage
                            src="../img/bi.jpg"
                            alt="bi"
                            placeholder="blurred"
                            layout="fixed"
                            width={100}
                            height={100}
                            className={circle}
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          />
                        </a>
                        <div className="text-light">
                          <p className="mb-4">
                            <FormattedMessage
                              id="exp-cont-3"
                              defaultMessage="exp-cont-3"
                            />
                          </p>
                          <p className="mb-1">
                            <FormattedMessage
                              id="exp-date-3"
                              defaultMessage="exp-date-3"
                            />
                          </p>
                          <a
                            href="https://www.corporacionbi.com/"
                            target="_blank"
                          >
                            <h5 className="text-light">
                              Banco Industrial S.A.
                            </h5>
                          </a>
                          <span className="text-light h5">
                            <FormattedMessage
                              id="exp-t3"
                              defaultMessage="exp-t3"
                            />
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={3} className="mt-2 item">
                      <div className="testimony-wrap p-4 text-center">
                        <a href="https://www.tigo.com.gt/" target="_blank">
                          <StaticImage
                            src="https://encrypted-tbn0.gstatic.com/./img?q=tbn%3AANd9GcRUTwpWFWHceUTHAx7toKUbZs0NBXn_1ZJqxg&usqp=CAU"
                            alt="bi"
                            placeholder="blurred"
                            layout="fixed"
                            width={100}
                            height={100}
                            className={circle}
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          />
                        </a>
                        <div className="text-light">
                          <p className="mb-4">
                            <FormattedMessage
                              id="exp-cont-4"
                              defaultMessage="exp-cont-4"
                            />
                          </p>
                          <p className="mb-1">
                            <FormattedMessage
                              id="exp-date-4"
                              defaultMessage="exp-date-4"
                            />
                          </p>
                          <br></br>
                          <a href="https://www.tigo.com.gt/" target="_blank">
                            <h5 className="text-light">Tigo Guatemala</h5>
                          </a>
                          <span className="text-light h4">
                            <FormattedMessage
                              id="exp-t4"
                              defaultMessage="exp-t4"
                            />
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-light pb-0 mt-4 pb-2">
            <div className="container-fluid">
              <div className="row justify-content-center pt-1">
                <div className="col-md-7 text-center">
                  <h2 className="mb-1 text-dark">
                    <FormattedMessage
                      id="portfolio"
                      defaultMessage="portfolio"
                    />
                  </h2>
                </div>
              </div>
              <div className="row ftco-animate">
                <div className="col-md-12">
                  <Row>
                    <Col xs={12} md={4} className="mt-1 item">
                      <div className="testimony-wrap p-4 text-center">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.tenxinformatica.gt.canjeaton"
                          target="_blank"
                        >
                          <StaticImage
                            src="https://play-lh.googleusercontent.com/Rl1lvI4YXKTEnIuLlFB1aGgdMicZR59yobAnAM1piDWGJ1bszm1vcJKk7pCjleJnAA=s180"
                            alt="ideaCodex"
                            placeholder="blurred"
                            layout="fixed"
                            width={75}
                            height={75}
                            className={circle}
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          />
                        </a>
                        <div className="text-dark">
                          <p className="mb-4">
                            <FormattedMessage
                              id="post_title1"
                              defaultMessage="post_title1"
                            />
                            <FontAwesomeIcon
                              style={{ marginRight: 5, marginLeft: 10 }}
                              icon={faCalendarAlt}
                              size="1x"
                              className="text-secondary"
                            />
                            <FormattedMessage
                              id="post_date1"
                              defaultMessage="post_date1"
                            />
                            <FontAwesomeIcon
                              style={{ marginRight: 5, marginLeft: 10 }}
                              icon={faBuilding}
                              size="1x"
                              className="text-secondary"
                            />
                            <a
                              className="text-primary"
                              target="_blank"
                              href="http://tenxprotocol.com/"
                            >
                              10x Informatica
                            </a>
                          </p>
                          <p className="mb-1">
                            <a
                              href="https://play.google.com/store/apps/details?id=com.tenxinformatica.gt.canjeaton"
                              target="_blank"
                            >
                              <FontAwesomeIcon
                                style={{ marginRight: 10 }}
                                icon={faAndroid}
                                size="2x"
                                className="text-success"
                              />
                              <FontAwesomeIcon
                                style={{ marginRight: 10 }}
                                icon={faReact}
                                size="2x"
                                className="text-primary"
                              />
                              <FontAwesomeIcon
                                style={{ marginRight: 10 }}
                                icon={faGooglePlay}
                                size="2x"
                                className="text-primary"
                              />
                            </a>
                          </p>
                          <span className="text-dark h5">
                            <FormattedMessage
                              id="post_label1"
                              defaultMessage="post_label1"
                            />
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={4} className="mt-1 item">
                      <div className="testimony-wrap p-4 text-center">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.grupotecun.gtm.tecunapp"
                          target="_blank"
                        >
                          <StaticImage
                            src="https://play-lh.googleusercontent.com/aXCVTpBvCmcpVt6hGKR-IsjYQ5fYQLCa8-CLYfnHeYkkvUVlQVoxsGdFqn2LY5XKEyk=s180"
                            alt="ideaCodex"
                            placeholder="blurred"
                            layout="fixed"
                            width={75}
                            height={75}
                            className={circle}
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          />
                        </a>
                        <div className="text-dark">
                          <p className="mb-4">
                            <FormattedMessage
                              id="post_title2"
                              defaultMessage="post_title2"
                            />
                            <FontAwesomeIcon
                              style={{ marginRight: 5, marginLeft: 10 }}
                              icon={faCalendarAlt}
                              size="1x"
                              className="text-secondary"
                            />
                            <FormattedMessage
                              id="post_date2"
                              defaultMessage="post_date2"
                            />
                            <FontAwesomeIcon
                              style={{ marginRight: 5, marginLeft: 10 }}
                              icon={faBuilding}
                              size="1x"
                              className="text-secondary"
                            />
                            <a
                              className="text-primary"
                              target="_blank"
                              href="http://www.ideacodex.co/"
                            >
                              IdeaCodex
                            </a>
                          </p>
                          <p className="mb-1">
                            <a
                              href="https://play.google.com/store/apps/details?id=com.grupotecun.gtm.tecunapp"
                              target="_blank"
                            >
                              <FontAwesomeIcon
                                style={{ marginRight: 10 }}
                                icon={faAndroid}
                                size="2x"
                                className="text-success"
                              />
                              <FontAwesomeIcon
                                style={{ marginRight: 10 }}
                                icon={faReact}
                                size="2x"
                                className="text-primary"
                              />
                              <FontAwesomeIcon
                                style={{ marginRight: 10 }}
                                icon={faGooglePlay}
                                size="2x"
                                className="text-primary"
                              />
                            </a>
                          </p>
                          <span className="text-dark h5">
                            <FormattedMessage
                              id="post_label2"
                              defaultMessage="post_label2"
                            />
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} md={4} className="mt-1 item">
                      <div className="testimony-wrap p-4 text-center">
                        <a href="http://www.rrhhpayroll.com" target="_blank">
                          <StaticImage
                            src="http://demo.rrhhpayroll.com/storage/banners/1.jpg"
                            alt="bi"
                            placeholder="blurred"
                            layout="fixed"
                            width={75}
                            height={75}
                            className={circle}
                            style={{
                              display: "block",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          />
                        </a>
                        <div className="text-dark">
                          <p className="mb-4">
                            <FormattedMessage
                              id="post_title3"
                              defaultMessage="post_title3"
                            />
                            <FontAwesomeIcon
                              style={{ marginRight: 5, marginLeft: 10 }}
                              icon={faCalendarAlt}
                              size="1x"
                              className="text-secondary"
                            />
                            <FormattedMessage
                              id="post_date3"
                              defaultMessage="post_date3"
                            />
                            <FontAwesomeIcon
                              style={{ marginRight: 5, marginLeft: 10 }}
                              icon={faBuilding}
                              size="1x"
                              className="text-secondary"
                            />
                            <a
                              className="text-primary"
                              target="_blank"
                              href="http://www.ideacodex.co/"
                            >
                              IdeaCodex
                            </a>
                          </p>
                          <p className="mb-1">
                            <a
                              href="http://www.rrhhpayroll.com"
                              target="_blank"
                            >
                              <FontAwesomeIcon
                                style={{ marginRight: 10 }}
                                icon={faAndroid}
                                size="2x"
                                className="text-success"
                              />
                              <FontAwesomeIcon
                                style={{ marginRight: 10 }}
                                icon={faReact}
                                size="2x"
                                className="text-primary"
                              />
                              <FontAwesomeIcon
                                style={{ marginRight: 10 }}
                                icon={faLaravel}
                                size="2x"
                                className="text-primary"
                              />
                            </a>
                          </p>
                          <span className="text-dark h5">
                            <FormattedMessage
                              id="post_label3"
                              defaultMessage="post_label3"
                            />
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </section>

          {/* printed resume */}
          <section className="pt-2">
            <Container fluid className="mt-4">
              <Row>
                <Col xs={12} lg={12} md={12} className="">
                  <div className=" d-flex align-items-start">
                    <div className="d-flex align-items-center justify-content-center">
                      <StaticImage
                        src="../img/norellanac.jpeg"
                        alt="norellanac"
                        placeholder="blurred"
                        layout="fixed"
                        width={160}
                        height={160}
                        style={{
                          marginRight: 30,
                          marginLeft: 30,
                          marginTop: 30,
                        }}
                        className={circle}
                      />
                    </div>
                    <div className="media-body pl-4 ml-4 mt-3">
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <span
                            className="mb-2 text-primary h1"
                            style={{ fontsize: "35px;" }}
                          >
                            Nery Alexis Orellana
                          </span>
                          <span className="mb-2 text-primary h4">
                            {" "}
                            - PHP Laravel Dev{" "}
                            <FontAwesomeIcon
                              icon={faReact}
                              size="1x"
                              className="text-primary"
                            />
                          </span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span className="mr-5 pr-5 text-secondary h5">
                            <span className="ml-4">
                              <FontAwesomeIcon
                                style={{ marginRight: 5 }}
                                icon={faMobileAlt}
                                size="1x"
                              />
                              <a href="tel:50233120413">+502 33120413</a>{" "}
                            </span>
                            {" | "}
                            <span className="ml-5 pl-5">
                              <FontAwesomeIcon
                                style={{ marginRight: 5 }}
                                icon={faEnvelopeOpenText}
                              />
                              <a href="mailto:alexis_oc@yahoo.es">
                                alexis_oc@yahoo.es
                              </a>{" "}
                            </span>
                            {" | "}
                            <span
                              className=" mt-5 text-center ml-5"
                              style={{ fontsize: "30px;" }}
                            >
                              <a href="https://github.com/norellanac">
                                <FontAwesomeIcon
                                  style={{ marginRight: 5 }}
                                  icon={faGithub}
                                  size="1x"
                                />
                              </a>
                              <a href="https://www.linkedin.com/in/nery-alexis-orellana-cuy-3612888b/">
                                <FontAwesomeIcon
                                  style={{ marginRight: 5 }}
                                  icon={faLinkedin}
                                  size="1x"
                                />
                              </a>
                              <a href="https://m.facebook.com/alexis.orellana2">
                                <FontAwesomeIcon
                                  style={{ marginRight: 5 }}
                                  icon={faFacebook}
                                  size="1x"
                                />
                              </a>
                              <a href="https://www.instagram.com/norellanac/">
                                <FontAwesomeIcon
                                  style={{ marginRight: 5 }}
                                  icon={faInstagram}
                                  size="1x"
                                />
                              </a>
                              <a href="https://api.whatsapp.com/send?phone=50233120413">
                                <FontAwesomeIcon
                                  style={{ marginRight: 5 }}
                                  icon={faWhatsapp}
                                  size="1x"
                                />{" "}
                              </a>
                            </span>
                          </span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <span className="text-secondary h5">
                            Technical Profile{" "}
                          </span>
                        </ListGroup.Item>
                      </ListGroup>
                      <Container className="container mr-5">
                        +5 years developing software, managing some web
                        applications, and a small software development team. 2
                        mobile Android applications deployed in Google Play,
                        created using react-native. Personal website,
                        multi-language developed with{" "}
                        <span style={{ fontWeight: "bold" }}>Gatsby</span>,
                        <a href="https://norellanac.github.io/myWebsite/">
                          {" "}
                          https://norellanac.github.io/myWebsite/
                        </a>
                      </Container>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="mt-5 pr-5">
            <Row>
              <Col
                xs={(3, { offset: 1 })}
                lg={(3, { offset: 1 })}
                md={(3, { offset: 1 })}
              >
                <span style={{ fontWeight: "bold" }}>
                  Programming Languages
                </span>
              </Col>
              <Col xs={8} lg={8} md={8} className="mr-5 pr-5">
                <li>
                  Knowledge and professional experience working with PHP
                  -Laravel, and{" "}
                  <span style={{ fontWeight: "bold" }}>javascript</span>,
                  general knowledge, and self-learning with Java (Spring
                  Framework)
                </li>
              </Col>
            </Row>
            <Row>
              <Col
                xs={(3, { offset: 1 })}
                lg={(3, { offset: 1 })}
                md={(3, { offset: 1 })}
              >
                <span style={{ fontWeight: "bold" }}>Testing :</span>
              </Col>
              <Col xs={8} lg={8} md={8}>
                <li>
                  Use of postman to send requests to web services and general
                  knowledge of selenium
                </li>
                <li>PHP Unit</li>
              </Col>
            </Row>
            <Row>
              <Col
                xs={(3, { offset: 1 })}
                lg={(3, { offset: 1 })}
                md={(3, { offset: 1 })}
              >
                <span style={{ fontWeight: "bold" }}>Methodology :</span>
              </Col>
              <Col xs={8} lg={8} md={8}>
                <li>{`Scrum is an agile way to manage a project, usually software development. 
                                    Agile software development with Scrum is often perceived as a methodology; 
                                    but rather than viewing Scrum as methodology, think of it as a framework for managing a project.`}</li>
              </Col>
            </Row>
            <Row>
              <Col
                xs={(3, { offset: 1 })}
                lg={(3, { offset: 1 })}
                md={(3, { offset: 1 })}
              >
                <span style={{ fontWeight: "bold" }}>Databases :</span>
              </Col>
              <Col xs={8} lg={8} md={8}>
                <li>MySql, MariaDB, MongoDB, oracle, SQLServer</li>
              </Col>
            </Row>
            <Row>
              <Col
                xs={(3, { offset: 1 })}
                lg={(3, { offset: 1 })}
                md={(3, { offset: 1 })}
              >
                <span style={{ fontWeight: "bold" }}>
                  Application Servers :
                </span>
              </Col>
              <Col xs={8} lg={8} md={8}>
                <li>
                  Amazon EC2, Azure Virtual Machines, Docker, LAMP, apache2, IIS
                </li>
              </Col>
            </Row>
            <Row>
              <Col
                xs={(3, { offset: 1 })}
                lg={(3, { offset: 1 })}
                md={(3, { offset: 1 })}
              >
                <span style={{ fontWeight: "bold" }}>Other Skillss :</span>
              </Col>
              <Col xs={8} lg={8} md={8}>
                <li>
                  git, docker, Linux, Windows, Ubuntu, Kubernetes, Bootstrap
                </li>
              </Col>
            </Row>
          </section>

          <section>
            <Container className="mt-5">
              <div className="row justify-content-center mb-1 mt-3">
                <div className="text-center text-primary">
                  <h2 className="mb-4">Professional Experience</h2>
                </div>
              </div>
              <Card className="mb-4">
                <Card.Header>
                  Aug 2020 / Dec 2021 - 1 yr 4 mos | IdeaCodex | IT project
                  leader
                </Card.Header>
                <Card.Body>
                  <Card.Title>Responsibilities and Achievements</Card.Title>
                  <Card.Text>
                    <p className="container mb-3">
                      <FormattedMessage
                        id="exp-details-1"
                        defaultMessage="exp-details-1"
                      />
                    </p>
                    <Row>
                      <Col
                        xs={(11, { offset: 1 })}
                        lg={(11, { offset: 1 })}
                        md={(11, { offset: 1 })}
                      >
                        <li>
                          5+ years of Hands-on experience with LAMP stack
                          (Linux, Apache, MySQL, PHP).
                        </li>
                        <li>4 years of experience coding PHP.</li>
                        <li>Laravel, Composer</li>
                        <li>
                          Assign tasks and responsibilities to the development
                          team.
                        </li>
                        <li>Prestashop</li>
                        <li>
                          Technical leader in software development projects.
                          Analysis, design, development, implementation, and
                          software maintenance.
                        </li>
                        <li>
                          Communication Skills, Teaching, and support to junior
                          developers.
                        </li>
                        <li>
                          Products:{" "}
                          <a href="www.rrhhpayroll.com">www.rrhhpayroll.com</a>{" "}
                          <br />
                          <a href="https://play.google.com/store/apps/details?id=com.grupotecun.gtm.tecunapp">
                            https://play.google.com/store/apps/details?id=com.grupotecun.gtm.tecunapp
                          </a>{" "}
                        </li>
                        <p></p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mt-3" style={{ marginTop: "35px" }}>
                <Card.Header>
                  Nov 2018 / Aug 2020 - 1 yr 10 mos | 10x informatica | Web
                  developer
                </Card.Header>
                <Card.Body>
                  <Card.Title>Responsibilities and Achievements</Card.Title>
                  <Card.Text>
                    <p className="container mb-3">
                      <FormattedMessage
                        id="exp-details-2"
                        defaultMessage="exp-details-2"
                      />
                    </p>
                    <Row>
                      <Col
                        xs={(11, { offset: 1 })}
                        lg={(11, { offset: 1 })}
                        md={(11, { offset: 1 })}
                      >
                        <li>Magento Ecommerce | Moodle.</li>
                        <li>Understanding to navigate in React Native apps</li>
                        <li>GIT experience | OOP experience.</li>
                        <li>
                          Experience with Restful Services and APIs. A full user
                          authentication flow
                        </li>
                        <li>
                          Analysis, design, and development of web applications,
                          administration of open source software, Magento,
                          Moodle, and WordPress.
                        </li>
                        <li>
                          Tools: Linux OS - Ubuntu, Docker, git, Github,
                          Laravel, Jira
                        </li>
                        <li>
                          Products:{" "}
                          <a href="https://play.google.com/store/apps/details?id=com.tenxinformatica.gt.canjeaton">
                            https://play.google.com/store/apps/details?id=com.tenxinformatica.gt.canjeaton
                          </a>{" "}
                        </li>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </section>

          <section>
            <Container className="mt-5">
              <div className="row justify-content-center mb-1 mt-3">
                <div className="text-center text-primary">
                  <h2 className="mb-1">Education</h2>
                </div>
              </div>
              <Card className="">
                <Card.Header>Current</Card.Header>
                <Card.Body>
                  <Card.Title>
                    Bachelor of Pedagogy and Educational Administration
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col
                        xs={(11, { offset: 1 })}
                        lg={(11, { offset: 1 })}
                        md={(11, { offset: 1 })}
                      >
                        <li>
                          University: Universidad San Carlos De Guatemala.
                        </li>
                        <li>Dates: 2022, Current.</li>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="">
                <Card.Header>Completed</Card.Header>
                <Card.Body>
                  <Card.Title>Software engineer</Card.Title>
                  <Card.Text>
                    <Row>
                      <Col
                        xs={(11, { offset: 1 })}
                        lg={(11, { offset: 1 })}
                        md={(11, { offset: 1 })}
                      >
                        <li>University: Universidad Mariano Gálvez.</li>
                        <li>Dates: 2012 - 2020</li>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </section>

          <section>
            <Container className="mt-3">
              <div className="row justify-content-center mb-1 mt-3">
                <div className="text-center text-primary">
                  <h2 className="mb-1">Languages</h2>
                </div>
              </div>
              <div>
                <Badge bg="primary">Spanish / Native</Badge>
                {"  "}
                <Badge bg="danger">English / B2</Badge>
                {"  "}
              </div>
            </Container>
          </section>
        </div>
      </div>
      {/* https://www.hireitpeople.com/resume-database/64-java-developers-architects-resumes/143437-react-native-developer-resume-lowell-ar
            https://www.cakeresume.com/resources/react-developer-resume?locale=es
            */}
    </SimpleLocalize>
  );
}

export default ResumePage;
