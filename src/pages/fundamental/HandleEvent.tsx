import React from 'react'

function HandleEvent() {
  const [count, setCount] = React.useState(1);

  // function increment() {
  //   setCount(prevState => prevState + 1)
  // }
  // const increment = (number: number = 1) => {
  //   setCount(prevState => prevState + number)
  // }

  // re-create function every component render
  // user click -> () => {} => increment(10) -> excute function
  // const increment = (number: number = 1) => {
  //   setCount(prevState => prevState + number)
  //   // console.log('increment: ', number)
  // }

  // curry function / closure function
  // user click -> increment(10)
   const increment = (number: number = 1) => () => {
    setCount(prevState => prevState + number)
   }

  return (
    <div>
      <h1>HandleEvent</h1>
      Page A: 
      {/* <button onClick={() => increment(10)}>Increment {count}</button> */}
      <button onClick={increment(10)}>Increment {count}</button>
    </div>
  )
}

export default HandleEvent