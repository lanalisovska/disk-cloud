import { any} from 'prop-types';
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeUploadFile } from '../../reducers/uploadReducer';
import s from './Uploader.module.css';




export default function UploadFile({file}) {
  const dispatch = useDispatch()

  return (
    <div className={s.upload__file}>
      <div className={s.upload__file__header}>
        <div className={s.upload__file__name}>{file.name}</div>
        <button className={s.upload__file__remove} onClick={() => dispatch(removeUploadFile(file.id))}>X</button>
      </div>
      <div className={s.upload__file__progress__bar}>
        <div className={s.upload__file__upload__bar} style={{width: file.progress + "%"}}/>
        <div className={s.upload__file__percen}>{file.progress}%</div>
      </div>
    </div>
  )
}

UploadFile.propTypes = {
  file: any
}
