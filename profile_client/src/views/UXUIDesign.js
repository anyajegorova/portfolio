import SimpleImageSlider from "react-simple-image-slider";

import Messages from '../images/UXUI/Marvel/newmessages.JPG';
import SignUp from '../images/UXUI/Marvel/sign_up.JPG';
import Chat from '../images/UXUI/Marvel/groupmessages.JPG';
import Keyboard from '../images/UXUI/Marvel/keyboard.JPG';
import Group from '../images/UXUI/Marvel/choose.JPG';

import Restaurants from '../images/UXUI/InvisionApp/restaurants.png';
import University from '../images/UXUI/InvisionApp/Choose_university.png';
import Destinations from '../images/UXUI/InvisionApp/destinations.png';
import Events from '../images/UXUI/InvisionApp/events.png';
import Profile from '../images/UXUI/InvisionApp/profile.png';
import Remove from '../images/UXUI/InvisionApp/remove.png';
import SignUpInvision from '../images/UXUI/InvisionApp/SignUp_Invision.png';

import Calendar from '../images/UXUI/Axure/Calendar.png';
import LogIn from '../images/UXUI/Axure/LogIn.png';
import Materials from '../images/UXUI/Axure/Materials.png';
import MessagesAxure from '../images/UXUI/Axure/Messages2.png';
import Notifications from '../images/UXUI/Axure/Notifications.png';
import Quizzes from '../images/UXUI/Axure/QuizzesAnsGames.png';
import Scores from '../images/UXUI/Axure/Scores.png';
import SignUpAxure from '../images/UXUI/Axure/SignUp.png';

import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const UXUIDesign = () => {
    const marvelImages = [SignUp, Messages, Group, Chat, Keyboard];
    const axureImages = [SignUpAxure, LogIn, Calendar, Materials, Notifications, MessagesAxure, Quizzes, Scores];
    const InvisionAppImages = [SignUpInvision, University, Restaurants, Remove, Events, Destinations, Profile];

    return (
        <div className='uxui-container'>
            <p class='naming-paragraph'>UX/UI Design</p>
            <Divider variant="middle" color='white' style={{ margin: 20 }} />
            <cite>"These UI designs were created during User Experience and Prototyping of Digital Services courses. The following page includes the screenshots of pages that were designed by me. If you wish to look at the full designs, click 'OPEN PROTOTYPE' button." </cite>
            <Divider variant="middle" color='white' style={{ margin: 20 }} />
            <div className='prototype-container'>

                <div className='prototypes'>

                    <SimpleImageSlider
                        width={235}
                        height={510}
                        images={marvelImages}
                        showNavs={true}
                    />

                    <div className='prototype-description'>
                        <Button variant="outlined" style={{ borderRadius: 20, borderColor: '#fff', color: '#fff' }}>OPEN PROTOTYPE</Button>


                    </div>
                </div>
                <div className='prototypes'>


                    <SimpleImageSlider
                        width={308}
                        height={548}
                        images={axureImages}
                        showNavs={true}
                    />
                    <div className='prototype-description'>
                        <p>High-fidelity prototype created using <p style={{ color: '#ff5e00' }}>Axure </p></p>
                        <Button variant="outlined" style={{ borderRadius: 20, borderColor: '#fff', color: '#fff' }}>OPEN PROTOTYPE</Button>
                    </div>

                </div>

                <div className='prototypes'>
                    <SimpleImageSlider
                        width={311}
                        height={548}
                        images={InvisionAppImages}
                        showNavs={true}
                    />
                    <div className='prototype-description'>
                        <p>InvisionApp</p>
                        <Button variant="outlined" style={{ borderRadius: 20, borderColor: '#fff', color: '#fff' }}>OPEN PROTOTYPE</Button>
                    </div>


                </div>

            </div>


        </div>
    )
}

export default UXUIDesign;