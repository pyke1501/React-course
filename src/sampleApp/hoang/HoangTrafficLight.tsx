import React, { useEffect, useState } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
  const [light, setLight] = useState('green');

  useEffect(() => {
    let timer;

    if (light === 'green') {
      timer = setTimeout(() => setLight('yellow'), 5000);
    } else if (light === 'yellow') {
      timer = setTimeout(() => setLight('red'), 4000);
    } else if (light === 'red') {
      timer = setTimeout(() => setLight('green'), 3000);
    }

    return () => clearTimeout(timer);
  }, [light]);

  return (
    <div className="traffic-light">
      <div className={`light red ${light === 'red' ? 'on' : ''}`}></div>
      <div className={`light yellow ${light === 'yellow' ? 'on' : ''}`}></div>
      <div className={`light green ${light === 'green' ? 'on' : ''}`}></div>
    </div>
  );
};

export default TrafficLight;