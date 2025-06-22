import React from 'react'
import { awaitTime } from '../../utils/awaitTime';
/*
- Perform side effects from a function component after the function component renders.  (data fetching, subscriptions …)
- You can use more than a single effect in a component.
- Important: React runs the effects after every render - including the first render.

Lift cycle: first render: component render UI with initial state -> effect hook -> update new state -> component re-render with new state -> full chu kỳ component render

- first render: effect hook always run
- next render: effect hook run by dependency
    - empty dependency: run once for first render
    - value dependency: run every value dependency change
- Use to performs task, action, effect ... after component render UI (user see UI with initial state)
*/

interface IMember {
  id: string,
  title: string
}

function EffectHook() {
  const [count, setCount] = React.useState(1);
  const [members, setMembers] = React.useState<IMember[]>([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(5);

  React.useEffect(() => {
    console.log('useEffect render with no dependency')
  }); // always run when component render (include first/next render)

  
  React.useEffect(() => {
    console.log('useEffect render with empty dependency');
    async function fetchTodo() {
      try {
        await awaitTime(1000);
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);
        const data = await res.json();
        setMembers(data);
      } catch (e) {
        console.log('fail: ', e)
      }
    }
    fetchTodo();
    //  fetch('https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/user')
    //   .then(response => response.json())
    //   .then(data => {
    //     setMembers(data.data);
    //   })
  }, [page, limit]); // run once time

   React.useEffect(() => {
    console.log('useEffect render with value dependency')
  }, [count]);

  function updateCount() {
    setCount((prevState) => {
      return prevState + 1 // 1 + 0 = 1
    });
  }

  function onPrevPage() {
    // const newPage = page - 1;
    // setPage(newPage);
    setPage(prevState => prevState - 1)
  }

  function onNextPage() {
    setPage(prevState => prevState + 1)
  }

  function onChangeLimit(e: React.ChangeEventHandler<HTMLSelectElement>) {
    setLimit(e.target.value)
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
     
      <div className="relative overflow-x-auto w-[500px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id} className="bg-white border-b   border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {member.id}
                </th>
                <td className="px-6 py-4">{member.title}</td>
              </tr>   
            ))}
          </tbody>
        </table>
        <br /> 
        <div className='flex justify-between'>
          <div className='flex '>
            <button type="button" onClick={onPrevPage}>Prev</button>
            <div>{page}</div>
            <button type="button" onClick={onNextPage}>Next</button>
          </div>
          <div>
            Limit 
            <select value={limit} onChange={onChangeLimit}>
              <option value={1}>1</option>
              <option value={3}>3</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
      </div>
      

   </div>
  )
}

export default EffectHook