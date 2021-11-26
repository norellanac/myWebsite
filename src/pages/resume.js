import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby'
import SimpleLocalize from "../SimpleLocalize";
import { FormattedMessage } from "react-intl";
import LinkTranslated from "../LinkTranslated";
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container, Col, Nav, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';

function ResumePage(props) {
    // const language = props.pageContext.language;
    return (

        <SimpleLocalize {...props}>
            <div>
                <div>

                    <section className="ftco-section services-section bg-light ftco-no-pb">
                        <Container >
                            <Row>
                                <Col xs={8} lg={8} md={8} className="align-self-stretch ftco-animate">
                                    <div className="media block-6 services d-flex align-items-start">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <StaticImage
                                                src="../img/norellanac1.png" alt="norellanac"
                                                placeholder="blurred"
                                                layout="fixed"
                                                width={100}
                                                height={150}
                                            />
                                        </div>
                                        <div className="media-body pl-4">
                                            <h1 className="heading mb-2 text-primary" style={{ fontsize: "35px;" }}>Nery Alexis Orellana Cuy</h1>
                                            <p>
                                                <span className="ml-4"> <FontAwesomeIcon icon={["fa", "fa-mobile-alt"]} />
                                                    <FormattedMessage
                                                        id="phone"
                                                        defaultMessage="phone"
                                                    />
                                                    : <a
                                                        href="tel:50233120413">+502
                                                        33120413</a> </span> <br />
                                                <span className="ml-4"> <FontAwesomeIcon icon={["fa", "envelope-open-text"]} />
                                                    <FormattedMessage
                                                        id="email"
                                                        defaultMessage="email"
                                                    />
                                                    : <a
                                                        href="mailto:alexis_oc@yahoo.es">alexis_oc@yahoo.es</a> </span> <br />
                                                <span className="ml-4"> <FontAwesomeIcon icon={["fal", "envelope-open-text"]} />
                                                    <FormattedMessage
                                                        id="address"
                                                        defaultMessage="address"
                                                    />
                                                    : <a
                                                        href="https://goo.gl/maps/tzokv8QcD8RgRRms9">San José Pinula, Guatemala</a>
                                                </span> <br />
                                                <span className="ml-4"> <i className="fab fa-chrome"> </i>
                                                    <FormattedMessage
                                                        id="website"
                                                        defaultMessage="website"
                                                    />
                                                    : <a
                                                        href="https://norellanac.github.io/norellanacBlog/">norellanac</a>
                                                </span> <br />
                                                <span className=" h1 mt-5 text-center ml-5" style={{ fontsize: "60px;" }}>
                                                    <a href="https://github.com/norellanac"> <i className="fab fa-github"></i></a>
                                                    <a href="https://www.linkedin.com/in/nery-alexis-orellana-cuy-3612888b/"> <i
                                                        className="fab fa-linkedin"></i></a>
                                                    <a href="https://m.facebook.com/alexis.orellana2"> <i
                                                        className="fab fa-facebook"></i></a>
                                                    <a href="https://www.instagram.com/norellanac/"> <i
                                                        className="fab fa-instagram"></i></a>
                                                    <a href="https://api.whatsapp.com/send?phone=50233120413"> <i
                                                        className="fab fa-whatsapp"></i></a>
                                                    <br /></span>
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col xs={4} lg={4} md={4} className="ftco-animate justify-content-center">
                                    <div className="media block-6 services d-flex text-center">
                                        <div className="media-body">
                                        <StaticImage
                                                    src="../oldCv/img/logos/umg.png" alt="oracle"
                                                    placeholder="blurred"
                                                    layout="fixed"
                                                    width={100}
                                                    height={100}
                                                />
                                            <h3 className="" style={{ fontSize: "25px;" }}>
                                                <FormattedMessage
                                                    id="education"
                                                    defaultMessage="education"
                                                />
                                            </h3>
                                            <p className="p-1">Cierre de pénsum <br />
                                                <strong>Ingeniería en Sistemas de Información</strong>
                                                <br /> Guatemala /junio 2020</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className="ftco-section services-section bg-primary ftco-no-pb pb-5">
                        <div className="container">
                            <div className="row justify-content-center mb-5 pb-3">
                                <div className="col-md-7 text-center heading-section ftco-animate">
                                    <h2 className="mb-4 text-light">
                                        <FormattedMessage
                                            id="skills"
                                            defaultMessage="skills"
                                        />
                                    </h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="bg-light  col-lg-4 col-md-4 d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services d-flex align-items-start">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon">
                                                <FontAwesomeIcon icon={["fa", "database"]} />
                                            </span>
                                        </div>
                                        <div className="media-body pl-4">
                                            <h3 className="mb-3" style={{ fontSize: "25px;" }}>Bases De Datos</h3>
                                            <div className="progress mt-5">
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
                                                    <strong> Consultas y Reportes
                                                    </strong>
                                                </div>
                                            </div>
                                            <div className="progress mt-3">
                                                <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                                    role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: "50%" }}>
                                                    <strong>Triggers y cursores</strong>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <StaticImage
                                                    className="ml-2 d-inline-block"
                                                    src="../oldCv/img/logos/mySql.png" alt="mySql"
                                                    placeholder="blurred"
                                                    layout="fixed"
                                                    width={45}
                                                    height={45}
                                                />
                                                <StaticImage
                                                    className="ml-2 d-inline-block"
                                                    src="../oldCv/img/logos/oracle.png" alt="oracle"
                                                    placeholder="blurred"
                                                    layout="fixed"
                                                    width={45}
                                                    height={45}
                                                />
                                                <StaticImage
                                                    className="ml-2 d-inline-block"
                                                    src="../oldCv/img/logos/postgres.png" alt="postgres"
                                                    placeholder="blurred"
                                                    layout="fixed"
                                                    width={45}
                                                    height={45}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services d-flex align-items-start">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon">
                                                <i className="fab fa-react"></i>
                                            </span>
                                        </div>
                                        <div className="media-body pl-4">
                                            <h3 className="mb-3" style={{ fontSize: "25px;" }}>Front End</h3>
                                            <div className="progress mt-5">
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
                                                    <strong> React Native</strong>
                                                </div>
                                            </div>
                                            <div className="progress mt-3">
                                                <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                                    role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: "50%" }}>
                                                    <strong>UI/UX</strong>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <img src="oldCv/img/logos/javascript.png" width="45px" className="ml-2 d-inline-block" />
                                                <img src="oldCv/img/logos/bootstrap.png" width="45px" className="ml-2 d-inline-block" />
                                                <img src="oldCv/img/logos/materialize.png" width="45px" className="ml-2 d-inline-block" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services d-flex align-items-start">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon">
                                                <i className="fab fa-android"></i>
                                            </span>
                                        </div>
                                        <div className="media-body pl-4">
                                            <h3 className="mb-3" style={{ fontSize: "25px;" }}>Aplicaciones moviles</h3>
                                            <div className="progress mt-5">
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
                                            <div className="mt-5">
                                                <img src="oldCv/img/logos/android.png" width="40px" className="ml-2 d-inline-block" />
                                                <img src="oldCv/img/logos/reactjs.png" width="40px" className="ml-2 d-inline-block" />
                                                <img src="oldCv/img/logos/apple.png" width="45px" className="ml-2 d-inline-block" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services d-flex align-items-start">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-database">
                                            </span>
                                        </div>
                                        <div className="media-body pl-4">
                                            <h3 className="mb-3" style={{ fontSize: "25px" }}>Servidores</h3>
                                            <div className="progress mt-5">
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
                                            <div className="mt-5">
                                                <img src=".../img/aws.png" width="45px" className="ml-2 d-inline-block" />
                                                <img src="oldCv/img/logos/kubernetes.png" width="45px" className="ml-2 d-inline-block" />
                                                <img src=".../img/docker1.png" width="45px" className="ml-2 d-inline-block" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services d-flex align-items-start">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon">
                                                <FontAwesomeIcon icon={["fal", "laptop-code"]} />
                                            </span>
                                        </div>
                                        <div className="media-body pl-4">
                                            <h3 className="mb-3" style={{ fontSize: "25px;" }}>Back End</h3>
                                            <div className="progress mt-5">
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
                                                    <strong>Arquitectura De Software MVC</strong>
                                                </div>
                                            </div>
                                            <div className="progress mt-3">
                                                <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                                    role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: "50%" }}>
                                                    <strong>Microservicios</strong>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <img src="oldCv/img/logos/java.png" width="40px" className="ml-2 d-inline-block" />
                                                <img src=".../img/laravel.png" width="40px" className="ml-2 d-inline-block" />
                                                <img src="oldCv/img/logos/spring.png" width="40px" className="ml-2 d-inline-block" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 d-flex align-self-stretch ftco-animate">
                                    <div className="media block-6 services d-flex align-items-start">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon">
                                                <i className="fab fa-git-alt"></i>
                                            </span>
                                        </div>
                                        <div className="media-body pl-4">
                                            <h3 className="mb-3" style={{ fontSize: "25px;" }}>DevOps</h3>
                                            <div className="progress mt-5">
                                                <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                                                    role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: "95%" }}>
                                                    <strong>Github</strong>
                                                </div>
                                            </div>
                                            <div className="progress mt-3">
                                                <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                                                    role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: "60%" }}>
                                                    <strong>Scrum</strong>
                                                </div>
                                            </div>
                                            <div className="progress mt-3">
                                                <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                                                    role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: "50%" }}>
                                                    <strong>CI/CD</strong>
                                                </div>
                                            </div>
                                            <div className="mt-5">
                                                <img src="oldCv/img/logos/github.png" width="45px" className="ml-2 d-inline-block" />
                                                <img src="oldCv/img/logos/docker.png" width="45px" className="ml-2 d-inline-block" />
                                                <img src="oldCv/img/logos/linux.png" width="45px" className="ml-2 d-inline-block" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="ftco-section ftco-counter bg-light img pt-5" id="section-counter">
                        <div className="container">
                            <div className="row justify-content-center mb-1">
                                <div className="col-md-10 text-center heading-section ftco-animate">
                                    <h2 className="mb-4">Aplicaciones móviles y proyectos</h2>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="36">5</strong>
                                            <span>Repositorios en Github</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="5">1</strong>
                                            <span>Años de experiencia</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="10">1</strong>
                                            <span>Proyectos Administrados</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="2">0</strong>
                                            <span>Aplicaciones moviles</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                    <div className="row">
                                        <div className="item col-md-3">
                                            <div className="testimony-wrap p-4 text-center">
                                                <div className="user-img mb-4"
                                                    style={{ backgroundImage: "url(../img/ideaCodex.jpeg);", width: "50%", backgroundColor: "black" }}>
                                                </div>
                                                <div className="text-light">
                                                    <p className="mb-4">Lider tecnico en proyecto de desarollo de software.
                                                        Analisís, diseño, desarllo, implementacion y mantenimiento de software</p>
                                                    <p className="text-light">Idea Codex</p>
                                                    <span className="text-light h4">Lider de proyectos de&#8211; IT.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item col-md-3">
                                            <div className="testimony-wrap p-4 text-center">
                                                <div className="user-img mb-4" style={{ backgroundImage: "url(.../img/10x.png)" }}>
                                                </div>
                                                <div className="text-light">
                                                    <p className="mb-4">Análisis, diseño y desarrollo de aplicaciones web, administración de
                                                        software open source, Magento, Moodle y WordPress</p>
                                                    <p className="text-light">10x Informatica</p>
                                                    <span className="text-light h4">Desarollador Web</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item col-md-3">
                                            <div className="testimony-wrap p-4 text-center">
                                                <div className="user-img mb-4" style={{ backgroundImage: "url(../img/bi.jpg)" }}>
                                                </div>
                                                <div className="text-light">
                                                    <p className="mb-4">Descripción del Puesto: Operador De Sistemas IBM (AS400, 390).<br />
                                                        <br /><br /></p>
                                                    <p className="text-light">Banco Industrial S.A.</p>
                                                    <span className="text-light h4">Operador De Computo.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item col-md-3">
                                            <div className="testimony-wrap p-4 text-center">
                                                <div className="user-img mb-4"
                                                    style={{ backgroundImage: "url(https://encrypted-tbn0.gstatic.com/./img?q=tbn%3AANd9GcRUTwpWFWHceUTHAx7toKUbZs0NBXn_1ZJqxg&usqp=CAU);", width: "150" }}>
                                                </div>
                                                <div className="text-light">
                                                    <p className="mb-4">Soporte en configuración de dispositivos
                                                        móviles; Apple IOS, Google Andoid y Windows Phone.</p>
                                                    <p className="text-light">Tigo Guatemala</p>
                                                    <span className="text-light h4">Customer Service Agent &#8211; Help Desk.</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="bg-light pb-0">
                        <div className="container pb-0">
                            <div className="row justify-content-center mb-3 pb-3 pt-5">
                                <div className="col-md-7 text-center heading-section ftco-animate">
                                    <h2>Portafolio </h2>
                                    <p className="d-none">Far far away, behind the word mountains, far from the countries Vokalia and
                                        Consonantia, there live the blind texts.Separated they live in</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="blog-entry">
                                        <a href="https://app.canjeaton.com/" className="block-20"
                                            style={{ backgroundImage: "url('../img/canjeaton.png');" }}>
                                        </a>
                                        <div className="text text-center py-3">
                                            <div className="meta mb-2">
                                                <div><a href="https://app.canjeaton.com/">Jul 5 2019</a></div>
                                                <div><a href="https://app.canjeaton.com/">Aplicación Móvil</a></div>
                                                <div className="d-none"><a href="https://app.canjeaton.com/" className="meta-chat"><span
                                                    className="icon-chat"></span> 3</a></div>
                                            </div>
                                            <div className="desc">
                                                <h3 className="heading"><a href="https://app.canjeaton.com/">Colaboracion en desarollo de aplicacion web y
                                                    movil con</a> <a className="text-primary" href="http://tenxprotocol.com/">10x Informatica</a> </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="blog-entry" data-aos-delay="100">
                                        <a href="http://www.rrhhpayroll.com/" className="block-20" style={{ backgroundImage: "url('http://www.rrhhpayroll.com/storage/banners/1.jpg');" }}>
                                        </a>
                                        <div className="text text-center py-3">
                                            <div className="meta mb-2">
                                                <div><a href="http://www.rrhhpayroll.com/">Aug, 2020</a></div>
                                                <div><a href="http://www.rrhhpayroll.com/">Laravel</a></div>
                                                <div className="d-none"><a href="http://www.rrhhpayroll.com/" className="meta-chat"><span className="icon-chat"></span>
                                                    3</a></div>
                                            </div>
                                            <div className="desc">
                                                <h3 className="heading"><a href="http://www.rrhhpayroll.com/">Aplicación web utilizando Laravel Framework</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-none col-md-4">
                                    <div className="blog-entry" data-aos-delay="100">
                                        <a href="http://pakal.website/" className="block-20" style={{ backgroundImage: "url('../img/pakal.png');" }}>
                                        </a>
                                        <div className="text text-center py-3">
                                            <div className="meta mb-2">
                                                <div><a href="http://pakal.website/">Aug, 2020</a></div>
                                                <div><a href="http://pakal.website/">Laravel</a></div>
                                                <div className="d-none"><a href="http://pakal.website/" className="meta-chat"><span className="icon-chat"></span>
                                                    3</a></div>
                                            </div>
                                            <div className="desc">
                                                <h3 className="heading"><a href="http://pakal.website/">Aplicación web utilizando Laravel Framework</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="blog-entry" data-aos-delay="200">
                                        <a href="http://tecunapp.com/" className="block-20"
                                            style={{ backgroundImage: "url('../img/grupotecun.png');" }}>
                                        </a>
                                        <div className="text text-center py-3">
                                            <div className="meta mb-2">
                                                <div><a href="http://tecunapp.com/">Enero, 2018</a></div>
                                                <div><a href="http://tecunapp.com/">Laravel / React Native</a></div>
                                                <div className="d-none"><a href="http://tecunapp.com/" className="meta-chat"><span
                                                    className="icon-chat"></span> 3</a></div>
                                            </div>
                                            <div className="desc">
                                                <h3 className="heading"><a href="http://tecunapp.com/">Aplicación de comunicación interna version Web
                                                    y móvil, utilizando Laravel Framework y React Native</a></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <h1>
                    <FormattedMessage
                        id="about-us"
                        defaultMessage="About us"
                    />
                </h1>
                <h1>
                    <FormattedMessage
                        id="resume"
                        defaultMessage="Test"
                    />
                </h1>
                <LinkTranslated
                    className="btn btn-link"
                    href="/"
                >
                    <FormattedMessage
                        id="homepage"
                        defaultMessage="Homepage"
                    />
                </LinkTranslated>


                <div>
                    <FontAwesomeIcon icon="check-square" />
                    Your <FontAwesomeIcon icon="coffee" /> is hot and ready!
                </div>
                <Link to="/" >
                    About
                </Link>
            </div>

        </SimpleLocalize>
    );
}

export default ResumePage;
