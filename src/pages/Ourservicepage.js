import { Box } from '@mui/material';
import React from 'react';
import Ourservice from '../components/ourservice/Ourservice';

const Ourservicepage = () => {
    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Ourservice/>
            </Box>
        </div>
    );
};

export default Ourservicepage;