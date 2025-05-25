import React from 'react'

/*
1. first render: component render UI with initial state
2. next render (re-render): component re-render UI with new state

immutate/mutate: bất biến, thay đổi
const total = 10;
function sum(x) {
  return total + x
}
sum(2) -> 12
sum(3) -> 13

function sumHoang(y) {
  total = total + 10;
  return total + y
}
sumHoang(5) -> 25
sumHoang(10) -> 30 
====================
primitive: number, boolean, string, null, undefiend -> so sánh tham trị (giá trị)
non-primitive: object, function, array ... -> so sánh tham chiếu (vùng nhớ)
*/


function State() {
  // state
  const [count, setCount] = React.useState(0); // first: 0, 
  const [user, setUser] = React.useState({
    firstName: 'tony',
    lastName: 'nguyen',
    address: {
      city: 'hcm',
      ward: 13
    }
  }); // memory A

  // action 
  function increment() {
    setCount(1)
  }

  function updateFirstName() {
    // user.firstName = 'Tony' + Date.now(); //  mutate -> thay đổi trực tiếp vùng nhớ
    // const newUser = {
    //   firstName: 'tony'
    // }
    setUser((prevState) => {
      console.log('updateFirstName: ', prevState)
      return {
        ...prevState, // copy all properties object
        firstName: 'tony' + Date.now()
      }
    }); // memory A
  }

  function updateCity() {
    setUser((prevState) => {
      return {
        ...prevState,
        address: {
          ...prevState.address,
          city: 'hcm' + Date.now()
        }
      }
    })
  }

  // UI
  console.log('State render', {
    count,
    user
  })
  return (
    <div>
      <h1>State</h1>

      Count: {count} <br />
      First Name: {user.firstName}  <br /><br />
      Last Name: {user.lastName}  <br /><br />
      Name City: {user.address.city}  <br /><br />
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={updateFirstName}>Update First Name</button>
      <button type="button" onClick={updateCity}>Update City</button>
    </div>
  )
}

export default State