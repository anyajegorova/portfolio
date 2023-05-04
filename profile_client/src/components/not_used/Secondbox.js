/*NOT USED*/

import * as React from 'react';
import './Secondbox.css'
import Picture from '../images/profile_pic.jpg';
const Secondbox = ({ info_first, info_second }) => {
    return (
        <div className='main-container2'>
            <div className='info-container2'>
                <div className='info--box2'>
                    {info_first}
                </div>
                <div className='info--box2'>
                    {info_second}
                </div>

                <div className='button-container2'>
                    <button>MORE INFO</button>
                    <button>CONTACT ME</button>
                </div>

            </div>
            <div className='image-container2'>
                <img src={Picture} alt='Anna' />
            </div>

        </div>
    )
}

export default Secondbox;