import React, { useState } from 'react'
import { languages } from '../../i18n/locales'
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from "prop-types";
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch  } from 'react-redux'
import { logout } from '../../reducers/userReducer'
import { getFiles, searchFile } from '../../actions/file'
import { showLoader } from '../../reducers/appReducer'
import avatar_default from '../../assets/images/avatar_default.svg'
import { API_URL } from '../../config'
import { Avatar, MenuItem, Select} from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { RouteNames } from '../../routes/routes';
import Logo from './Logo';
import InputComponent from '../../utils/input/InputComponent';


const Navbar = (props) =>  {
  const {handlerChangeLocale, currentLocale} = props
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()
  const [searchName, setSearchName] = useState('')
  const currentDir = useSelector(state => state.file.currentDir)
  const currentUser = useSelector(state => state.user.currentUser)
  const [searachTimeout, setSearchTimeout] = useState(false)

  
  const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : avatar_default

  function setSearchHandler(e){
    setSearchName(e.target.value)
    if(searachTimeout != false){
      clearTimeout(searachTimeout)
    }
    dispatch(showLoader())
    if(e.target.value != ''){
      setSearchTimeout(setTimeout((value) => {
        dispatch(searchFile(value))
      }, 500, e.target.value))
    } else {
      dispatch(getFiles(currentDir.id))
    }
  }
  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <header className={s.navbar}>
      <div className={s.container}>
        {isAuth 
          ? <>
            <NavLink to={RouteNames.MAIN}> <Logo/></NavLink>
            <SearchIcon/>
            <InputComponent 
              
              placeholder='...' 
              type='text'
              value={searchName}
              setValue={(event)=> setSearchHandler(event)} />
            <NavLink 
              color='inherit'
              to={RouteNames.LOGIN} 
              onClick={(e) => logoutHandler(e)}>
              <FormattedMessage id='logout'/>
            </NavLink>

            <NavLink to={RouteNames.PROFILE}>
              <Avatar src={avatar} alt='avatar'/>
            </NavLink>
          </>
          :<>
            <NavLink to={RouteNames.LOGIN}> <Logo/> </NavLink>
            <NavLink color='inherit' to={RouteNames.LOGIN}>
              <FormattedMessage id='login'/>
            </NavLink>
            <NavLink color='inherit' to={RouteNames.REGISTRATION}>
              <FormattedMessage id='registration'/>
            </NavLink>
        
          </>
        }
       
        <Select id="demo-select-small" onChange={handlerChangeLocale} value={currentLocale}>
          {languages.map(({ name, code }) =>  <MenuItem key={code} value={code}>
            {name}
          </MenuItem>)}
        </Select>
       
      </div>      
    </header>
  )
}


Navbar.propTypes = {
  handlerChangeLocale: PropTypes.func, 
  currentLocale: PropTypes.string
}

export default Navbar