import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createDir } from "../../actions/file";
import { setPopupDisplay } from "../../reducers/fileReducer";
import InputComponent from "../../utils/input/InputComponent";
import './files.scss'

const Popup = () => {
  const [dirName, setDirName] = useState('')
  const popupDisplay = useSelector(state => state.file.popupDisplay)
  const currentDir = useSelector(state => state.file.currentDir)
  const dispatch = useDispatch()

  function createHandler() {
    dispatch(createDir(currentDir, dirName))
    setDirName('')
    dispatch(setPopupDisplay('none'))
  }
  return (
    <div className="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
      <div className="popup__content" onClick={(event => event.stopPropagation())}>
        <div className="popup__header">
          <h3 className="popup__title">Создать новую папку</h3>
          <button className="popup__close" onClick={() => dispatch(setPopupDisplay('none'))}>X</button>
        </div>
        <InputComponent type="text" placeholder="Введите название папки..." value={dirName} setValue={(e) => setDirName(e.target.value)}/>
        <button className="popup__create" onClick={() => createHandler()}>Создать</button>
      </div>
    </div>
  );
};

export default Popup;