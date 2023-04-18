/*NOT USED*/

import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import { blue } from '@mui/material/colors';

const Navbar = () => {
    const color = blue[50];
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color={color}
                        aria-label='menu'
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />

                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>

                    </Typography>
                </Toolbar>

            </AppBar>
        </Box>

    )
}

export default Navbar;