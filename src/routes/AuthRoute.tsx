import React from 'react'

function AuthRoute({ children }: React.PropsWithChildren) {
  const access_token = window.localStorage.getItem('access_token');
  console.log('AuthRoute');

  if (!access_token) {
    return (
      <div>not permission</div>
    )
  }

  return children
}

export default AuthRoute