import { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import './Modal.css'

const Modal = () => {
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [data, setData] = useState([{ phone: '', email: '' }])


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!email.trim()) return
        if (!phone.trim()) trim
        setData(data.concat(newData))
        setPhone('')
        setEmail('')
    }
    return (
        <div className='modal-rapper'>

            <div className='close-rapper'>
                <img src="/public/vectors/close.svg" alt="" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className='input-rapper'>

                    <input
                        value={phone}
                        type="number"
                        placeholder='Phone Number'
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div className='input-rapper'>


                    <input
                        value={email}
                        type="email"
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='button-rapper'>

                    <Button label='submit' />
                </div>

            </form>
            {/* <input type="text" /> */}
        </div>
    )
}

export default Modal
