import { Avatar, IconButton, Typography } from '@mui/material';
import { publicPath } from '../../constants/gloabals';
import { LinkItem } from '../atoms';
export const UserAvatar = () => {
  return (
    <IconButton sx={{ p: 0 }}>
      <Avatar sx={{ display: 'flex', mr: 1, flexGrow: 1 }} alt="A" src={`${publicPath}/images/norellanac.jpg`} />
      <LinkItem to={`/`} color="inherit" relative="path">
        <Typography
          noWrap
          component="a"
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
      </LinkItem>
    </IconButton>
  );
};
