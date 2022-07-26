const SET_FILES = 'SET_FILES'
const SET_CURRENT_DIR = 'SET_CURRENT_DIR'
const ADD_FILE =  'ADD_FILE'
const SET_POPUP_DISPLAY = 'SET_POPUP_DISPLAY'
const PUSH_TO_STACK = 'PUSH_TO_STACK'
const POP_FROM_STACK = 'POP_FROM_STACK'
const DELETE_FILE = 'DELETE_FILE' 
const SET_VIEW = 'SET_VIEW'
const SET_ERROR = 'SET_ERROR'


const defaultState = {
  files: [], 
  currentDir: null,
  popupDisplay: 'none',
  diskStack: [],
  view: 'plate', 
  error: '', 

}

export default function fileReducer(state = defaultState, action){
  switch(action.type){
  case SET_FILES: return {...state, files: action.payload};
  case SET_CURRENT_DIR: return {...state, currentDir: action.payload};
  case ADD_FILE: return {...state, files: [...state.files, action.payload]};
  case SET_POPUP_DISPLAY: return {...state, popupDisplay: action.payload};
  case PUSH_TO_STACK: return {...state, diskStack: [...state.diskStack, action.payload]};
  case POP_FROM_STACK: return {...state, diskStack: [...state.dirStack, action.payload]};
  case DELETE_FILE: return {...state, files: [...state.files.filter(file => file._id != action.payload)]};
  case SET_VIEW: return {...state, view: action.payload}
  case SET_ERROR:
    return { ...state, error: action.payload}
  
  default: 
    return state
  }
}

export const setFiles = (files) => ({type:SET_FILES, payload: files})
export const setCurrentDir = (dir) => ({type: SET_CURRENT_DIR, payload: dir})
export const addFile = (file) => ({type: ADD_FILE, payload: file})
export const setPopupDisplay = (display) => ({type: SET_POPUP_DISPLAY, payload: display})
export const pushToStack = (dir) => ({type: PUSH_TO_STACK, payload: dir})
export const deleteFileAction = (dirId) => ({type: DELETE_FILE, payload: dirId})
export const setViewAction = (view) => ({type: SET_VIEW, payload: view})
export const setError = (error) => ({type: SET_ERROR, payload: error})

