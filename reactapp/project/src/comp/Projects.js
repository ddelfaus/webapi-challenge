import React, {useState, useEffect} from "react"
import axios from "axios"
// import DataCard from "../comps/dataCard"




function Projects() {


    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
        .get(`localhost:4000/api/projects/`)
        .then(res => {
            console.log(res, "apistuff")
            setProjects(res.data)
           
            
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

export default Projects