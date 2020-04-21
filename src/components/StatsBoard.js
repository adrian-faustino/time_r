import React from 'react'
import { formatMS } from '../helper/StopwatchHelper';

// styles
import '../styles/StatsBoard.css';

export default function StatsBoard(props) {
  const { h, m , s, ms } = formatMS(props.totalElapsed);

  let output = '';
  
  if (h) {
    if (h === 1) {
      output = ' an hour ';
    } else {
      output = `${h} hours `;
    }
  } else if (m) {
    if (h && m === 1) {
      output += ' and one minute';
    } else if (h && m) {
      output += ` and ${m} minutes `;
    } else if (m < 1 && s) {
      output = ' a few seconds';
    } else if (m === 1) {
      output = ' a minute';
    } else {
      output = ` ${m} minutes`;
    }
  } else if (s) {
    if (s === 1) {
      output = ' 1 second';
    } else {
      output = ` ${s} seconds`;
    }
  }
  
  return (
    <div className="stats-board__container">
      <span className="stats-bard__banner">You've been productive for {output}</span>
    </div>
  )
}