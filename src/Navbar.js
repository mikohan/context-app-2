import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles';
import { ThemeContext } from './contexts/ThemeContext';

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode } = this.context;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          className={classes.appbar}
          position="static"
          color={isDarkMode ? 'default' : 'primary'}
        >
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span role="img" aria-labelledby="title-id">
                🇫🇷
              </span>
            </IconButton>
            <Typography
              id="title-id"
              className={classes.title}
              variant="h6"
              color="inherit"
            >
              App Title
            </Typography>
            <Switch />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                placeholder="Search..."
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
