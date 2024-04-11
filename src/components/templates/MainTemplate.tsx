import React from 'react';
import { DrawerAppBar } from '../organisms';
import { Box, Typography } from '@mui/material';
import FloatingActionButtons from '../molecules/FloatingActionButtons';
import { ContactInfo } from '../../types';
import i18n from '../../utils/i18n';
import { version } from '../../constants/gloabals';

export const MainTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const contact_info = i18n.t("resume.contact_info") as  ContactInfo[];
    return (
        <Box sx={{ margin: { xs: 1, md: 4, lg: 6 } }}>
            <DrawerAppBar />
            <div style={{ marginTop: '80px' }}>{children}</div>
            <FloatingActionButtons data={contact_info.slice(2)} />
            <Typography variant="subtitle2" color="GrayText" align="center" m={5}> version: {version}</Typography>
        </Box>
    );
};