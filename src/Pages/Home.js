import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import HomeCard from '../Components/HomeCard'

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />

                <HomeCard />
            </>
        )
    }
}
