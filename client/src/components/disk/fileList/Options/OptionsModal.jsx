import { Button } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from "prop-types"
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import s from './Option.module.css'
import DeleteModal from './DeleteModal';

import { FormattedMessage } from 'react-intl';

export default function OptionsModal(props) {
  const { closeHandler, deleteClickHandler, downloadClickHandler} = props
  const [deleteModal, setDeleteModal] = useState(false)

  if(deleteModal) {
    return ( 
      <DeleteModal 
        setDeleteModal={setDeleteModal}
        deleteClickHandler={deleteClickHandler}/>
    )
  }
  return (
    <div  className={s.modal}>
      <div className={s.group_btn}>

        <Button  
          onClick={() => setDeleteModal(true)}>
          <FormattedMessage id='delete'/>
          <DeleteIcon/>
        </Button>
        <Button
          onClick={(e) => downloadClickHandler(e)}>
          <FormattedMessage id='download'/>
          <DownloadIcon />
        </Button> 

      </div>
      <Button onClick={(e) => closeHandler (e)}><ExpandLessIcon/></Button>
    </div>
  )
}




OptionsModal.propTypes = {
  file: PropTypes.any, 
  downloadClickHandler: PropTypes.func, 
  closeHandler: PropTypes.func,
  deleteClickHandler: PropTypes.func
}