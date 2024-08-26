// import React, { useEffect, useState } from 'react'
import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/amrendrayd`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="" width={300}/>
    </div>
  )
}

export default Github;

