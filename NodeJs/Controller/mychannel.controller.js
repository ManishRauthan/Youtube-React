import mychannelModel from "../Model/mychannel.model.js";

export function createvideo(req, res) {
  const payload = req.body;

  if (Array.isArray(payload)) {
    mychannelModel
      .insertMany(payload)
      .then((videos) => res.status(201).json(videos))
      .catch((err) => res.status(500).json({ message: err.message }));
  } else {
    const newvideo = new mychannelModel(payload);
    newvideo
      .save()
      .then((savedVideo) => res.status(201).json(savedVideo))
      .catch((err) => res.status(500).json({ message: err.message }));
  }
}

export function fetchvideo(req, res) {
  mychannelModel
    .find()
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Data Not Found" });
      }
      res.json(data);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}

export function deleteVideo(req, res) {
  const { videoId } = req.params;

  mychannelModel
    .findOneAndDelete({ id: Number(videoId) })
    .then((deleted) => {
      if (!deleted) {
        return res.status(404).json({ message: "Video not found" });
      }
      res.json({ message: "Video deleted successfully", deleted });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}
