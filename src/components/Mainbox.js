/*NOT USED*/

import * as React from 'react';
import './Mainbox.css'
import Picture from '../images/profile_pic.jpg';
const Mainbox = ({ info_first, info_second }) => {
    return (
        <div className='main-container'>
            <div className='image-container'>
                <p style={{ paddingBottom: 20 }}>Anna Jegorova</p>
                <h4>Vantaa, Finland</h4>
                <img src={Picture} alt='Anna' />
            </div>
            <div className='info-container'>
                <div className='info--box'>
                    {info_first}
                </div>
                <div className='info--box'>
                    {info_second}
                </div>

                <div className='button-container'>
                    <button>MORE INFO</button>
                    <button>CONTACT ME</button>
                </div>

            </div>
        </div>
    )
}

export default Mainbox;