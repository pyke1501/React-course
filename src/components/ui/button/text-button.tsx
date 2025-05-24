
function TextButton({ firstName, isAdult, age = 30, component1, component2: Component2, ...restProps }) {
  console.log('TextButton: ', {
    firstName,
    isAdult,
    age,
    restProps: restProps,
    component1,
    Component2
  })

  return (
    <>
      <button type="button">
        FirstName: {firstName} <br />
        Adult: {isAdult ? (<>Adult</>) : (<>Children</>)} <br/>
        {/* Name Bird: {props['name-bird']} */}
      </button>
      <br />
      Component 1:  {component1} <br />
      Component 2: <Component2 /> 
    </>
  )
}

export default TextButton