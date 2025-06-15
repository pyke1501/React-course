import React from 'react'

/* 
 state: batching state update

 closure function
*/

function initialState() {
  console.log('iniztialState')
  return 0
}

function MyButton({ timestamp, updateTimeStamp }) {
  return (
    <div>
      <br />
      <div>MyButton</div> 
      Timestamp: {timestamp} <br />
      <button type='button' onClick={updateTimeStamp}>Update Timstamp</button>
    </div>
  )
}

function StateHook() {
  const [count, setCount] = React.useState(initialState); // 0
  const [timestamp, setTimestamp] = React.useState(Date.now()); // 0

  function updateCount() {
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1
    // setCount(count + 1); // 0 + 1
    
    // callback function. Write syntax arrow function -> reat call updater function
    setCount((prevState) => {
      console.log('1 updater function prevState: ', prevState);
      return prevState + 1 // 1 
    });
    setCount((prevState) => {
      console.log('2 updater function prevState: ', prevState); 
      return prevState + 1
    });
    setCount((prevState) => {
      console.log('3 updater function prevState: ', prevState);
      return prevState + 1
    });
  }

  function updateTimeStamp() {
    setTimestamp(Date.now());
  }

  console.log('StateHook render: ', count)
  return (
    <div>
      <h1>StateHook</h1>
      <br />
      Count: {count} <br />
      <button type='button' onClick={updateCount}>Update Count</button>
      <br />
      <MyButton timestamp={timestamp} updateTimeStamp={updateTimeStamp} />
      <MyButton timestamp={timestamp} updateTimeStamp={updateTimeStamp}  />
    </div>
  )
}

export default StateHook