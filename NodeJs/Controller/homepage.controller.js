import homepageModel from "../Model/homepage.model.js";

export function createvideo(req, res) {
  const payload = req.body;

  if (Array.isArray(payload)) {
    homepageModel
      .insertMany(payload)
      .then((videos) => res.status(201).json(videos))
      .catch((err) => res.status(500).json({ message: err.message }));
  } else {
    const newvideo = new homepageModel(payload);
    newvideo
      .save()
      .then((savedVideo) => res.status(201).json(savedVideo))
      .catch((err) => res.status(500).json({ message: err.message }));
  }
}

export function fetchvideo(req, res) {
  homepageModel
    .find()
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Data Not Found" });
      }
      res.json(data);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
}
