import React from 'react'
import Button from '../Button'
import "./NavBar.css"

const NavBar = () => {
    const style = {
        backgroundColor: 'green'
    }
    return (
        <div className='nav-bar'>
            <img src="/public/vectors/logo.svg" alt="logo" />
            <div className='activities'>
                <span>TILETS</span>
                <span>E-LIBRARY</span>
                <div>

                    <span>OUR CHAPTERS</span>
                    <img src="/public/vectors/dropdown.svg" alt="drop-down" />
                </div>
                <div>

                    <span>MEMBERSHIP</span>
                    <img src="/public/vectors/dropdown.svg" alt="drop-down" />
                </div>
                <Button label={'About us'} />
                <Button label={'Donate Now'} type='colored' customStyle={style} />
            </div>

        </div>
    )
}

export default NavBar