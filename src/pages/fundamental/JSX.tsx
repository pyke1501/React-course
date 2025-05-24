import React from 'react'

/*
Empty tag:
 - <> </>
 - Fragment
*/

function JSX() {
  // const sum = 1 + 1;
  const sum = (
    <span>this is sum: {1 + 1}</span>
  );

  const lists = (
    <ul>
      <li>iphone</li>
      <li>samsung</li>
    </ul>
  );

  // traditional function
  function renderButton() {
    return (
      <span>this is function component</span>
    )
  }

  // arrow function
  // const renderSum = () =>  <>
  //   <div>1312</div>
  //   <div>3213</div>
  // </>
  const renderSum = () => {
    const color = '#f00';
    return (
      <>
        <div style={{ color }}>1312</div>
        <div>3213</div>
      </>
    );
  }

  return (
    <React.Fragment key={Date.now()}>
      <h1>JSX</h1>
      
      Expression:{sum} <br />
      Product: {lists} <br />
      Traditional Function: {renderButton()} <br />
      Arrow function: {renderSum()} <br />
      Input: <input type="text" />
    </React.Fragment>
  )
}

export default JSX