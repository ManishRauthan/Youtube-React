import mongoose from "mongoose";

const mychannelschema = new mongoose.Schema({
  id: Number,
  title: String,
  videoUrl: String,
  thumbnailUrl: String,
});

const mychannelModel = mongoose.model("mychannel", mychannelschema);

export default mychannelModel;
