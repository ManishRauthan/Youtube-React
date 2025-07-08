import {
  addCommentToVideo,
  editCommentOnVideo,
  deleteCommentFromVideo,
} from "../Controller/comment.controller.js";

export function commentRoutes(app) {
  app.post("/api/comment/:videoId", addCommentToVideo);
  app.put("/api/comment/:videoId/:commentIndex", editCommentOnVideo);
  app.delete("/api/comment/:videoId/:commentIndex", deleteCommentFromVideo);
}
