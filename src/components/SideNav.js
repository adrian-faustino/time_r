import React from 'react';

// styles
import '../styles/SideNav.css';

export default function SideNav(props) {
  return (
    <div className='sidenav__container'>
      {props.children}
    </div>
  )
}
