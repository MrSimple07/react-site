import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import imgOne from '../Assets/cityAtNight1.jpg'
import imgThree from '../Assets/cityAtNight2.jpg'
import imgFour from '../Assets/cityAtNight3.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={imgOne}
                            alt="ImgCity"
                        />
                        <Carousel.Caption>
                            <h3>Salom</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={imgThree}
                            alt="ImgCity"
                        />
                        <Carousel.Caption>
                            <h3>Salom</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className='d-block w-100'
                            src={imgFour}
                            alt="ImgCity"
                        />
                        <Carousel.Caption>
                            <h3>Salom</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
