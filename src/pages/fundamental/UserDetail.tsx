import React from 'react'
import { useParams } from 'react-router'

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = React.useState<any>(null);


  React.useEffect(() => {
    if (!id) return;

    async function fetchUser() {
      const res = await fetch(`https://tony-auth-express-vdee.vercel.app/api/user/${id}`);
      const data = await res.json();
      setUser(data.data)
    }
    fetchUser();
  }, [id])

  if (!user) return null;

  return (
    <div>
      <h4>UserDetail</h4>
      First Name: {user.first_name}
    </div>
  )
}

export default UserDetail