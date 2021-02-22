import React, { Component } from 'react'
import { Container, Card, CardDeck, Button } from 'react-bootstrap'

export default class HomeCard extends Component {
    render() {
        return (
            <Container className="mt-4">
                <h2 className='text-center'>Our team</h2>
            
                <CardDeck style={{color: 'black', borderRadius: '12px', outline: 'hidden'}}>
                    <Card >
                        <Card.Img 
                            src="https://atleventsgroup.com/atlwp/wp-content/uploads/2020/04/bigstock-Working-Together-Group-Of-You-237854845.jpg"
                            alt="Developers" 
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt 
                                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
                                magni dolores   
                            </Card.Text>
                            <Button variant="primary">About</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img
                            src="https://content-16.foto.my.mail.ru/community/nplus1/_groupsphoto/h-11194.jpg"
                            alt="Developers" 
                        />
                        <Card.Body >
                            <Card.Title>Teachers</Card.Title>
                            <Card.Text> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores  </Card.Text>
                            <Button variant="primary">About</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img
                            src="https://www.hse.ru/data/2017/03/29/1169811888/6iStock-509228202%20(2)-%D0%B0%D1%81%D0%BF%D0%B8%D1%80%D0%B0%D0%BD%D1%82%D1%8B2%20%D0%B2%20%D0%B0%D1%83%D0%B4%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B8.jpg.(1000x1000x1).jpg"
                            alt="Developers" 
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text> "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores </Card.Text>
                            <Button variant="primary">About</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        )
    }
}

