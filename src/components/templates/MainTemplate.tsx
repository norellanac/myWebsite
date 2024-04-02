import React from 'react';
import { DrawerAppBar } from '../organisms';
import { Container } from '@mui/material';

export const MainTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Container>
            <DrawerAppBar />
            <div style={{ marginTop: '20px' }}>{children}</div>
        </Container>
    );
};