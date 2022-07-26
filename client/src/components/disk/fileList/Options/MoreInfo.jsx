import React from 'react'
import PropTypes from "prop-types"
import s from './Option.module.css'
import sizeFormat from '../../../../utils/sizeFormat'
import { FormattedMessage } from 'react-intl'

export default function MoreInfo(props) {
  const {file} = props

  const size = sizeFormat(file.size)
  return (
    <div className={s.modalMoreInfo}>
      <div> <FormattedMessage id='date'/> {file.date.slice(0, 10)}</div> 
      <div className={s.name}> <FormattedMessage id='name'/> {file.name}</div>
      <div> <FormattedMessage id='size'/>{size}</div>
    </div>
  )
}






MoreInfo.propTypes = {
  file: PropTypes.object, 

}