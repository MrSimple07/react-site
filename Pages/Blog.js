import { List } from '@material-ui/core'
import React, { Component } from 'react'
import { Col, Container, Media, Row } from 'react-bootstrap'
import {Card, ListGroup} from 'react-bootstrap'

export default class Blog extends Component {
    render() {
        return (
                <Container>
                    <Row>
                        <Col md="9">
                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200"
                                />
                                <Media.Body>
                                    <h5>Blog Post</h5>
                                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                    </p>
                                 </Media.Body>
                            </Media>

                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200"
                                />
                                <Media.Body>
                                    <h5>Blog Post</h5>
                                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                    </p>
                                 </Media.Body>
                            </Media>

                            <Media className="m-5">
                                <img
                                    width={150}
                                    height={150}
                                    className="mr-3"
                                    src="https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200"
                                />
                                <Media.Body>
                                    <h5>Blog Post</h5>
                                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
                                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                                    </p>
                                 </Media.Body>
                            </Media>
                        </Col>

                        <Col md="3" style={{color: 'black'}}>
                            <h5 className="text-center m-5">Categories</h5>
                            <Card >
                                <ListGroup variant="flush">
                                    <ListGroup.Item>HTML/Css</ListGroup.Item>
                                    <ListGroup.Item>HTML/Css</ListGroup.Item>
                                    <ListGroup.Item>HTML/Css</ListGroup.Item>
                                    <ListGroup.Item>HTML/Css</ListGroup.Item>
                                </ListGroup>
                            </Card>

                            <Card className='mt-3'>
                                <Card.Body>
                                    <Card.Title>Side Widjet</Card.Title>
                                    <Card.Text>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                                        eaque ipsa quae ab illo inventore veritatis et quasi</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        )
    }
}
