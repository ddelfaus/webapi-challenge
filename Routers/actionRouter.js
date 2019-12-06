const express = require('express');

const projectsDb = require("../data/helpers/projectModel")
const actionsDb = require("../data/helpers/actionModel")



const router = express.Router();


router.use(express.json())


// get request

router.get('/', (req, res) => {
 
    actionsDb.get()
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







module.exports = router;