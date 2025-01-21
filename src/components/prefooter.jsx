import React from 'react'
import './prefooter.css'
import { Link } from 'react-router-dom'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Prefooter() {
    return (
        <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInDown">
            <div className='prf'>
                <div className='left'>
                    <h1>Have A Project In Mind?</h1>
                    <p>We can help you bring your ideas to life.
                        Let’s talk about what we can build and raise together!</p>
                </div>
                <div className='right'>
                    <h1>Don’t Hesitate</h1>
                    <Link to='/Contactus#container'><span>Contact Us Now !</span></Link>
                    <p>OR</p>
                    <Link to='/Services#mm'><span>Learn More.</span></Link>
                </div>
            </div>
        </AnimationOnScroll>

    )
}
