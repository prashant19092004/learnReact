import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {userid} = useParams();
  return (
    <div className='w-full p-3 bg-gray-700 text-center'>
        User : {userid}
    </div>
  )
}

export default User