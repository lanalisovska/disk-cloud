import React from 'react'
import { useDispatch } from 'react-redux'
import { FormattedMessage } from "react-intl";
import s from './Profile.module.css'
import { deleteAvatar, uploadAvatar } from '../../actions/user'
import { useSelector } from 'react-redux';
import { API_URL } from '../../config';
import avatar_default from './../../assets/images/avatar_default.svg'



export default function Profile() {
  const dispatch  = useDispatch()
  const user = useSelector(state => state.user.currentUser)
  console.log(user)
  const avatar = user.avatar ? `${API_URL + user.avatar}` : avatar_default
 
  function changeAvatarHandler(e){
    const file = e.target.files[0]
    dispatch(uploadAvatar(file))
  }

  return (
    <div className={s.profile}>
  
      <div className={s.avatar}><img src={avatar} />
        <button onClick={() => dispatch(deleteAvatar())}> <FormattedMessage id="delete_avatar" /></button>
        <label className={s.custom_file_upload}> upload avatar
          <input  accept='image/*' onChange={e => changeAvatarHandler(e)} type='file' placeholder='unpload avtar'/>
        </label>
      </div>
      <div className={s.info_user}>
        <div>Name: </div>
        <div>Your email: {user.email}</div>
        <div>User name: {user.name} {user.lastName}</div>
      </div>
    </div>
  )
}
