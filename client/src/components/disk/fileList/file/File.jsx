import React from 'react'
import PropTypes from "prop-types"
import { useDispatch, useSelector } from 'react-redux'
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer'
import { deleteFile, downloadFile } from '../../../../actions/file'
import FilePlate from './FilePlate';
import FileList from './FileList'

const File = ({file}) => {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.file.currentDir)
  const fileView = useSelector(state => state.file.view)

  
  function openDirHandler(file){
    if(file.type === 'dir'){
      dispatch(pushToStack(currentDir))
      dispatch(setCurrentDir(file._id))
    }
  }
  function downloadClickHandler(e){
    e.stopPropagation()
    downloadFile(file)
  }
  function  deleteClickHandler(e) {
    e.stopPropagation()
    dispatch(deleteFile(file))
  }

  if(fileView === 'plate'){
    return (
      <FilePlate 
        file={file} 
        openDirHandler={openDirHandler}
        deleteClickHandler={deleteClickHandler}
        downloadClickHandler={downloadClickHandler}/>
    )
  }
  if(fileView === 'list'){
    return (
      <FileList file={file} 
        openDirHandler={openDirHandler}
        deleteClickHandler={deleteClickHandler}
        downloadClickHandler={downloadClickHandler} />
    )
  }

}

File.propTypes = {
  file: PropTypes.any
}
export default File