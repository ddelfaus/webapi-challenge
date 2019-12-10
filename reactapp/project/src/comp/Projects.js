import React, {useState, useEffect} from "react"
import axios from "axios"
import Project from "./Project"




function Projects() {


    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://scdavwebapi.herokuapp.com/api/projects`)
        .then(res => {
            console.log(res, "apistuff")
            setProjectList(res.data)
           
            
        })
        .catch(err => {
            console.log("There was an error, ", err)
        })
    },[])




    return (
        <>
        {projectList.map(item => (
                <Project key={item.id} projectData ={item}/>
            ))}
        </>
    )
}

export default Projects