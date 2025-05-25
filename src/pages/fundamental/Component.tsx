import React from 'react'

/*
Pure Component/Presentation Component/Stateless component
  - just only present the props.
  - don’t need a state.
  - reuse code. 

Stateful/Container component
  Contains logic code in component.
  Dependent on state for rendering, 
  such as fetching data.
  Elements that are interactive on page.
  Elements that accept user input.

How many ways to component re-render?
- state changes
- props changes
- parent component re-render -> child component render
- force component rerender -> update Key
*/

function IncrementCount({ times = 1 }) {
  const [count, setCount] = React.useState(1);
  function increment() {
    // setCount(prevState => prevState + 1)
    setCount(prevState => {
      return (prevState + 1) * times
    })
  }
  console.log('IncrementCount')
  return (
    <button onClick={increment}>Increment {count}</button>
  )
}

function Component() {
  const [timestamp, setTimestamp] = React.useState(Date.now());

  return (
    <div>
      <h1>Component</h1>
      <button onClick={() => setTimestamp(Date.now())}>Force Update</button>
      Page A: <IncrementCount key={timestamp} />
      Page B: <IncrementCount times={2} />
    </div>
  )
}

export default Component