import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#272727',
    border: '2px solid #ff5e00',
    boxShadow: 24,
    p: 4,
    color: '#ff5e00',
    fontFamily: "'Orbitron', sans-serif",
    letterSpacing: '10px'
};
const HomeModal = ({ open, setOpen }) => {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <p style={{margin: 15,}}>Contact me on:
                        </p>


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
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default HomeModal;