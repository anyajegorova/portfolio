import SimpleImageSlider from "react-simple-image-slider";

import Messages from '../images/UXUI/newmessages.JPG';
import SignUp from '../images/UXUI/sign_up.JPG';
import Restaurants from '../images/UXUI/restaurants.png';





const UXUIDesign = () => {
    const marvelImages = [Messages, SignUp];
    const axureImages = [];
    const nonameImages = [Restaurants]

    return (
        <div className='uxui-container'>
            <p class='naming-paragraph'>UX/UI Design</p>
            <div className='prototype-container'>

                <div className='marvel-prototype'>

                    <SimpleImageSlider
                        width={250}
                        height={400}
                        images={marvelImages}
                        showNavs={true}
                    />

                    <div className='prototype-description'>
                        <a href='https://marvelapp.com/prototype/61911e2'> Link to Marvel Prototype</a>
                        {/* <p>Methods used for gathering requirements for the prototype: survey, user profile, interview, task matrics, scenario, paper prototype</p> */}
                        <button style={{ height: 40, widht: 90, borderRadius: 20, color: '#fff', borderColor: '#fff'}}>Open on Marvel</button>

                    </div>
                </div>
                <div className='axure-prototype'>


                    <SimpleImageSlider
                        width={250}
                        height={400}
                        images={axureImages} />
                    <div className='prototype-description'>
                        <p>Prototype created using Axure</p>
                    </div>

                </div>

                <div className='noname-prototype'>
                    <SimpleImageSlider
                        width={250}
                        height={400}
                        images={nonameImages} />
                    <div className='prototype-description'>
                        <p>Prototype created using [no name]</p>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default UXUIDesign;