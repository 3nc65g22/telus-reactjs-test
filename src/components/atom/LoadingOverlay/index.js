import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const LoadingOverlay = ({
  fullPageOverlay
}) => {
  const useStyles = makeStyles((theme) => ({
    overlay: {
      position: fullPageOverlay ? 'fixed' : 'absolute',
      top: 0,
      left: 0,
      zIndex: 110,
      display: 'flex',
      width: '100%',
      height: '100%',
      backgroundColor: fade(theme.palette.background.paper, 0.5)
    },
    progressContainer: {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      opacity: 0.5
    }
  }));

  const classes = useStyles();
  return (
    <div className={classes.overlay}>
      <div className={classes.progressContainer}>
        <CircularProgress color="primary" />
        <Typography variant="subtitle1" className={classes.text}>
          {'Loading...'}
        </Typography>
      </div>
    </div>
  );
};

LoadingOverlay.defaultProps = {
  fullPageOverlay: false
};

export default LoadingOverlay;
