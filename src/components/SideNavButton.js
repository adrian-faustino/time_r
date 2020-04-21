import React from 'react';
import classNames from 'classnames';

// styles
import navigationIMG from '../assets/navigation-button.png';

export default function SideNavButton(props) {
  const { onClick_, message, style } = props;
  const classNames_ = classNames('sidenav__button', {
    '--danger': (style === 'danger'),
    '--fade': (style === 'fade')
  });

  return (
    <div
    onClick={onClick_}
    className={classNames_}>
      <span className='sidenavBtn__name'>{message}</span>
      <img
      alt={'arrow'}
      className='sidenav-img'
      src={navigationIMG}
      />
    </div>
  )
}
