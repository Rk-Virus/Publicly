import React from 'react'

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>User Profile nav: setting, stories, friends</div>
      {children}
    </>
  )
}

export default UserLayout