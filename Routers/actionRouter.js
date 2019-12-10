const express = require('express');

const projectsDb = require("../data/helpers/projectModel")
const actionsDb = require("../data/helpers/actionModel")



const router = express.Router();


router.use(express.json())


// get request

router.get('/', (req, res) => {
 
    actionsDb.get()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
    
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the action"
      });
    });
  });


  router.get('/:id', (req, res) => {
    const id = req.params.id
    actionsDb
    .get(id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
    
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the action"
      });
    });
  });

// post request


  router.post('/', validateAction, (req, res) => {
 
    const action = req.body
  
    actionsDb
    .insert(action)
    .then(item => {
        res.status(201).json(item)
      })
      .catch(error => {

        console.log(error);
        res.status(500).json({
          message: "Error adding the action"
        });
    });
  });


  // put request

  router.put('/:id', validateAction, validateActionId, (req, res) => {

    const changes = req.body
    const id = req.params.id
    
    actionsDb
      .update(id,changes)
      .then(edit => {
          if (edit) {
              res.status(201).json({...changes, id: id});
          }
          res.status(404).json({ error: "action not found" })
        })
        .catch(error => {
       
          console.log(error);
          res.status(500).json({
            message: "Error updating the action"
          });
        });
  });


  router.delete('/:id',validateActionId, (req, res) => {

    const id = req.params.id
  
    actionsDb.remove(id)
      .then(count => {
          if (count > 0) {
              res.status(200).json({ message: "The action has been deleted" })  
          }
          res.status(404).json({ message: "action not found" });
      })
      .catch(error => {
          res.status(500).json({
              message: "Error removing the action"
          })
      })
  });
  


  //custom middleware


function validateAction(req, res, next) {
    if(!req.body) {
        res.status(400).json({ message: "missing the post data"});
    }
    if (!req.body.project_id) {
        res.status(400).json({ message: "missing the  project_id field" });
    } 
    if(!req.body.description){
        res.status(400).json({ message: "missing the  description field" });
    } 
    if(!req.body.notes){
        res.status(400).json({ message: "missing the  notes field" });
    } 
    else {
        next();
    }
}
function validateActionId(req, res, next) {
    const id = Number(req.params.id || 0);
    if(id){
        req.action = id
        next();
    } else {
    res.status(400).json({ message: "Invalid action ID" })
    }
}



module.exports = router;