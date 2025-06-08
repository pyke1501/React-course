import React from "react"

/* uncontrolled component/input/form
Uncontrolled inputs are like traditional HTML form inputs:
They remember what you typed. You can then get their value using a ref.
Don’t cause re-render component.
The input value is not being managed by React.

controller component/input/form
The value  is handled by the react state.
It is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component.

*/


function Form() {
  const firstNameRef = React.useRef<any>(null);
  const [lastName, setLastName] = React.useState(undefined)

  function onSubmit() {
    console.log("onSubmit: ", {
      firstName: firstNameRef.current?.value,
      lastName
    })
  }

  return (
    <div>
      <h1>Form</h1>
      First Name: <input id="firstName" ref={firstNameRef} defaultValue="tony" type="text" /> <br />
      Last Name: 
      <input type="text" value={lastName || ''} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}/>

      <br />
      <button type="button" onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Form