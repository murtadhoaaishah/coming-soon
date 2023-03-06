import React from 'react'

const Input = ({ placeholder, type }) => {
    return (
        <div className='input-rapper'>
            <input placeholder={placeholder} type={type} />
        </div>
    )
}

export default Input
