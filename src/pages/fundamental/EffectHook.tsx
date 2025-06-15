import React from 'react'

/*
Perform side effects from a function component after the function component renders.  (data fetching, subscriptions …)
You can use more than a single effect in a component.
Important: React runs the effects after every render - including the first render.

- first render: component render UI with initial state -> effect hook -> update new state -> component re-render with new state -> full chu kỳ component render

- first render: effect hook always run
- next render: effect hook run by dependency

*/

function EffectHook() {
  const [count, setCount] = React.useState(1);
  const [members, setMembers] = React.useState([]);

  React.useEffect(() => {
    console.log('useEffect render with no dependency')
  }); // always run when component render (include first/next render)

  
  React.useEffect(() => {
    console.log('useEffect render with empty dependency')
    fetch('https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/user')
      .then(response => response.json())
      .then(data => {
        setMembers(data.data);
      })
  }, []); // run once time

   React.useEffect(() => {
    console.log('useEffect render with value dependency')
  }, [count]);

  function updateCount() {
    setCount((prevState) => {
      return prevState + 0 // 1 + 0 = 1
    });
  }
  // UI
  console.log("----------------EffectHook-----------")
  console.log("EffectHook UI")
  return (
    <div>
      <h1>EffectHook</h1>
      Count: {count} <br />
      <button type='button' onClick={updateCount}>Update Count</button>
      <h5>List Members</h5>
      {members.map(member => (
        <div>Email: {member.email}</div>
      ))}
   </div>
  )
}

export default EffectHook