import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles(theme => ({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  }));
  
  const sections = [
    { title: 'Technology', url: '#' },
    { title: 'Design', url: '#' },
    { title: 'Culture', url: '#' },
    { title: 'Business', url: '#' },
    { title: 'Politics', url: '#' },
    { title: 'Opinion', url: '#' },
    { title: 'Science', url: '#' },
    { title: 'Health', url: '#' },
    { title: 'Style', url: '#' },
    { title: 'Travel', url: '#' },
  ];
  
  export default function Header(props) {
      console.log(props);
    const classes = useStyles();
    const { sections, title } = props;
        
    return (
        <React.Fragment>
        <Toolbar className={classes.toolbar}>
            <Button size="small">Subscribe</Button>
            <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
            >
            Simply Learn Anything
            </Typography>
            <IconButton>
            <SearchIcon />
            </IconButton>
            {/* <Button variant="outlined" size="small">
            Sign up
            </Button> */}
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
            <Link to='/'>Hello World</Link>
        </Toolbar>
        </React.Fragment>
    );
    // }
    }
  

// Header.propTypes = {
//   sections: PropTypes.array,
//   title: PropTypes.string,
// };