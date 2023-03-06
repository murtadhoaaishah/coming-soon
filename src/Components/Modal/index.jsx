import React from 'react'
import Button from '../Button'
import Input from '../Input'
import './Modal.css'

const Modal = () => {
    return (
        <div className='modal-rapper'>
            {/* <Input placeholder='Phone Number' type='number' />
            <Input placeholder='Email' type='email' /> */}
            <form action="">
                <input
                    type="number"
                    placeholder='Phone Number'
                    onChange={(e) => setEmail(e.target.value)}

                />
                <input
                    type="email"
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Button label='submit' />

            </form>
            {/* <input type="text" /> */}
        </div>
    )
}

export default Modal
