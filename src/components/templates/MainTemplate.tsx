import React from 'react';
import { DrawerAppBar } from '../organisms';
import { Box } from '@mui/material';
import FloatingActionButtons from '../molecules/FloatingActionButtons';
import { translationsData } from '../../constants/gloabals';

export const MainTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <Box sx={{ margin: { xs: 1, md: 4, lg: 6 } }}>
            <DrawerAppBar />
            <div style={{ marginTop: '80px' }}>{children}</div>
            <FloatingActionButtons data={translationsData.en.resume.contact_url.slice(2)} />
        </Box>
    );
};