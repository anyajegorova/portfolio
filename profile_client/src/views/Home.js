import * as React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import './styles.css';
import HomeModal from '../components/Modal';

const Home = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='main-container'>
            <div className='contact-box'> Contact me
                <ContactSupportIcon fontSize="large" onClick={handleOpen} />
            </div>
            <div className='main--box'>
                <div className='welcome--box'>
                    <p className='text'>Hello! It's me, Anna Jegorova and I'm a future Front-End Developer :)
                    </p>
                </div>
                <div className='button--box'>
                    <Link to='/about'>
                        <button >
                            ENTER PORTFOLIO</button>
                    </Link>


                </div>
            </div>
            <HomeModal open={open} setOpen={setOpen} />



        </div>



    )
}

export default Home;