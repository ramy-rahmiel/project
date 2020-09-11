import React from 'react';
import { CardContent, Typography, Button, Link, CardMedia, Menu , MenuItem, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelopeOpen, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import * as yup  from 'yup';
import './App.css';

function App() {
  const useStyles = makeStyles((theme) => ({
    en: {
      margin: '20px 0 35px 0',
      float: 'right',
      fontWeight: '700',
      fontFamily: "'Fira Sans', sans-serif"
    },
    menu: {
      width: '200px',
      color: '#000000de',
      fontFamily: "'Fira Sans', sans-serif",
      fontSize: '15px',
      '&:hover': {
        background: "#f4981c",
        color: 'white',
        transitionDuration: '.4s',
      }
    },
    media: { 
    height: 70,
    width: '90%',
    margin: 'auto',
    marginBottom: '40px'
  },
    typography: {
      color: '#003366',
      marginBottom: '35px',
      fontWeight: '700',
      textAlign: "center",
      fontFamily: "'Fira Sans', sans-serif"
    },
    input: {
      marginBottom: '6px',
      fontFamily: "'Fira Sans', sans-serif"
    },
    submit: {
      display: 'flex',
      marginTop: '14px',
      marginBottom: '-38px',
      fontWeight: '700',
      alignItems: 'center',
      fontFamily: "'Fira Sans', sans-serif",
      width: '364px'
    },
    button: {
      position: 'relative',
      color: 'white',
      fonstSize: '14px',
      background: "#1ebdb9",
      padding: '10px 45px 10px 50px',
      borderRadius: 0,
      boxShadow: 'none',
      marginLeft: '117px',
      '&:disabled': {
        color: '#2a2a2a',
        background: '#cccccc'
      },
      '&:hover': {
        background: "#1ebdb9",
        boxShadow: 'none'
      }
    },
    forgot: {
      color: '#f4981c',
      fontSize: '13px'
    },
    footer: {
      color: '#1ebdb9',
      background: '#f2f2f2',
      paddingBottom: '5px',
      marginTop: '5px',
      fontFamily: "'Fira Sans', sans-serif"
    },
    h4: {
      marginLeft: '14px',
      paddingTop: '4px'
    },
    ul: {
      margin: '-11px 0 6px 9px'
    },
    li:{
      listStyleType: 'none',
      marginBottom: '6.5px',
      fontSize: '13px'
    },
    icon: {
      color: '#999',
      marginRight: '12px',
      fontSize: '13px'
    }
  }))
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const initialValues = {
    customerID: '',
    userName: '',
    password: ''
  }
  const onSubmit = values => {
    console.log('form data', values)
  }
  const validationSchema = yup.object({
    customerID: yup.string().required('Customer ID is required'),
    userName: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
  })
  return (
    <div className="App">
      <Paper>
        <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.en}>EN</Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose} className={classes.menu}>English</MenuItem>
        <MenuItem onClick={handleClose} className={classes.menu}>France</MenuItem>
      </Menu>
        </div>
        <CardContent>
        <CardMedia image={require ('./images/logo-login.png')} className={classes.media}  component='img' />
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount >
            {formik => {
              return(
            <Form autoComplete="off">
            <Typography className={classes.typography} variant="h6" component="h6">Client Trading Portal</Typography>
              <div>
              <Field name="customerID" fullWidth className={classes.input} onChange={formik.handleChange} value={formik.values.customerID} component={TextField} label="Customer ID *" />
              </div>
              <div>
              <Field name="userName" fullWidth className={classes.input} onChange={formik.handleChange} value={formik.values.userName} component={TextField} label="Username" />
              </div>
              <div>
              <Field name="password" fullWidth className={classes.input} onChange={formik.handleChange} value={formik.values.password} component={TextField} label="Password" />
              </div>
              <Paper className={classes.submit} elevation={0}>
                <Link href="#" className={classes.forgot}>Forgot Password?</Link>
                <Button variant="contained" type="submit" disabled={!(formik.isValid && formik.dirty)} className={classes.button}>LOG IN</Button>
              </Paper>
            </Form>
              )
            }}
          </Formik>
        </CardContent>
        <div className={classes.footer}>
          <h5 className={classes.h4}>Support Desk Contact:</h5>
          <ul className={classes.ul}>
            <li className={classes.li}><FontAwesomeIcon icon={faEnvelopeOpen} className={classes.icon} />support@milltechfx.com</li>
            <li className={classes.li}><FontAwesomeIcon icon={faPhoneAlt} className={classes.icon} />+44 (0)20 7 663 8900</li>
          </ul>
        </div>
      </Paper>
    </div>
  );
}

export default App;
