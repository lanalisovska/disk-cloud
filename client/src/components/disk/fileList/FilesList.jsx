import React from 'react'
import { useSelector } from 'react-redux'
import File from './file/File'
import s from './FileList.module.css'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { FormattedMessage } from 'react-intl'

export default function FilesList() {
    
  const files = useSelector(state => state.file.files)
  const fileView = useSelector(state => state.file.view)
  
  if(files.length === 0){
    return <div className={s.helper}>Empty directory</div>
  }

  if(fileView === 'plate'){
    return(
      <div className={s.fileplate}>
        {files.map(file => <File key={file._id} file={file}/> )}
      </div>
    )
  }
  if(fileView === 'list')
    return (
      <div className={s.filelist}>
        <div className={s.filelist__header}>
          <div className={s.filelist__name}><FormattedMessage id='name'/></div>
          <div className={s.filelist__date}><FormattedMessage id='date'/></div>
          <div className={s.filelist__size}><FormattedMessage id='size'/></div>
        </div>
        <TransitionGroup>
          {files.map(file => 
            <CSSTransition
              key={file._id}
              timeout={500}
              classNames={s.file}
              exit={false}>
              <File file={file}/>
            </CSSTransition>)}
        </TransitionGroup>
      
      </div>
    )
}
