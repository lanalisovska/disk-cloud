import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { hideUploader } from '../../reducers/uploadReducer';
import s from './Uploader.module.css'
import UploadFile from './UploadFile';


const Uploader = () => {
  const isVisible = useSelector(state => state.uploader.isVisible)
  const dispatch = useDispatch()
  const files = useSelector(state => state.uploader.files)
 
  return (isVisible && 
    <div className={s.uploader}>
      <div className={s.uploader__header}>
        <div className={s.uploader__title}>Загрузки</div>
        <button className={s.uploader__close} onClick={() => dispatch(hideUploader())}>X</button>
      </div>  
      {files.map(file => 
        <UploadFile key={file.id} file={file} />
      )}
      
    </div>
      
  );
};

export default Uploader;