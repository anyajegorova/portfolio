import ProfilePic from '../images/profilepicpng.png';
import PlaceIcon from '@mui/icons-material/Place';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from "react-router-dom";

import ProgressBar from '../components/ProgressBar';


const About = () => {

    return (
        <>
            <div className='about-main-container'>
                <div className='profile-image-container'>
                    <img src={ProfilePic} />
                </div>
                <div className='general-info-container'>
                    <p style={{ color: '#ff5e00', fontSize: 30, letterSpacing: 2 }}>Anna Jegorova</p>
                    <div className='place-wrapper'><PlaceIcon style={{ color: '#ff5e00' }} /> <p style={{ fontSize: 14}}>Vantaa - Finland</p></div>
                    <p> Greetings! I'm thrilled to have you here!</p>
                    <p>Currently, I am pursuing a degree in <span style={{ color: '#ff5e00' }}>Business Information Technology</span> at Haaga-Helia UAS with the aim of becoming a <span style={{ color: '#ff5e00' }}>Junior Front-end Developer</span> in the near future. Looking ahead, my ultimate goal is to attain the position of <span style={{ color: '#ff5e00' }}>Senior Full-stack Developer</span> through dedicated effort and continuous learning.</p>
                    <Link to='/works'><button>CHECK WORKS</button>
                    </Link>
                </div>
            </div>
            <div className='skills-container'>
                <div style={{ backgroundColor: '#272727', borderTopRightRadius: 15, padding: 10, width: 100 }}>
                    Skills
                </div>
                <div className='skills'>
                    <div className='section'>
                        <div className='skill-name'>Tools</div>
                        <div className='skill-set'>
                            <div className='skill-wrapper'><KeyboardArrowRightIcon /><p>HTML&CSS</p> <ProgressBar percent='50%' /></div>
                            <div className='skill-wrapper'><KeyboardArrowRightIcon /><p>JavaScript</p><ProgressBar percent='40%' /></div>
                            <div className='skill-wrapper'><KeyboardArrowRightIcon /><p>React</p> <ProgressBar percent='40%' /></div>
                            <div className='skill-wrapper'><KeyboardArrowRightIcon /><p>NodeJS</p> <ProgressBar percent='20%' /></div>
                            <div className='skill-wrapper'><KeyboardArrowRightIcon /><p>PostgreSQL</p> <ProgressBar percent='20%' /></div>
                            <div className='skill-wrapper'><KeyboardArrowRightIcon /><p>MongoDB</p><ProgressBar percent='10%' /></div>
                            <div className='skill-wrapper'><KeyboardArrowRightIcon /><p>Git</p><ProgressBar percent='10%' /></div>

                        </div>
                    </div>
                    <div className='section'>
                        <div className='skill-name'>Languages</div>
                        <div className='skill-set'>
                            <div className='skill-wrapper'><KeyboardArrowRightIcon /><p>Russian</p><ProgressBar percent='100%' /></div>
                            <div className='skill-wrapper'><KeyboardArrowRightIcon /><p>English</p><ProgressBar percent='90%' /></div>
                            <div className='skill-wrapper'><KeyboardArrowRightIcon /><p>Finnish</p><ProgressBar percent='40%' /></div>
                        </div>
                    </div>
                    <div className='section'>
                        <div className='skill-name'>Interpersonal skills</div>
                        <div className='skill-set'>
                            <div className='skill-wrapper'><KeyboardArrowRightIcon /><p>Analytical Thinking</p><ProgressBar percent='50%' /></div>
                            <div className='skill-wrapper'><KeyboardArrowRightIcon /><p>Creative Thinking</p><ProgressBar percent='50%' /></div>
                        </div>
                    </div>
                </div>

            </div >
            {/* <div className='card-container'>
                <div className='card-wrapper'>
                    <CardDev image={modelling.image} content={modelling.content} alt={modelling.alt} description={modelling.description} />

                </div>
                <div className='card-wrapper'>
                    <CardDev image={softwareDevelopment.image} content={softwareDevelopment.content} alt={softwareDevelopment.alt} description={softwareDevelopment.description} />

                </div>
                <div className='card-wrapper'>
                    <CardDev image={design.image} content={design.content} alt={design.alt} description={design.description} />
                </div>

            </div> */}
        </>

    )
}

export default About;