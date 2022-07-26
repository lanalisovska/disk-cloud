/* eslint-disable react/react-in-jsx-scope */
import Navbar from "./Navbar/Navbar";
import './app.scss'
import { BrowserRouter} from 'react-router-dom'
import {useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "../actions/user";
import { IntlProvider } from "react-intl";
import { LOCALES} from './../i18n/locales'
import { messages } from "./../i18n/messages";
import AppRouter from "../routes/AppRouter";

const App = () => {
  useEffect(() => {
    dispatch(auth())
  }, [])
  function getInitialLocale(){
    const savedLocale = localStorage.getItem('locale')
    return savedLocale || LOCALES.UKRAINIAN
  }


  const [currentLocale, setCurrentLocale] = useState(getInitialLocale())
  
    
  const handlerChangeLocale = (e) => {
    setCurrentLocale(e.target.value)
    localStorage.setItem('locale', e.target.value)
  }
  const dispatch = useDispatch()



  return (
    <BrowserRouter>
      <IntlProvider 
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale={LOCALES.UKRAINIAN}>
        <div className="app">
          <Navbar currentLocale={currentLocale} handlerChangeLocale={handlerChangeLocale} />
          <div className='wrapp'>
            <AppRouter />
          </div>

        </div>
      </IntlProvider>
    </BrowserRouter>
    

  );
}

export default App;
