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
  special_instructions: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  }
});

const menuCategory = module.exports = mongoose.model('categories', CommentSchema);

module.exports.saveCategory = function(newCategory, callback) { 
  newCategory.save(callback);
};

module.exports.getMenuCategory = function(result, callback) {
  menuCategory.find().
  sort("id").
  select("id short_name name special_instructions url").
  exec(callback);
};

// module.exports.deleteComment = function(commentId, callback) {
//   Comment.find({ _id: commentId }).remove(callback);
// };
