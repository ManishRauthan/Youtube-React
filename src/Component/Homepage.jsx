import { useState, useEffect } from "react";
import useHomepagevideo from "../Utils/useHomepagevideo";
import Header from "./Header";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";

function Homepage() {
  const { videos, loading } = useHomepagevideo();
  const [filterhomepage, setFilterhomepage] = useState([]);
  const [hmm, setHmm] = useState(false);

  // this to give all the video data to setFilterhomepage
  useEffect(() => {
    setFilterhomepage(videos);
  }, [videos]);

  // THis is to render videos on the reference to input text in header.jsx
  function handleSearch(searchText) {
    const filtered = videos.filter((video) =>
      video.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterhomepage(filtered);
  }

  // Filtering on the bases on what is clicked on the Filter.jsx file
  // (I have also added a condition to render all the videos by using All option in Filter.jsx)
  function valueclicked(filteredCategory) {
    if (filteredCategory === "All") {
      setFilterhomepage(videos);
    } else {
      const filtered = videos.filter(
        (video) =>
          video.category?.toLowerCase() === filteredCategory.toLowerCase()
      );
      setFilterhomepage(filtered);
    }
  }

  // This is for changing the size of sizebar
  function changevalue(data) {
    // console.log("this is from hompage", data);
    setHmm(data);
  }

  return (
    <>
      <Header onSearch={handleSearch} valueChange={changevalue} />
      <div className="flex">
        <div className={`${hmm == true ? "w-1/10" : "w-1/20"}`}>
          {/* <Sidebar /> */}
          {/* <Sidebar2 /> */}
          {hmm == true ? <Sidebar /> : <Sidebar2 />}
        </div>
        <div
          className={`${
            hmm == true ? "w-9/10" : "w-19/20"
          } pt-14  bg-[#0f0f0f] pl-1 min-h-screen`}
        >
          <Filter func={valueclicked} />
          <div className="flex flex-wrap">
            {filterhomepage.map((video) => (
              <div key={video._id} className="w-1/4 mt-2">
                {/* Adding Dynamic Route */}
                <Link to={`/videopage/${video.id}`}>
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-105 rounded-2xl"
                  />
                </Link>
                <div className="flex gap-2 p-1">
                  <img src={video.channeldp} className="rounded-full h-8" />
                  <div className="text-gray-200">
                    <div className="font-semibold text-white">
                      {video.title.length > 50
                        ? video.title.slice(0, 43) + "...."
                        : video.title}
                    </div>
                    <div className="text-xs">{video.channelname}</div>
                    <div className="text-xs">{video.views}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
