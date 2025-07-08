function Sidebar() {
  const sections = [
    {
      items: [
        { title: "Home", img: "/img/icons/Home.png" },
        { title: "Shorts", img: "/img/icons/Shorts.png" },
        { title: "Subscriptions", img: "/img/icons/Subscriptions.png" },
      ],
    },
    {
      items: [
        { title: "You", img: "/img/icons/You.png" },
        { title: "History", img: "/img/icons/History.png" },
      ],
    },
    {
      label: "Explore",
      items: [
        { title: "Trending", img: "/img/icons/Trending.png" },
        { title: "Shopping", img: "/img/icons/Shopping.png" },
        { title: "Music", img: "/img/icons/Music.png" },
        { title: "Movies", img: "/img/icons/Movies.png" },
        { title: "Live", img: "/img/icons/Live.png" },
        { title: "Gaming", img: "/img/icons/Gaming.png" },
        { title: "News", img: "/img/icons/News.png" },
        { title: "Sports", img: "/img/icons/Sports.png" },
        { title: "Courses", img: "/img/icons/Courses.png" },
        { title: "Fashion & Beauty", img: "/img/icons/Fashion & Beauty.png" },
        { title: "Podcasts", img: "/img/icons/Podcasts.png" },
      ],
    },
    {
      items: [
        { title: "Settings", img: "/img/icons/Settings.png" },
        { title: "Report History", img: "/img/icons/Report History.png" },
        { title: "Help", img: "/img/icons/Help.png" },
        // { title: "Send Feedback", img: "/img/icons/Send Feedback.png" },
      ],
    },
  ];

  return (
    <div
      className="fixed top-14 left-0 w-[10%] h-screen  bg-[#0f0f0f] text-white text-sm font-medium 
        overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
    >
      {sections.map((section, idx) => (
        <div key={idx} className="border-b border-zinc-700 py-2">
          {section.label && (
            <div className="px-4 pt-2 pb-1 text-white-400 uppercase text-s">
              {section.label}
            </div>
          )}
          {section.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-4 py-2 m-2 rounded-3xl hover:bg-neutral-800 cursor-pointer"
            >
              <img src={item.img} className="h-5" />
              <div className="text-white text-s font-medium">{item.title}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
