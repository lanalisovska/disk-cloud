import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { hideUploader } from '../../reducers/uploadReducer';
import './uploader.scss'
import UploadFile from './UploadFile';


const Uploader = () => {
  const isVisible = useSelector(state => state.uploader.isVisible)
  const dispatch = useDispatch()
  const files = useSelector(state => state.uploader.files)
 
  return (isVisible && 
    <div className="uploader">
      <div className="uploader__header">
        <div className="uploader__title">Загрузки</div>
        <button className="uploader__close" onClick={() => dispatch(hideUploader())}>X</button>
      </div>  
      {files.map(file => 
        <UploadFile key={file.id} file={file} />
      )}
      
    </div>
      
  );
};

export default Uploader;