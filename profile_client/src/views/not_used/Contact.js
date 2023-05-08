import './styles.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
    return (
        <div className='box-container'>
            <div className='box'>
                <p className='paragraph'>Contact me on: </p>
                <ul>
                    <li>
                        <LinkedInIcon /> <a href="https://linkedin.com/in/anna-jegorova-b625a31b8">Anna Jegorova</a>
                    </li>
                    <li>
                        <EmailIcon /> anna.jerm@outlook.com
                    </li>
                    <li>
                        <PhoneIcon /> +358 44 93 53 138 
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Contact;