import { useState } from 'react'
import Button from '../Button'
import Modal from '../Modal'
import './Hero.css'

const Hero = () => {

    const [notification, setNotification] = useState(false)
    return (
        <div className='coming-soon-hero'>
            <img src="/public/vectors/logo.svg" alt="logo" />
            {/* <img src="/public/images/Frame 93199.gif" alt="" /> */}
            {/* <img src={gify} alt="" /> */}
            <div className='coming-soon-div'>
                <p className='launch'>Launching Soon...</p>
                <p className='desc'>We are currently working on our website
                    to make things better</p>
                <p className='sorry'>SORRY FOR THE INVENIENCIES THIS MIGHT HAVE CAUSED</p>
                <div className="notify-me" onClick={() => setNotification(!notification)}> <Button label='Notify Me' />
                    {/* <Modal /> */}
                </div>
            </div>
        </div>
    )
}

export default Hero
