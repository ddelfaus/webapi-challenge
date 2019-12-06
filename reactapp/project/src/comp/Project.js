import React from 'react'
import { Route } from "react-router-dom";
import ActionList from "./ActionList"

const Project = props => {

    console.log(props, "props")
    
        return (
            <>
            <h2>{props.projectData.name}</h2>
            <p>{props.projectData.description}</p>
            <Route
            path="/actions/:id"
            render={props => {
            return <ActionList/>;
        }} 
      />
                        
            </>
        )
    }
    
    
    export default Project