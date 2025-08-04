import React from 'react'

function GuestRoute({ children }: React.PropsWithChildren) {
  const access_token = window.localStorage.getItem('access_token');

  if (access_token) {
    return (
      <div>logined!! please go to ....</div>
    )
  }

  return children
}

export default GuestRoute