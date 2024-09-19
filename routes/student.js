const express = require('express');
const Studentcontroller = require('../controllers/studentcontroller')
const router = express.Router();
router.use(express.json())
router.post('/add/student',(req,res)=>{
Studentcontroller.addStudent(req,res)
})
router.get('/students',(req,res)=>{
    Studentcontroller.getStudent(req,res)
})
module.exports = router