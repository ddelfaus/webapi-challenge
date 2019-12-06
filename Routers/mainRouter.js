const express = require('express');

const projectsDb = require("../data/helpers/projectModel")
const actionsDb = require("../data/helpers/actionModel")


const router = express.Router();


router.use(express.json())


//get request


router.get('/', (req, res) => {
 
    projectsDb.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
    
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the users"
      });
    });
  });




  router.get("/:id/actions2", (req, res) => {
    const id = req.params.id
    projectsDb
    .getProjectActions(id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
    
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the users"
      });
    });
  });





  router.get('/:id', (req, res) => {
    const id = req.params.id
    projectsDb
    .get(id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
    
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the users"
      });
    });
  });

  router.get('/:id/actions', (req, res) => {
    const id = req.params.id
    actionsDb
    .get(id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
    
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the users"
      });
    });
  });

// post request


router.post('/', validateProject, (req, res) => {
 
    const project = req.body
  
    projectsDb
    .insert(project)
    .then(item => {
        res.status(201).json(item)
      })
      .catch(error => {

        console.log(error);
        res.status(500).json({
          message: "Error adding the project"
        });
    });
  });

  // put request

  router.put('/:id', validateProject,validateProjectId, (req, res) => {

    const changes = req.body
    const id = req.params.id
    
    projectsDb
      .update(id,changes)
      .then(edit => {
          if (edit) {
              res.status(201).json({...changes, id: id});
          }
          res.status(404).json({ error: "project not found" })
        })
        .catch(error => {
       
          console.log(error);
          res.status(500).json({
            message: "Error updating the project"
          });
        });
  });

// delete request

router.delete('/:id',validateProjectId, (req, res) => {

    const id = req.params.id
  
    projectsDb.remove(id)
      .then(count => {
          if (count > 0) {
              res.status(200).json({ message: "The project has been deleted" })  
          }
          res.status(404).json({ message: "project not found" });
      })
      .catch(error => {
          res.status(500).json({
              message: "Error removing the project"
          })
      })
  });
  
// custom middleware

function validateProject(req, res, next) {
    if(!req.body) {
        res.status(400).json({ message: "missing the post data"});
    }
    if (!req.body.name) {
        res.status(400).json({ message: "missing name field" });
    } 
    if(!req.body.description){
        res.status(400).json({ message: "missing description field " });
    } 

    else {
        next();
    }
}
function validateProjectId(req, res, next) {
    const id = Number(req.params.id || 0);
    if(id){
        req.project = id
        next();
    } else {
    res.status(400).json({ message: "Invalid ID" })
    }
}



  module.exports = router;