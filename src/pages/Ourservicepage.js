import { Box } from '@mui/material';
import React from 'react';
import Header from '../components/heder/Header';
import Ourservice from '../components/ourservice/Ourservice';

const Ourservicepage = () => {
    return (
        <div>
            <Header/>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Ourservice/>
            </Box>
        </div>
    );
};

export default Ourservicepage;