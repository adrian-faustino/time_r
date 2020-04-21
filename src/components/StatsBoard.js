import React from 'react'
import { formatMS } from '../helper/StopwatchHelper';

// styles
import '../styles/StatsBoard.css';

export default function StatsBoard(props) {
  const { h, m , s, ms } = formatMS(props.totalElapsed);

  // fix this later after getting some sleep
  // if (h) {
  //   if (h === 1) {
  //     output = ' 1 hour ';
  //   } else {
  //     output = `${h} hours `;
  //   }
  // } else if (m) {
  //   if (h && m === 1) {
  //     output += ' and one minute';
  //   } else if (h && m) {
  //     output += ` and ${m} minutes `;
  //   } else if (m < 1 && s) {
  //     output = ' a few seconds';
  //   } else if (m === 1) {
  //     output = ' a minute';
  //   } else {
  //     output = ` ${m} minutes`;
  //   }
  // } else if (s) {
  //   if (s === 1) {
  //     output = ' 1 second';
  //   } else {
  //     output = ` ${s} seconds`;
  //   }
  // }
  const minutes = Math.floor(props.totalElapsed / 60000) // 60 * 1000;
  let output = '';

  if (minutes === 1) {
    output += ` 1 minute`;
  } else if (minutes > 1) {
    output += ` ${minutes} minutes`;
  }

  if (s > 0 && minutes >= 1) {
    output += ' and';
  }

  if (s === 1) {
    output += ` 1 second`;
  } else if (s > 1) {
    output += ` ${s} seconds`;
  }
  
  return (
    <div className="stats-board__container">
      <span className="stats-board__banner">{(s > 0 || minutes > 0) && `You've been productive for:`}</span>
      <span className="stats-board__banner time">{props.totalElapsed ? output : ''}</span>
    </div>
  )
}