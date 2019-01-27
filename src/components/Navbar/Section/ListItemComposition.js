import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import PermMedia from '@material-ui/icons/PermMedia';
import AccessibilityNew from '@material-ui/icons/AccessibilityNew';
import Home from '@material-ui/icons/Home';
import Report from '@material-ui/icons/Report';
import InsertEmoticon from '@material-ui/icons/InsertEmoticon';
import { Link } from 'react-router-dom';


const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: '#474C68',
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  primary: {
    color: '#dddddd',
  },
  icon: {
    color: '#dddddd',
  },
});

function ListItemComposition(props) {
  const { classes, active, key } = props;

  return (
    <Paper style={{height: '100vh', backgroundColor: '#3D444E', borderRadius: '0'}}>
      <MenuList>

      <Link to={'/'}>
        <MenuItem className={classes.menuItem} key={key}>
          <ListItemIcon className={classes.icon}>
            <Home />
          </ListItemIcon>
          <ListItemText className={'' + active} classes={{ primary: classes.primary }} inset primary={'Home'} />
        </MenuItem>
      </Link>

      <Link to={'/about'}>
        <MenuItem className={classes.menuItem} key={key}>
          <ListItemIcon className={classes.icon}>
            <AccessibilityNew />
          </ListItemIcon>
          <ListItemText className={'' + active} classes={{ primary: classes.primary }} inset primary={'About'}/>
        </MenuItem>
      </Link>

      <Link to={'/gallery'}>
        <MenuItem className={classes.menuItem} key={key}>
          <ListItemIcon className={classes.icon}>
            <PermMedia />
          </ListItemIcon>
          <ListItemText className={'' + active} classes={{ primary: classes.primary }} inset primary={'Gallery'} />
        </MenuItem>
      </Link>

      <Link to={'/contacts'}>
        <MenuItem className={classes.menuItem} key={key}>
          <ListItemIcon className={classes.icon}>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText className={'' + active} classes={{ primary: classes.primary }} inset primary={'Contacts'} />
        </MenuItem>
      </Link>

      <Link to={'/error-message'}>
        <MenuItem className={classes.menuItem} key={key}>
          <ListItemIcon className={classes.icon}>
            <Report />
          </ListItemIcon>
          <ListItemText className={'' + active} classes={{ primary: classes.primary }} inset primary={'Error Message'} />
        </MenuItem>
      </Link>

      <Link to={'/admin'}>
        <MenuItem className={classes.menuItem} key={key}>
          <ListItemIcon className={classes.icon}>
            <InsertEmoticon />
          </ListItemIcon>
          <ListItemText className={'' + active} classes={{ primary: classes.primary }} inset primary={'Admin'} />
        </MenuItem>
      </Link>

      </MenuList>
    </Paper>
  );
}

ListItemComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemComposition);