//jshint esversion:6, node: true

"use strict";

const express = require('express');
const router = express.Router();
const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
const config = require('../config/database');
var menuCategory = require('../models/menuCategory');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/menuCategory',(req, res, next) => { 
	var categoryName = req.body.category ;
  menuCategory.getMenuCategory('',(err,data) => { 
    res.send(data);
  });
  //res.send('hello world')
});

router.post('/menuCategory/addCategory',(req,res,next) =>{
	const newCategory = new menuCategory({
		id: req.body.id,
		short_name: req.body.short_name,
		name: req.body.name,
		special_instructions: req.body.special_instructions,
		url: req.body.url,
	}); 
	// menuCategory.saveCategory(newCategory);
	menuCategory.saveCategory(newCategory,(err) => {
		if (err) {
	      console.log(err);
	      res.json({
	        success: false,
	        msg: 'Something went wrong please try again.',
	      });
	    } else {
		      res.json({
		        success: true,
		        msg: 'Blog posted successfully.',
		      });
	    }
	});
});

module.exports = router;





