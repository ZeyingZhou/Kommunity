import React from 'react';
import {Icon} from 'antd';
import './NavBarK.css';
const NavBarK = () => {
  const goBack = () => {
    window.history.back()
  }


  return (
      <>
      <Icon type="left" className="icon" onClick={goBack}/>
      <h1>DETAIL</h1>
      <Icon type="retweet" className="icon"/>
      </>
  )
};



export default NavBarK;