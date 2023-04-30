import Messages from '../images/UXUI/newmessages.JPG';
import SignUp from '../images/UXUI/sign_up.JPG';
import Restaurants from '../images/UXUI/restaurants.png';





const UXUIDesign = () => {

    return (
        <div className='uxui-container'>
            UX/UI Design
            <div className='marvel-prototype'>
                <a href='https://marvelapp.com/prototype/61911e2'> Link to Marvel Prototype</a>
                <p>Methods used for gathering requirements for the prototype: survey, user profile, interview, task matrics, scenario, paper prototype</p>
                <img src={Messages} alt='Messages' />
                <img src={SignUp} alt='SignUp' />
                <img src={Restaurants} alt='Restaurants' />

            </div>
            <div className='axure-prototype'>
                <p>Prototype created using Axure</p>

            </div>


        </div>
    )
}

export default UXUIDesign;