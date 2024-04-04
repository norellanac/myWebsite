import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ImageIcons } from './ImageIcons';
import { publicPath } from '../../constants/gloabals';
import { Box } from '@mui/material';
import { Project, TechStack } from '../../types/types';
import { Theme as MuiTheme } from '@mui/material';
import { LinkItem } from '../atoms';

interface RecipeReviewCardProps {
  data: Project;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }: { theme: MuiTheme, expand: boolean }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardItem: React.FC<RecipeReviewCardProps> = ({ data }) => {
  const { title, description, image, url, tech_stack } = data;
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderActionIcons = () => {
    return tech_stack.map((item: TechStack) => {
      return (
        <IconButton sx={{ backgroundColor: '#ffffffad', borderRadius: '8px', margin: 1 }} key={item.name}
        >
          <img src={`${publicPath}/images/icons/${item.icon}`} height={25} width={25} alt={item.name} />
        </IconButton>
      );
    });
  }

  return (
    <Card sx={{ maxWidth: 800, borderRadius: '28px', height: '100%' }}>
      <ImageIcons actionIcons={<Box sx={{ padding: 1 }}>
        {renderActionIcons()}
      </Box>} image={{
        src: `${publicPath}/images/${image}`,
        srcSet: '',
        alt: ''
      }} />
      <CardContent>
        <Typography variant="h5" component="div">
          <LinkItem to={url} target="_blank" rel="noopener noreferrer" > {title} </LinkItem>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
