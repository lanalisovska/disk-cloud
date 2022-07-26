import React, { useState } from 'react'
import s from './Autorization.module.css'
import {TextField, Paper, Button, Typography, Link, Alert} from '@mui/material';
import { registration } from '../../actions/user'
import { RouteNames } from '../../routes/routes';
import { FormattedMessage } from 'react-intl';
import { useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';


const  Registartion = () =>  {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const dispatch = useDispatch()

  const error = useSelector(state => state.user.error)

  return (
    <>
      <Paper className={s.paper}   style={{ padding: 30, background:'#bed3df',width: '500 px',  margin: '100px 0 10px 0' }}>
        <Typography variant='body'> <FormattedMessage id='registration'/> </Typography>
        <TextField 
          style={{ margin: '10px 0', width: '330px'}}
          label="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}>
        </TextField>

        <TextField 
          style={{ margin: '10px 0', width: '330px'}}
          label="Password" 
          value={password} 
          type='password'
          onChange={(e) => setPassword(e.target.value)} >
        </TextField>

        <TextField 
          style={{ margin: '10px 0', width: '330px'}}
          label="User name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} >
        </TextField>

        <TextField 
          style={{ margin: '10px 0', width: '330px'}}
          label="Last name" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)}>
        </TextField>
        <Button 
          onClick={() => dispatch(registration(email, password, name, lastName))}
          fullWidth> 
          <FormattedMessage id='registration'/>
        </Button>
        <Link href={RouteNames.LOGIN}>
          <FormattedMessage id='have_account'/>
        </Link>
      </Paper>
    
      {error && <Alert severity="info"> {error} </Alert>}
     
    </>
  )
}


export default Registartion