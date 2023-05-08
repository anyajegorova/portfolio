import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import './styles.css';

const Contact2 = () => {
    const [open, setOpen] = useState(false)
    const form = useRef();

    const handleClick = () => {
        setOpen(true);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
        setOpen(false);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ivkah3m', 'template_fbfq4dm', form.current, 'lMaEZmQbs-phf2SCI')
            .then((result) => {
                console.log(result.text);
                console.log(e);
            }, (error) => {
                console.log(error.text);
            })
            .then(
                (result) => {
                    form.current.reset();
                }
            )
    };

    return (
        <div className='contact-container'>
            <div className='form-container'>
                <p style={{ fontSize: 24, letterSpacing: 2 }}>Message me:</p>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" onClick={handleClick} />
                </form>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onclose={handleClose} severity='success' sx={{ width: '100%' }}>
                        Message sent successfully!
                    </Alert>
                </Snackbar>
            </div>
            <div className='social-media'>

            </div>
        </div>


    );
};

export default Contact2;