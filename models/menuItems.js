// jshint esversion: 6, node: true

"use strict";

const mongoose = require('mongoose');
const config = require("../config/database");

const CommentSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  short_name: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price_small: {
    type: String,
    required: true,
  },
  price_large: {
    type: Number,
    required: true,
  },
  small_portion_name: {
    type: String,
    required: true,
  },
  large_portion_name: {
    type: String,
    required: true,
  },
  image_present: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }
  
  
});

const menuCategory = module.exports = mongoose.model('menu_items', CommentSchema);

module.exports.saveMenuItem = function(newMenuItem, callback) { 
  newMenuItem.save(callback);
};

module.exports.getMenuItems = function(categoryName,callback) { 
  menuCategory.find({short_name:new RegExp(eval('/^'+categoryName+'[0-9]*/i'))}).
  sort("id").
  // select("menu_items.id menu_items.short_name menu_items.name menu_items.description menu_items.price_small menu_items.price_large menu_items.small_portion_name menu_items.large_portion_name menu_items.image_present").
  select("id short_name name description price_small price_large small_portion_name large_portion_name image_present").
  exec(callback);
};

module.exports.editMenuItem = function(menuItem, callback) { console.log(menuCategory.findOneAndUpdate({ _id: menuItem._id}, { $set: { id: menuItem.id, description: menuItem.description, image_present: menuItem.image_present, large_portion_name: menuItem.large_portion_name,name:menuItem.name,price_large: menuItem.price_large,price_small:menuItem.price_small,short_name: menuItem.short_name,small_portion_name:menuItem.small_portion_name   }}));
  menuCategory.findOneAndUpdate(
    { _id: menuItem._id}, 
    { $set: 
      { 
        id: menuItem.id,
         description: menuItem.description,
          image_present: menuItem.image_present,
           large_portion_name: menuItem.large_portion_name, 
           name:menuItem.name,  
           price_large: menuItem.price_large, 
           price_small:menuItem.price_small, 
           short_name: menuItem.short_name, 
           small_portion_name:menuItem.small_portion_name   
      }
  }
).exec(callback);
};
// module.exports.editMenuItem = function(menuItem,callback) {
//   menuItem.save(callback);
// };

