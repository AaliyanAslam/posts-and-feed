import React from 'react'
import AddFeeds from '../components/AddFeeds'
import ShowFeeds from '../components/showFeeds'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const user = useSelector((state) => state.auth.user);
    console.log(user);
  return (
    <>
    <div className='flex justify-between'>
        <div>Dashbord</div>
        <div>{user?`welcome ${user}` : "welcome"}</div>
    </div>
    <AddFeeds/>
    <ShowFeeds/>
    
    </>
  )
}

export default Dashboard