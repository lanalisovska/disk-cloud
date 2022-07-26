import React, { useState } from 'react'
import s from './Autorization.module.css'
import {TextField, Paper, Button, Typography, Link, Alert, AlertTitle} from '@mui/material';
import { useDispatch} from 'react-redux'
import {login} from '../../actions/user'
import { RouteNames } from '../../routes/routes';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const error = useSelector(state => state.user.error)
  return (
    <>
      <Paper className={s.paper}   style={{ padding: 30, background:'#bed3df',width:'500px', margin: '100px 0 10px 0' }}>

        <Typography variant='body'> <FormattedMessage id='login'/> </Typography>
        <TextField 
          style={{ margin: '10px 0', width: '330px'}}
          label="Username" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}>
        </TextField>

        <TextField 
          style={{ margin: '10px 0', width: '330px'}}
          label="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          type={'password'}>
        </TextField>
        <Button 
          onClick={() => dispatch(login(email, password))}
          fullWidth> 
          <FormattedMessage id='sing_in'/>
        </Button>
        <Link href={RouteNames.REGISTRATION}>
          <FormattedMessage id='do_not_have_acnt'/>
        </Link>
      
      </Paper>
      {error && <Alert style={{maxWidth: '500px', height: 'auto', margin: '0 30px'}}severity="error"> 
        <AlertTitle> <FormattedMessage id='error_login' />
        </AlertTitle> 
      </Alert>}
     
    </>

  
  )
}


export default  Login