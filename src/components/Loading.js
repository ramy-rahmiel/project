import React from 'react'
import { makeStyles, CardMedia  } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import './App.css';
const useStyles = makeStyles((theme) => ({
    enter: {
        margin: '180px auto 10px auto',
        width: '400px',
    },
    media: { 
        height: 90,
      },
    progress: {
        color: '#f4981c',
        margin: '70px 170px',
        size: '3.6 rem',
        thickness: '120px'
    },
  }));
const Loading = () => {
const classes = useStyles();
  return (
    <div className={classes.enter}>
      <CardMedia image={require ('./images/logo-login.png')} className={classes.media}  component='img' />
      <CircularProgress className={classes.progress} />
    </div>
  );
}

export default Loading
