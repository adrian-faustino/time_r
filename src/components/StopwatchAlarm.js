import React, { useState, useEffect } from 'react'
import bell from '../assets/sounds/temple-bell.mp3';

export default function StopwatchAlarm() {
  const [state, setSate] = useState({
    audio: new Audio(bell)
  });

  useEffect(() => {
    state.audio.volume = 0.1;
    state.audio.play();
  }, []);

  return (
    <div>
    </div>
  )
}
