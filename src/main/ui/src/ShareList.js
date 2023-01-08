import React, { useEffect, useState } from 'react';

export default function ShareList() {
    const[loading, setLoading] = useState(true)
    const[shareList,setShareList] = useState([])
    const[errorMessage, setErrorMessage] = useState("")

    useEffect( () => {
        console.log("shareList changed " + JSON.stringify(shareList))
    }, [shareList])

    useEffect( () => {
        console.log("loading changed " + JSON.stringify(loading))
    }, [loading])

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
        .catch((error) => {
                setErrorMessage("error fetching shares")
                console.log(error)
                setLoading(false)
            }
        )
        .finally(() => setLoading(false))

        return () => {
            controller.abort()
        }
      },[])

      

    return (
    <>
       <div><h1>Ciao</h1>
       {!loading && (<div>Loading...</div>)}
       {errorMessage && (<div className="error"> {errorMessage} </div>)}
       {
        shareList.map(share => (<div key={share.id}>{share.id} {share.shareComment}</div>))
       }
       </div>


    </>
    )

}