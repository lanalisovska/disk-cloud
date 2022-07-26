import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getFiles, uploadFile } from '../../actions/file'
import { setCurrentDir, setPopupDisplay, setViewAction } from '../../reducers/fileReducer'
import Uploader from '../Uploader/Uploader'
import './files.scss'
import Popup from './PopupAddFalder'
import Loader from '../../utils/Loader /Loader'
import { Button } from '@mui/material'
import FilesList from './fileList/FilesList'

export default function Disk() {
  const isLoading = useSelector(state => state.app.isLoading)
  const currentDir = useSelector(state => state.file.currentDir)
  const dispatch = useDispatch()
  const dirStack = useSelector(state => state.file.diskStack)
  const [dragEnter, setDragEnter] = useState(false)
  const [sort, setSort] = useState('default')


  const setViewHandler = (view) => {
    dispatch(setViewAction(view))
  }
 
  useEffect(() => {
    dispatch(getFiles(currentDir, sort))  
  }, [currentDir, sort])

  const createDirHeandler = () => {
    dispatch(setPopupDisplay('flex'))
  }
  const backClickHandler = () => {
    const backDiId = dirStack.pop()
    dispatch(setCurrentDir(backDiId))
  }

  function fileUploadHandler(event) {
    const files = [...event.target.files]
    files.forEach(file => dispatch(uploadFile(file, currentDir)) )
  }

  function dragEnterHandler(event) {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(true)
  }
  function dragLeaveHandler (event) {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(false)
  }
  function dropHandler(event) {
    event.preventDefault()
    event.stopPropagation()
    let files = [...event.dataTransfer.files]
    files.forEach(file => dispatch(uploadFile(file, currentDir)))
    setDragEnter(false)
  }

  if(isLoading){
    return  <Loader/>
  }
  return ( !dragEnter ?
    <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
      <div className="disk__btns">
        <Button  disabled={!currentDir}  className={currentDir? `disk__back` :`disk__back disabled`} onClick={() => backClickHandler()}/>
       
        <button className="disk__create" onClick={() => createDirHeandler()}>Создать папку</button>
        <div className="disk__upload">
          <label htmlFor="disk__upload-input" className="disk__upload-label">Загрузить файл</label>
          <input  onChange={(event) => fileUploadHandler(event)} multiple={true}  type="file" id="disk__upload-input" className="disk__upload-input"/>
        </div>
     
        <select value={sort}onChange={(e) => setSort(e.target.value)} className="disk__select">
          <option  disabled >sort by</option>
          <option value='name'>По імені</option>
          <option value='type'>По типу</option>
          <option value='date'>По даті </option>
          <option value='size'>По розміру</option>
        </select>
        <button className='disk__list' onClick={() => setViewHandler('list')}/>
        <button className='disk__plate' onClick={() => setViewHandler('plate')}/>
      </div>
    
      <FilesList/>
      <Popup />
      <Uploader />
    </div>
    : 
    <div className="drop-area" onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
         Перемістіть файли сюди 
    </div>
  )
}
