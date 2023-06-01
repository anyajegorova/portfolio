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
            <cite>"These UI designs were created during User Experience and Prototyping of Digital Services courses. The following page includes the screenshots of parts that were designed by me. If you wish to look at the full designs, click 'OPEN PROTOTYPE' button." </cite>
            <Divider variant="middle" color='white' style={{ margin: 20 }} />
            <div className='prototype-container'>

                <div className='prototypes'>
                    <div className='slider'><SimpleImageSlider
                        width={235}
                        height={510}
                        images={marvelImages}
                        showNavs={true}
                    /></div>


                    <div className='prototype-description'>
                        <table>
                            <tr>
                                <td>Tool:</td>
                                <td style={{ color: '#ff5e00', fontWeight: 'bold' }}>Marvel</td>
                            </tr>
                            <tr>
                                <td>Done by:</td>
                                <td>team of three students</td>
                            </tr>
                            <tr>
                                <td>About:</td>
                                <td>Design a reliable app for Digital Services students of Haaga-Helia</td>
                            </tr>
                            <tr>
                                <td>Goals:</td>
                                <td> easy access to course materials, easy-to-use and intuitive interface</td>
                            </tr>
                            <tr>
                                <td>Methods:</td>
                                <td>survey, user profile, interview, Task Matrics, scenario, paper prototype</td>
                            </tr>
                        </table>
                        <Button variant="outlined" style={{ borderRadius: 20, borderColor: '#fff', color: '#fff', maxWidth: '50%', alignSelf: 'center' }} onClick={() => window.open('https://marvelapp.com/prototype/61911e2')} sx={{ ':hover': { bgcolor: 'rgba(253, 251, 251, 0.255)' } }}>OPEN PROTOTYPE</Button>
                    </div>
                </div>
                <div className='prototypes'>
                    <div className='slider'>
                        <SimpleImageSlider
                            width={308}
                            height={548}
                            images={axureImages}
                            showNavs={true}
                        /></div>
                    <div className='prototype-description'>
                        <table>
                            <tr>
                                <td>Tool:</td>
                                <td style={{ color: '#ff5e00', fontWeight: 'bold' }}>Axure</td>
                            </tr>
                            <tr>
                                <td>Done by:</td>
                                <td>team of three students</td>
                            </tr>
                            <tr>
                                <td>About:</td>
                                <td>Design a reliable app for Digital Services students of Haaga-Helia</td>
                            </tr>
                            <tr>
                                <td>Goals:</td>
                                <td> easy access to course materials, easy-to-use and intuitive interface</td>
                            </tr>
                            <tr>
                                <td>Methods:</td>
                                <td>survey, user profile, interview, Task Matrics, scenario, paper prototype</td>
                            </tr>
                        </table>

                        <Button variant="outlined" style={{ borderRadius: 20, borderColor: '#fff', color: '#fff', maxWidth: '50%', alignSelf: 'center' }} onClick={() => window.open('')} sx={{ ':hover': { bgcolor: 'rgba(253, 251, 251, 0.255)' } }}>OPEN PROTOTYPE</Button>
                    </div>

                </div>

                <div className='prototypes'>
                    <div className='slider'><SimpleImageSlider
                        width={311}
                        height={548}
                        images={InvisionAppImages}
                        showNavs={true}
                    /></div>

                    <div className='prototype-description'>
                        <table>
                            <tr>
                                <td>Tool:</td>
                                <td style={{ color: '#ff5e00', fontWeight: 'bold' }}>InvisionApp</td>
                            </tr>
                            <tr>
                                <td>Done by:</td>
                                <td>team of three students</td>
                            </tr>
                            <tr>
                                <td>About:</td>
                                <td>Design a reliable app for Digital Services students of Haaga-Helia</td>
                            </tr>
                            <tr>
                                <td>Goals:</td>
                                <td> easy access to course materials, easy-to-use and intuitive interface</td>
                            </tr>
                            <tr>
                                <td>Methods:</td>
                                <td>survey, user profile, interview, Task Matrics, scenario, paper prototype</td>
                            </tr>
                        </table>
                        <Button variant="outlined" style={{ borderRadius: 20, borderColor: '#fff', color: '#fff', maxWidth: '50%', alignSelf: 'center' }} onClick={() => window.open('https://prototyping-group4.invisionapp.com/console/share/ZQ2HFY42VJ')} sx={{ ':hover': { bgcolor: 'rgba(253, 251, 251, 0.255)' } }}>OPEN PROTOTYPE</Button>

                    </div>


                </div>

            </div>


        </div>
    )
}

export default UXUIDesign;


