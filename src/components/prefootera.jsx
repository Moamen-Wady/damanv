import React from 'react'
import './prefootera.css'
import { Link } from 'react-router-dom'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Prefootera() {
    return (
        <AnimationOnScroll animateOnce={ true } animateIn="animate__fadeInDown">
            <div className='aprf'>
                <div className='aleft'>
                    <h1>لديك فكرة مشروع ببالك؟</h1>
                    <p>يمكننا مساعدتك في تحويل أفكارك إلى واقع.
                        فلنتحدث عما يمكننا أن نبنيه وننشئه معًا!</p>
                </div>
                <div className='aright'>
                    <h1>لا تتردد</h1>
                    <Link to='/arContactus#container'><span>تواصل معنا الاّن</span></Link>
                    <p>او</p>
                    <Link to='/arServices#mm'><span>اعرف اكثر</span></Link>
                </div>
            </div>
        </AnimationOnScroll>

    )
}
