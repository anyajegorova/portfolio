import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from './TabPanel';
import SoftwareDevelopment from './SoftwareDevelopment';
import Design3d from './Design3d';
import UXUIDesign from './UXUIDesign';


const Works = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <div className='works-container'>

            <Box className='works--box' sx={{ width: '100%', bgcolor: '#272727' }}>
                <Tabs value={value} onChange={handleChange} centered
                    TabIndicatorProps={{ sx: { backgroundColor: 'rgb(255,255,255)' } }}
                    sx={{
                        '& button': { borderRadius: 2, color: 'rgb(255,255,255)', fontFamily: ' "Montserrat", sans-serif;' },
                        '.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected': { color: 'rgb(255,255,255)', outlineColor: 'rgb(255,255,255)', textDecorationColor: 'rgb(255,255,255)' },
                        'button:hover': { backgroundColor: '#272727' }
                    }}
                >
                    <Tab label='3D Design' />
                    <Tab label='UX/UI Design' />
                    <Tab label='Software Development' />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
                {<Design3d />}
            </TabPanel>
            <TabPanel value={value} index={1} >
                {<UXUIDesign />}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {<SoftwareDevelopment />}
            </TabPanel>
        </div>

    )
}

export default Works;