import homepageModel from "../Model/homepage.model.js";

export async function addCommentToVideo(req, res) {
  try {
    const { videoId } = req.params;
    const { name, comment } = req.body;

    const video = await homepageModel.findOne({ id: Number(videoId) });

    if (!video) return res.status(404).json({ message: "Video not found" });

    video.comments.push({ name, comment });
    await video.save();

    res.status(200).json(video.comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function editCommentOnVideo(req, res) {
  try {
    const { videoId, commentIndex } = req.params;
    const { name, comment } = req.body;

    const video = await homepageModel.findOne({ id: Number(videoId) });

    if (!video || !video.comments[commentIndex]) {
      return res.status(404).json({ message: "Comment not found" });
    }

    video.comments[commentIndex] = { name, comment };
    await video.save();

    res.status(200).json(video.comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function deleteCommentFromVideo(req, res) {
  try {
    const { videoId, commentIndex } = req.params;

    const video = await homepageModel.findOne({ id: Number(videoId) });

    if (!video || !video.comments[commentIndex]) {
      return res.status(404).json({ message: "Comment not found" });
    }

    video.comments.splice(commentIndex, 1);
    await video.save();

    res.status(200).json(video.comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
