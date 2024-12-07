import React, { useDebugValue, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     async function follow() {
    //         try{
    //             const response = await fetch('https://api.github.com/users/Sudais626')
    //             if(!response.ok){
    //                 throw new Error(`Error ${response.status} : ${response.statusText}`)
    //             }
    //             const data = await response.json()
    //             console.log(data)
    //             setData(data)
    //         }
    //         catch(err){
    //             console.error("Error fetching data please try again later : ", Error)
    //         }
    //     }
    //    follow()
       
    // }, [])

    return(
        <div className="text-center text-3xl bg-gray-600 text-white p-4">Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    )
}
export default Github

export  const githubInfo = async () => {
    try{
        const response = await fetch('https://api.github.com/users/Sudais626')
        if(!response.ok){
            throw new Error(`Error ${response.status} : ${response.statusText}`)
        }
        return response.json()
    }
    catch(err){
        console.error("Error:", Error)
    }
   
}
