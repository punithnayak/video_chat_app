import React from 'react'
import "./Introduction.css"
import logo from "../../Resources/Images/logo.png"
import ConnectingButtons from './ConnectingButtons'
const IntroductionPage = (props) => {
  return (
    <div className='introduction_page_container'>
    <div className='introduction_page_panel'>
    <img src={logo} className="introduction_page_image" />
    <ConnectingButtons/>
    
    </div>
    </div>
  )
}

export default IntroductionPage