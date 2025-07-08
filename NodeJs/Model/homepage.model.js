import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
});

const homepageschema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  videoUrl: String,
  thumbnailUrl: String,
  channelname: String,
  channeldp: String,
  views: String,
  likes: String,
  category: String,
  Subscribercount: String,
  Viewsinnumber: String,
  Uploaddate: String,
  comments: [commentSchema],
});

const homepageModel = mongoose.model("homepage", homepageschema);

export default homepageModel;
