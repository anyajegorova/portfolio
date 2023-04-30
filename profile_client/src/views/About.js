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
                    <p style={{ fontSize: 14, fontStyle: 'italic' }}><PlaceIcon style={{ color: '#ff5e00' }} />Vantaa - Finland</p>
                    <p> Greetings! I'm thrilled to have you here!</p>
                    <p>Currently, I am pursuing a degree in <span style={{ color: '#ff5e00' }}>Business Information Technology</span> at Haaga-Helia UAS with the aim of becoming a <span style={{ color: '#ff5e00' }}>Junior Front-end Developer</span> in the near future. Looking ahead, my ultimate goal is to attain the position of <span style={{ color: '#ff5e00' }}>Senior Full-stack Developer</span> through dedicated effort and continuous learning.</p>
                    <Link to='/works'><button>CHECK WORKS</button>
                    </Link>
                </div>
            </div>
            <div className='skills-container'>
                <div style={{ backgroundColor: '#6b6b6b28', borderTopRightRadius: 15, padding: 10, width: 100 }}>
                    Skills
                </div>
                <div className='skills'>
                    <div className='section'>
                        <div className='skill-name'>Tools</div>
                        <div className='skill-set'>
                            <div className='skill-wrapper'><KeyboardArrowRightIcon /><p>HTML&CSS</p> <ProgressBar percent='90%' /></div>
                            <p><KeyboardArrowRightIcon />JavaScript</p><ProgressBar percent='60%' />
                            <p><KeyboardArrowRightIcon />React</p> <ProgressBar percent='60%' />
                            <p><KeyboardArrowRightIcon />NodeJS</p> <ProgressBar percent='40%' />
                            <p><KeyboardArrowRightIcon />PostgreSQL</p> <ProgressBar percent='30%' />
                            <p><KeyboardArrowRightIcon />MongoDB</p><ProgressBar percent='30%' />
                            <p><KeyboardArrowRightIcon />Git</p><ProgressBar percent='30%' />

                        </div>
                    </div>
                    <div className='section'>
                        <div className='skill-name'>Languages</div>
                        <div className='skill-set'>
                            <p><KeyboardArrowRightIcon />HTML&CSS</p>
                            <p><KeyboardArrowRightIcon />Russian</p>
                            <p><KeyboardArrowRightIcon />English</p>
                            <p><KeyboardArrowRightIcon />Finnish</p>
                        </div>
                    </div>
                    <div className='section'>
                        <div className='skill-name'>Interpersonal skills</div>
                        <div className='skill-set'>
                            <p><KeyboardArrowRightIcon />Analytical Thinking</p>
                            <p><KeyboardArrowRightIcon />Creative Thinking</p>
                        </div>
                    </div>
                </div>

            </div >
        </>

    )
}

export default About;