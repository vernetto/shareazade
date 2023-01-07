import React, { useEffect, useState } from 'react';

export default function ShareList() {
    const[loading, setLoading] = useState(true)
    const[shareList,setShareList] = useState([])
    const[error, setError] = useState()

    useEffect( () => {
        console.log("shareList changed " + JSON.stringify(shareList))
    }, [shareList])

     useEffect(()=>{
        const controller = new AbortController()
        fetch("http://localhost:8080/share/getAll", {signal : controller.signal})
        .then(res=>res.json())
        .then((result)=>{
            setShareList(result);
            console.log("setting " + result.length + "  elements, " + JSON.stringify(result))
            console.log(result)
           }
        )
        .catch(setError)
        .finally(() => setLoading(false))

        return () => {
            controller.abort()
        }
      },[])

      

    return (
    <>
       <h1>Ciao</h1>
       {
        shareList.map(share => (<div key={share.id}>{share.id} {share.shareComment}</div>))
       }

    </>
    )

}