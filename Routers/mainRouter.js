const express = require('express');

const projectsDb = require("../data/helpers/projectModel")


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





  module.exports = router;