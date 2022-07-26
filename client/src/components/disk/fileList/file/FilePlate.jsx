import React, { useState } from 'react'
import s from './File.module.css'
import PropTypes from "prop-types"
import FolderIcon from '@mui/icons-material/Folder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Button} from '@mui/material';
import OptionsModal from '../Options/OptionsModal';
import MoreInfo from '../Options/MoreInfo';




export default function FilePlate(props) {
  const {file,  openDirHandler,   deleteClickHandler, downloadClickHandler} = props
  const [options, setOptions] = useState(false)
  const [hoverInfo, setHoverInfo] = useState(false)

  const openHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setOptions(true)
  }

  const closeHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setOptions(false)

  }
  return (
    <div 
      onMouseOver={() => setHoverInfo(true)} 
      onMouseLeave={() => setHoverInfo(false)} 
      className={s.file_plate} onClick={() => openDirHandler(file)}>
      {file.type === 'dir'
        ?<>
        
          <FolderIcon style={{fontSize: '80px'}}/>
          <div className={s.name}>{file.name}</div>
        </>
        : <>
          <InsertDriveFileIcon style={{fontSize: '80px'}}/>
          <div className={s.name}>{file.name}</div>
          <Button onClick={(e) => openHandler(e)}><MoreHorizIcon /></Button>
        </> }
  
      {options && <OptionsModal 
        file={file}
        closeHandler={closeHandler}
        downloadClickHandler={downloadClickHandler} 
        deleteClickHandler={deleteClickHandler}/>}
      {hoverInfo && <MoreInfo file={file} />}
    </div>
  )
}






FilePlate.propTypes = {
  file: PropTypes.any, 
  downloadClickHandler: PropTypes.func, 
  openDirHandler: PropTypes.func, 
  deleteClickHandler: PropTypes.func
}