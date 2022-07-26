import axios from "axios";
import { API_URL } from "../config";
import { setError,  setUser } from "../reducers/userReducer";

export const registration = (email, password) => {
  return async dispatch => {
    try {
      const response = await axios.post(`${API_URL}api/auth/registration`,
        {  
          email, 
          password
        })

      dispatch(setError(response.data.message))

    }
    catch(e){
      
      dispatch(setError(e?.response?.data?.message))
     
     
    }
  }
}

export const login = (email, password) => { 
  return async dispatch => {
    try{
      const response = await axios.post(`${API_URL}api/auth/login`,{  
        email, 
        password
      })
      dispatch(setError(''))
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
     
    }
    
    catch(e){
      dispatch(setError(e?.response?.data?.message))
     
       
    }
  }
}


export const auth = () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${API_URL}api/auth/auth`,
        {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
      )
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    }
    catch(e){
      // alert(e?.response?.data?.message)
      // console.log(e)
      localStorage.removeItem('token')
    }

  }

}

export const uploadAvatar = (file) => {
  return async dispatch => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      const response = await axios.post(`${API_URL}api/files/avatar`, formData,
        {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
      )
      dispatch(setUser(response.data))
    }
    catch(e){
      // alert(e?.response?.data?.message)
      console.log(e)
    }
  }
}

export const deleteAvatar = () => {
  return async dispatch => {
    try {

      const response = await axios.delete(`${API_URL}api/files/avatar`, 
        {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
      )
      dispatch(setUser(response.data))
    }
    catch(e){
      alert(e?.response?.data?.message)
      console.log(e)
    }
  }

}