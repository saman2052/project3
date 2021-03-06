const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  event: { type: String, required: true },
  organizer: { type: String, required: true},
  description: {type: String, required: true },
  date: { type: Date, default: Date.now },
  location: {type: String, required: true},
  destination: {type: String, required: true},
  startTime: {type: String, required: true},
  endTime: {type: String, required: true},
  addsAttendee: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
