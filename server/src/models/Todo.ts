const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  id: String,
  content: String,
  done: Boolean,
});

const TodoModel = mongoose.model("Todo", TodoSchema);
export default TodoModel;
