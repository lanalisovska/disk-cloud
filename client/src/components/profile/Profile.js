import React from 'react'
import { useDispatch } from 'react-redux'
import { FormattedMessage } from "react-intl";

import { deleteAvatar, uploadAvatar } from '../../actions/user'

export default function Profile() {
  const dispatch  = useDispatch()
  
  function changeAvatarHandler(e){
    const file = e.target.files[0]
    dispatch(uploadAvatar(file))
  }

  return (
    <div>
      <button onClick={() => dispatch(deleteAvatar())}> <FormattedMessage id="delete_avatar" /></button>
      <input  accept='image/*' onChange={e => changeAvatarHandler(e)} type='file' placeholder='unpload avtar'/>

    </div>
  )
}
