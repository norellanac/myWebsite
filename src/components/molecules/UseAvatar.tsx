import { Avatar, IconButton, Typography } from '@mui/material';
import userPhoto from '../../assets/images/norellanac.jpg';


export const UserAvatar = () => {
    return (
      <IconButton sx={{ p: 0 }}>
        <Avatar sx={{ display: 'flex', mr: 1 }} alt="A" src={userPhoto} />
        <Typography
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: 'flex',
            fontFamily: 'monospace',
            fontWeight: 700,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          It's me
        </Typography>
      </IconButton>
    );
  };
