import React from 'react'

const User = async ({params} : {params : {userId: string}}) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('data')
    }, 3000)
  })
  await promise;
  throw new Error("Failed to fetch data");
  
  return (
    <div>UserId: {params.userId} </div>
  )
}

export default User