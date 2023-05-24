import * as React from "react";
import { Link } from "react-router-dom";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import './styles.css';

const Home = () => {
    return (
        <div className='main-container'>
            <div className='contact-box'><Link to='contact' style={{ textDecoration: 'none', color: 'inherit' }}> Contact me <ContactSupportIcon fontSize="large" />
            </Link>

            </div>
            <div className='main--box'>
                <div className='welcome--box'>
                    <p className='text'>Hello! It's me, <span>Anna Jegorova</span> and I'm a future Front-End Developer :)
                    </p>
                </div>
                <div className='button--box'>
                    <Link to='/about'>
                        <button >
                            ENTER PORTFOLIO</button>
                    </Link>


                </div>
            </div>
        </div>



    )
}

export default Home;