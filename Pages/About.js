import React, { Component } from 'react'
import Tab from 'react-bootstrap/Tab'
import {Row, Nav, Col, Container} from 'react-bootstrap'
import './About.css'
import designImg from '../Assets/design.jpeg'
import programmingImg from '../Assets/programming.jpg'
import marketingImg from '../Assets/marketing.jpg'
import smmImg from '../Assets/smm.jpg';

export default class About extends Component {
    render() {
        return (
            <Container className='mt-5'>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-10">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">Programming</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="third">Marketing</Nav.Link>
                                </Nav.Item>
                                
                                <Nav.Item>
                                    <Nav.Link eventKey="fourst">SMM </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col sm={9}>
                            <Tab.Content className="mt-5">
                                <Tab.Pane eventKey="first">
                                    <img src={designImg} alt="Design" className='designImg' />
                                    <p> Our design courses </p>
                                </Tab.Pane>
                            </Tab.Content>

                            <Tab.Content>
                                <Tab.Pane eventKey="second">
                                    <img src={programmingImg} alt="programming" className="programmingImg" />
                                    <p> Programming </p>
                                </Tab.Pane>
                            </Tab.Content>

                            <Tab.Content>
                                <Tab.Pane eventKey="third">
                                  <img src={marketingImg} alt="Marketing" className="marketingImg" />
                                  <p>Marketing</p> 
                                </Tab.Pane>
                            </Tab.Content>

                            <Tab.Content>
                                <Tab.Pane eventKey="fourst">
                                    <img src={smmImg} alt="SMM" className="smmImg" />
                                    <p>SMM</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
