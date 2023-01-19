"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var TodoSchema = new Schema({
    id: String,
    content: String,
    done: Boolean
});
var TodoModel = mongoose.model("Todo", TodoSchema);
exports["default"] = TodoModel;
