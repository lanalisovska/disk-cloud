import React, { useState } from 'react'
import {CSSTransition} from 'react-transition-group'
import { Button, Link } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './MainPage.css'

export default function MainPage() {
  const [visibleCV, setVisibleCV] = useState(false)
  return (
    <div className='wrapper'>
      <div className='text1'>Welcome to my pet project!</div>
      <div className='text2'>My name is Lana. I am a junior-frontend-developer</div>
      <div className='text2'>You can start viewing the functionality of the project here : 
        <NavLink to='/login'><Link> /disk</Link></NavLink>
      </div>
      <div className='text3'>
        <p>Also, click here and see my resume :
          <Button
            onClick={() => {visibleCV ?setVisibleCV(false) : setVisibleCV(true)}}>
            {visibleCV? 'close': 'open'}</Button>
        </p>
      </div>
      <CSSTransition 
        in={visibleCV} 
        timeout={800} 
        classNames={{
          enterActive: 'resume-show', 
          exitActive: 'resume-hide'
        }}
        mountOnEnter
        unmountOnExit>
        <div className='resume'>
          <h2>Personal skills </h2>
          <div>
            <ol>
              <li><span>React</span></li>
              <li><span>Redux</span></li>
              <li><span>HTML/CSS</span></li>
              <li><span>JavaScript</span></li>
              <li><span>Lodash</span></li>
              <li><span>Moment.js</span></li>
              <li><span> JSON</span></li>
              <li><span>Git</span></li>
              <li><span>TypeScript</span></li>
              <li><span>AntDesign</span></li>
              <li><span> Postman</span></li>
              <li><span>Mateial-UI</span></li>
            </ol>
          </div>
    
          <h2>Courses </h2>
          <ul>
            <li>React JS  (IT-Camasutra) 2021</li>
            <li>JavaScript 2021 (Udemy) 2021 </li>
          </ul>

          <h2>Education </h2>
          <ul>
            <li>Lviv Printing College of Ukrainian Academy of Printing (Sep, 2018 – May, 2020) </li>
            <li> State University of Telecommunications  (Sep, 2020 – Present) </li>
          </ul>
          <h2>Social Links</h2>

          <ul>
            <li> <Link variant='h7' color='#a46525' href='https://github.com/lanalisovska'>github/LanaLisovska </Link> </li>
          </ul>

          <h2>Languages</h2>
          <ul>
            <li>English — Intermediate </li>
            <li> Ukrainian — Native Speaker  </li>
          </ul>

          <h2>Soft skills </h2>
          <div>
            <ul>
              <li><span> Effective communication  </span></li>
              <li><span> Problem-solving  </span></li>
              <li><span> Dependability   </span></li>
              <li><span> Adaptability  </span></li>
              <li><span> Creativity </span></li>
            </ul>
          </div>
          <Button
            onClick={() => {visibleCV ?setVisibleCV(false) : setVisibleCV(true)}}>
            {visibleCV? 'close': 'open'}</Button>
          
        </div>
        
      </CSSTransition>

    </div>
  )
}
