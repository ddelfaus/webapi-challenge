import React, {useState, useEffect} from "react"
import axios from "axios"




function ActionList () {


    const [Actions, setActions] = useState([]);

    useEffect(() => {
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://scdavwebapi.herokuapp.com/api/projects`)
        .then(res => {
            console.log(res, "apistuff")
            setActions(res.data)
           
            
        })
        .catch(err => {
            console.log("There was an error, ", err)
        })
    },[])

    return (
        <>
      
        </>
    )
}


export default ActionList