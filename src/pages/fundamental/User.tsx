import React from 'react'
import { useNavigate, useSearchParams } from 'react-router';

function User() {
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const _page = searchParam.get('page');
  const _limit = searchParam.get('limit');

  const [users, setUsers] = React.useState([]);
  const [metadata, setMetadata] = React.useState({
    page: Number(_page) || 1,
    limit: Number(_limit) || 1
  })

  React.useEffect(() => {
    async function fetchUsers() {
      const res = await fetch(`https://tony-auth-express-vdee.vercel.app/api/user?page=${metadata.page}&limit=${metadata.limit}`);
      const data = await res.json();
      
      navigate(`/user?page=${metadata.page}&limit=${metadata.limit}`)

      setUsers(data.data)
    }
    fetchUsers();
  }, [metadata])

  function gotoDetail(userId: string) {
    navigate(`/user/${userId}`)
  }

  function onNextPage() {
    setMetadata(prevState => ({
      ...prevState,
      page: prevState.page + 1
    }))
  }

  function onPrevPage() {
    setMetadata(prevState => {
      if (prevState.page === 1) return prevState;
      return {
        ...prevState,
        page: prevState.page - 1
      }
    })
  }

  function onChangeLimit(e: any) {
    setMetadata(prevState => ({
      ...prevState,
      limit: e.target.value
    }))
  }


  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
                <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id} className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.first_name}
                </th>
                <td className="px-6 py-4">
                  {user.last_name}
                </td>
                <td className="px-6 py-4">
                   {user.email}
                </td>
                <td className="px-6 py-4">
                  <button type="button" onClick={() => gotoDetail(user._id)}>View Detail</button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button type="button" onClick={onPrevPage}>Prev Page</button>
      <span>{metadata.page}</span>
      <button type="button" onClick={onNextPage}>Next Page</button>

      Limit: 
      <select onChange={onChangeLimit} value={metadata.limit}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

  </div>
  )
}

export default User