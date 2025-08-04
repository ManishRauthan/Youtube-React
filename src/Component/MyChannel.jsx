import { useState } from "react";
import Header from "./Header";
import useMychannelvideo from "../Utils/useMychannelvideo";

function MyChannel() {
  const { videos, loading } = useMychannelvideo();

  // UseState to display form
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    id: Math.floor(Math.random() * 10000),
    title: "",
    videoUrl: "",
    thumbnailUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddVideo = () => {
    if (!formData.title || !formData.videoUrl || !formData.thumbnailUrl) {
      alert("Please fill all fields");
      return;
    }

    fetch("https://youtube-api-6auv.onrender.com/api/mychannel/newvideo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Video added successfully 🎉");
        setShowForm(false);
      })
      .catch((err) => console.error("Upload error", err));
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;

    fetch(`https://youtube-api-6auv.onrender.com/api/mychannel/videos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Video deleted!");
      })
      .catch((err) => console.error("Delete error", err));
  };

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white">
      <Header />
      <div className="mt-14 pl-[8%] pr-[8%]">
        <img src="/img/Banner.jpg" className="h-130 w-screen rounded-b-2xl" />
        <div className="mt-[1%] flex justify-between">
          <div className="flex">
            <img src="/img/userprofile.png" className="h-50" />
            <div className="flex flex-col justify-center space-y-1 pl-2 font-semibold text-3xl">
              <div>Manish Rauthan</div>
              <div className="text-xl">manishrauthan</div>
              <div className="text-xl">Welcome to your YouTube channel</div>
            </div>
          </div>
          <button
            className="bg-white h-15 w-40 rounded-4xl text-black"
            onClick={() => setShowForm(true)}
          >
            Add Video
          </button>
        </div>

        {/* Form to sbmit details */}
        {showForm && (
          <div className="fixed inset-0   flex justify-center items-center ">
            <div className="bg-white text-black p-6 rounded-xl w-[90%] md:w-[50%] space-y-3">
              <h2 className="text-xl font-bold">Upload New Video</h2>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Video Title"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="videoUrl"
                value={formData.videoUrl}
                onChange={handleChange}
                placeholder="YouTube Embed URL"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="text"
                name="thumbnailUrl"
                value={formData.thumbnailUrl}
                onChange={handleChange}
                placeholder="Thumbnail URL"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddVideo}
                  className="bg-black text-white px-4 py-2 rounded font-semibold"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Video List */}
        <div className="flex flex-wrap mt-[2%] gap-10">
          {videos.map((video) => (
            <div key={video._id} className="w-1/4 bg-[#1f1f1f] p-3 rounded-xl">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="rounded-xl"
              />
              <div className="mt-2">
                <div className="text-white font-semibold text-sm">
                  {video.title.length > 50
                    ? video.title.slice(0, 43) + "...."
                    : video.title}
                </div>
                <button
                  onClick={() => handleDelete(video.id)}
                  className="mt-2 text-sm bg-red-600 px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyChannel;
