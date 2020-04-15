import React from 'react';
import classNames from 'classnames';

// styles
import navigationIMG from '../assets/navigation-button.png';

export default function SideNavButton(props) {
  const { onClick_, message } = props;
  const classNames_ = classNames('sidenav__button', {
    '--danger': props.danger
  });

  return (
    <div
    onClick={onClick_}
    className={classNames_}>
      <span className='sidenavBtn__name'>{message}</span>
      <img
      className='sidenav-img'
      src={navigationIMG}
      />
    </div>
  )
}
