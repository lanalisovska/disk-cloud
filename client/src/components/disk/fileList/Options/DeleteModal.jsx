import { Button } from '@mui/material'
import React from 'react'
import PropTypes from "prop-types"
import s from './Option.module.css'
import { FormattedMessage } from 'react-intl'

export default function DeleteModal(props) {
  const {deleteClickHandler, setDeleteModal} = props
  
  const deleteFunc = (e) => {
    deleteClickHandler(e)
    setDeleteModal(false)
  }


  return (
    <div className={s.modalDelete}>
      <FormattedMessage id='delete_file_ask'/>
      <Button onClick={(e) => deleteFunc(e)}><FormattedMessage id='yes'/> </Button>
      <Button onClick={() => setDeleteModal(false) }><FormattedMessage id='no'/> </Button>
    </div>
  )
}


DeleteModal.propTypes = {
  setDeleteModal: PropTypes.func,
  deleteClickHandler: PropTypes.func
}