//jshint esversion:6, node: true

"use strict";

const express = require('express');
const router = express.Router();
const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const User = require('../models/user');
const config = require('../config/database');
var menuItems = require('../models/menuItems');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/menuItems',(req, res, next) => { 
  var categoryName = req.body.category ;  
  
  menuItems.getMenuItems(categoryName,(err,data) => { 
    res.send(data); 
  });
  
});

router.post('/menuEdit',(req, res, next) => { 
  var menuItem = req.body ;  
  
  menuItems.editMenuItem(menuItem,(err,data) => { 
    res.send(data); 
  });
  
});

router.post('/addmenuitem',(req,res,next) =>{  //console.log(req.body);
  const newMenuItem = new menuItems({
    id: req.body.id,
    short_name: req.body.short_name,
    name: req.body.name,
    description: req.body.description,
    price_large: req.body.price_large,
    price_small: req.body.price_small,
    small_portion_name: req.body.small_portion_name,
    large_portion_name: req.body.large_portion_name,
    image_present: req.body.image_present,
    image: req.body.image
  }); 
  // menuCategory.saveCategory(newCategory);
  menuItems.saveMenuItem(newMenuItem,(err) => {
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
