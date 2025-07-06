import React, { useCallback } from 'react'
import SimpleCard from '../../components/ui/card/simple-card'

/*
- data type in javascript
  - primitive type: number, string, boolean, null, undefiend, symbol => compare value
  - non-primitive type: array, object, function ... => compare reference

- làm sao để biết component A re-render dư thừa
    - nếu 1 state B thay đổi, mà nó không liên quan đến component A -> component A re-render => component A re-render dư thừa
- làm sao để optimize performance react component
  - để optimize performance react component thì ta phải prevent component re-render dư thừa
  - ta sẽ xài memo, useMemo, useCallback để optimize performance react

memo:
  - Higher order-component. -> nhận vào 1 component và render component 
  - Prevent the component re-render unnecessary.
  - It takes 2 arguments: one for React Component, one for custom compare (option). 
  - Shallow comparison.
      objectA = {
        firstName: 'tony',
        lastName: 'nguyen',
        address: {
          name: 'dang van ngu',
          ward: 14
        }
      }
      objectB = {
        firstName: 'tony',
        lastName: 'nguyen',
        address: {
          name: 'dang van ngu',
          ward: 14
        }
      }
  - deep comparison

useCallback:
- Returns  a memorized callback function.
- Callback function will re-runs if one of the dependencies has changed.

*/

function PerformanceHook() {
  const [isAuth, setIsAuth] = React.useState(true);
  const [title, setTitle] = React.useState('tony');
  const [movie, setMovie] = React.useState({
    name: 'tony',
    year: 1998
  });

  function toggleAuth() {
    setIsAuth(prev => !prev)
  }

  // re-created every component re-render
  // function updateTitle() {
  //   setTitle(prev => prev + Date.now())
  // }

  const updateTitle = React.useCallback(() => {
    setTitle(prev => prev + Date.now())
  }, [])

  function updateMovie() {
    setMovie(prev => ({
      ...prev,
      name: prev.name + Date.now()
    }))
  }

  console.log('PerformanceHook re-render')
  return (
    <div>
      <h1>PerformanceHook</h1>
      User login: {isAuth ? 'yes' : 'no'} <br />
      <button type='button' onClick={toggleAuth}>Toggle Auth</button>
     
      <button type='button' onClick={updateMovie}>Update Movie</button>

      <SimpleCard 
        title={title} 
        movie={movie}
        updateTitle={updateTitle}
      />
    </div>
  )
}

export default PerformanceHook