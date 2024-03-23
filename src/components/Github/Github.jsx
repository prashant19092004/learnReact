import React, { useEffect, useState } from 'react'

const Github = () => {

    const [user, setUser] = useState([]);

    function fetchingData(){
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then( responce => responce.json())
        .then( data => {
            console.log(data);
            setUser(data)
        })
    }

    useEffect(() => fetchingData, []);

  return (
    <div className='p-5 text-center bg-gray-600'>
        Followers : {user.followers}
    </div>
  )
}

export default Github