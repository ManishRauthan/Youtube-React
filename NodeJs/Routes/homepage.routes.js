import { createvideo, fetchvideo } from "../Controller/homepage.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

export function homepageRoutes(app) {
  app.post("/api/newvideo", createvideo);
  app.get("/api/videos", fetchvideo);
}
