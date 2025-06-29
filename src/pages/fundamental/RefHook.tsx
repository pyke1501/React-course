import React, { useEffect, useRef } from 'react'
import Modal from '../../components/ui/modal/Modal';


/*
- You can store information between re-renders (unlike regular variables, which reset on every render).
- Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).
-There are a few good use cases for refs:
  - Managing focus, text selection, or media playback.
  - Triggering imperative animations.
  - Integrating with third-party DOM libraries.
*/

const MyInput = React.forwardRef((_, ref) => {
  const inputRef = useRef<any>(null);

  React.useImperativeHandle(ref, () => {
    return {
      onFocus() {
        inputRef.current.focus()
        inputRef.current.select()
      },
      firstName: 'tony'
    }
  })

  return (
    <>
      <input ref={inputRef} defaultValue="tony" /> <br />
      {/* <button type="button" onClick={onbFocus}>On Focus</button> */}
    </>
  )
})


function RefHook() {
  let countRef = React.useRef(0);
  const isSkipFirstRenderRef = React.useRef(true);
  const myInputRef = React.useRef<any>(null);
  const inputRef = React.useRef<any>(null);
  const modalRef = React.useRef<any>(null);
  const [timestamp, setTimestamp] = React.useState(Date.now());

  useEffect(() => {
    if(isSkipFirstRenderRef.current) {
      isSkipFirstRenderRef.current = false;
      return;
    };
    console.log('Refhook useEffect')
    // call background api -> run when component re-render (skip first render)
  })

  function forceUpdate() {
    countRef.current = countRef.current + 1;
    setTimestamp(Date.now())
  }

  function onSubmit() {
    inputRef.current.focus()
    inputRef.current.select()
    myInputRef.current.onFocus();
    console.log("myInputRef: ", myInputRef)
  }

  console.log('refhook render: ', isSkipFirstRenderRef)

  return (
    <div>
      <h1>RefHook</h1>
      Count: {countRef.current} <br />

      <input ref={inputRef} /> <br />
      <button type="button" onClick={onSubmit}>Submit</button>
      <button type="button" onClick={forceUpdate}>Force Update</button>
       <br /> <br />

      <h4>Deno: useRef + useImperativeHandle</h4>
      <MyInput ref={myInputRef} />
      <br />
      <h4>Deno: useRef + useImperativeHandle - Modal</h4>
      <button
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => {
          modalRef.current.toggleModal();
          const title = modalRef.current.text;
          console.log("title: ", title)
        }}
      >
        Toggle modal
      </button>
      <Modal ref={modalRef} />
    </div>
  )
}

export default RefHook