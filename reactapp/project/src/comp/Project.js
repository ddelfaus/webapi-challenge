import React from 'react'

const Project = props => {

    console.log(props, "props")
    
        return (
            <>
            <h2>{props.projectData.name}</h2>
            
            </>
        )
    }
    
    
    export default Project