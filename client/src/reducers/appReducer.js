const SHOW_LOADER = "SHOW_LOADER"
const HIDE_LOADER = "HIDE_LOADER"

const defaultState = {
  isLoading: true
}

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
  case SHOW_LOADER: return {...state, isLoading:true}
  case HIDE_LOADER: return { ...state, isLoading:false}
  default:
    return state
  }
}


export const showLoader = () => ({type: SHOW_LOADER})
export const hideLoader = () => ({type: HIDE_LOADER})