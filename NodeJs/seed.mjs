import mongoose from "mongoose";
import dotenv from "dotenv";
import homepageModel from "./Model/homepage.model.js";
import mychannelModel from "./Model/mychannel.model.js";
import homepageData from "./data/homepageData.js";
import mychannelData from "./data/mychannelData.js";

dotenv.config(); // ✅ Load .env

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ Mongo connection error:", err));

async function seedDatabase() {
  try {
    await homepageModel.deleteMany({});
    await mychannelModel.deleteMany({});

    await homepageModel.insertMany(homepageData);
    await mychannelModel.insertMany(mychannelData);

    console.log("✅ Data seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Seeding error:", error);
  }
}

seedDatabase();
