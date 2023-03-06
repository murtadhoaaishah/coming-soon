
import React from 'react'
import "./Button.css"

const Button = ({ label, type, customStyle }) => {

    return (
        <div className={`button-div ${type === 'colored' ? 'colored-button' : 'button-div'}`}>
            <button className={`${customStyle}`}>{label}</button>
        </div>
    )
}

export default Button
