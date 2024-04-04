import React from 'react';
import { DrawerAppBar } from '../organisms';
import { Box } from '@mui/material';

export const MainTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{margin: {xs: 1, md: 4, lg:6}}}>
            <DrawerAppBar />
            <div style={{ marginTop: '80px' }}>{children}</div>
        </Box>
    );
};