import {
  createvideo,
  fetchvideo,
  deleteVideo,
} from "../Controller/mychannel.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export function mychannelRoutes(app) {
  app.post("/api/mychannel/newvideo", createvideo);
  app.get("/api/mychannel/videos", fetchvideo);
  app.delete("/api/mychannel/videos/:videoId", deleteVideo);
}
