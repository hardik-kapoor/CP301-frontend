import React from 'react'
import Card from './Card'
import {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { complaintUrl, bookUrl, courseUrl } from "../imageUrl";

const cards = [
    <Card imgSource={complaintUrl} link='/' imgAlt="clubs portal" header="Clubs Portal" className='card'/>,
    <Card imgSource={bookUrl} link='/bookexchange' imgAlt="complaint portal" header="Book Exchange Portal" className='card'/>,
    <Card imgSource={courseUrl} link='/' imgAlt="complaint portal" header="Course Discussion Portal" className='card'/>
]

export default function CardSlider() {
    const [current, setCurrent] = useState(0)
    const length = 3

    function prevSlide() {
        setCurrent(current === 0 ? length-1 : current-1)
    }
    function nextSlide() {
        setCurrent(current === length-1 ? 0 : current+1)
    }

    return (
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {
                cards.map((card, index) => {
                    return (
                        <div className={index == current ? 'slide active': 'slide'} key={index}>
                            {index === current && card}

                        </div>
                    )
                })
            }
        </section>
    )
}