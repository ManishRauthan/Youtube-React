import useHomepagevideo from "../Utils/useHomepagevideo";
import Header from "./Header";
import { useParams } from "react-router-dom";
import Comment from "./Comments";
import { Link } from "react-router-dom";

function Videopage() {
  const { videos, loading } = useHomepagevideo();
  const params = useParams();

  if (loading) {
    return <p>Loading...</p>;
  }

  const videotobeplayed = videos.find(
    (video) => video.id === Number(params.id)
  );
  // console.log(videotobeplayed);

  const recommendvideos = videos.filter((video) => video !== videotobeplayed);
  console.log(recommendvideos);

  return (
    <div className="bg-[#0f0f0f]">
      <Header />
      <div className=" flex ml-[6.5%] mr-[6.5%] mt-[3%] space-x-[1%]">
        {/* Video Part */}
        <div className=" bg-[#0f0f0f] w-4/5">
          <iframe
            className="w-full  aspect-video rounded-3xl shadow-lg"
            src={videotobeplayed.videoUrl}
            title={videotobeplayed.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="mt-[1%] ml-[1%] mr-[1%] text-white">
            <div>
              <h1 className="text-2xl font-bold">{videotobeplayed.title}</h1>
            </div>
            <div className=" flex justify-between items-center">
              {/* Channel Name */}
              <div className="flex space-x-2 mt-[1%]">
                <img
                  src={videotobeplayed.channeldp}
                  className="rounded-full h-12"
                ></img>
                <div className="flex items-center font-semibold ">
                  <div>
                    <div>{videotobeplayed.channelname}</div>
                    <div className="text-xs">
                      {videotobeplayed.Subscribercount}
                    </div>
                  </div>
                  <button className="bg-white text-black w-25 h-8 rounded-4xl ml-6">
                    Subscribe
                  </button>
                </div>
              </div>
              {/* Yotube Options */}
              <div className="flex space-x-2  font-semibold text-sm">
                <div className="flex space-x-3 w-25 h-8 bg-[#494949]  justify-center items-center rounded-4xl">
                  <div className="flex">
                    <img
                      src="/img/Videopage/Thumbsup.png"
                      className="h-5"
                    ></img>
                    <h2 className="">{videotobeplayed.likes}</h2>
                  </div>

                  <img
                    src="\img\Videopage\Thumbsdown.png"
                    className="h-5"
                  ></img>
                </div>
                <div className="flex space-x-3 w-22 h-8 bg-[#494949]  justify-center items-center rounded-4xl">
                  <div className="flex space-x-1">
                    <img src="/img/Videopage/Share.png" className="h-5"></img>
                    <h2 className="">Share</h2>
                  </div>
                </div>
                <div className="flex space-x-3 w-20 h-8 bg-[#494949]  justify-center items-center rounded-4xl">
                  <div className="flex space-x-1">
                    <img src="/img/Videopage/Clips.png" className="h-5"></img>
                    <h2 className="">Clips</h2>
                  </div>
                </div>
                <div className="flex space-x-3 w-20 h-8 bg-[#494949]  justify-center items-center rounded-4xl">
                  <div className="flex space-x-1">
                    <img src="/img/Videopage/Save.png" className="h-5"></img>
                    <h2 className="">Save</h2>
                  </div>
                </div>
                <div className="flex space-x-3 w-8 h-8 bg-[#494949]  justify-center items-center rounded-4xl">
                  <div>
                    <img src="/img/Videopage/Options.png" className="h-4"></img>
                  </div>
                </div>
              </div>
            </div>
            {/* Channel Discription */}
            <div className="mt-[2%] bg-[#313131] rounded-2xl p-4 text-sm">
              <div className=" flex space-x-4">
                <div>{videotobeplayed.Viewsinnumber}</div>
                <div>{videotobeplayed.Uploaddate}</div>
              </div>
              <div className="mt-[1%]">{videotobeplayed.description}</div>
            </div>
            {/* Comment Sections */}
            <Comment details={videotobeplayed} />
          </div>
        </div>
        {/*Youtube Video Recommendation Part */}
        <div className="flex flex-col bg-[#0f0f0f] w-1/5">
          {recommendvideos.map((recommendvideo) => (
            <div key={recommendvideo._id} className="flex mt-2">
              <img
                src={recommendvideo.thumbnailUrl}
                alt={recommendvideo.title}
                className="w-max h-25 rounded-2xl"
              />

              <div>
                <div className="text-gray-400 ml-2  flex flex-col gap-y-1">
                  <div className="font-semibold text-white">
                    {recommendvideo.title.length > 20
                      ? recommendvideo.title.slice(0, 30) + ".."
                      : recommendvideo.title}
                  </div>
                  <div className="text-xs">{recommendvideo.channelname}</div>
                  <div className="text-xs">{recommendvideo.views}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videopage;
