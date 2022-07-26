import React from 'react'
import PropTypes from "prop-types"
import FolderIcon from '@mui/icons-material/Folder';
import s from './File.module.css'

import sizeFormat from '../../../../utils/sizeFormat'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import { Button } from '@mui/material';



function FileList(props) {
  const {file, downloadClickHandler,openDirHandler, deleteClickHandler} = props
  return (
    <>
      {file.type === 'dir' 
        ?
        <div className={s.folder} onClick={ () => openDirHandler(file)}>
          <FolderIcon style={{fontSize: '50px'}}/>
          <div className={s.file__name}>{file.name}</div>
          <div className={s.file__date}>{file.date.slice(0,10)}</div>
          <div className={s.file__size}>{sizeFormat(file.size)}</div>
        </div>
        : 
        <div className={s.file} onClick={ () => openDirHandler(file)}>
          <InsertDriveFileIcon style={{fontSize: '50px'}}/> 
          <div className={s.file__nam}>{file.name}</div>
          <div className={s.file__date}>{file.date.slice(0,10)}</div>
          <div className={s.file__size}>{sizeFormat(file.size)}</div>

          <Button  className={s.file__download}
            onClick={(e) => downloadClickHandler(e)} variant="outlined" startIcon={<DownloadIcon />}>
          Download
          </Button> 
          <Button className={s.file__delete}
            onClick={(e) => deleteClickHandler(e)} startIcon={<DeleteIcon/>}>Delete</Button>
        </div>
      }
    </>
  )
}

export default  FileList

FileList.propTypes = {
  file: PropTypes.any, 
  downloadClickHandler: PropTypes.func, 
  openDirHandler: PropTypes.func, 
  deleteClickHandler: PropTypes.func
}