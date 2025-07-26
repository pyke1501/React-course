import { useEffect, useState } from 'react';
import './TrafficLight.css';

interface Traffic {
  [key: string]: {
    bgColor: string,
    next: string,
    time: number
  }
}

// hash object
const config: Traffic = {
  green: {
    bgColor: 'green',
    next: 'yellow',
    time: 5000
  },
  red: {
    bgColor: 'red',
    next: 'green',
    time: 3000
  },
  yellow: {
    bgColor: 'yellow',
    next: 'red',
    time: 4000
  }
}

const TrafficLight = () => {
  const [light, setLight] = useState('green');

  // useEffect(() => {
  //   let timer;

  //   if (light === 'green') {
  //     timer = setTimeout(() => setLight('yellow'), 5000);
  //   } else if (light === 'yellow') {
  //     timer = setTimeout(() => setLight('red'), 4000);
  //   } else if (light === 'red') {
  //     timer = setTimeout(() => setLight('green'), 3000);
  //   }

  //   return () => clearTimeout(timer);
  // }, [light]);

  useEffect(() => {
    // const 
    const { next, time } = config[light]; // red

    let timer = setTimeout(() => {
      setLight(next);
    }, time)

    return () => clearTimeout(timer);
  }, [light])


  return (
    <div className="traffic-light">
      {/* <div className={`light red ${light === 'red' ? 'on' : ''}`}></div>
      <div className={`light yellow ${light === 'yellow' ? 'on' : ''}`}></div>
      <div className={`light green ${light === 'green' ? 'on' : ''}`}></div> */}
      {Object.keys(config).map(key => (
        <div key={key} className={`light ${config[key].bgColor} ${light === key ? 'on' : ''}`}></div>
      ))}


    </div>
  );
};

export default TrafficLight;