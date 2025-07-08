function Sidebar2() {
  const sections = [
    {
      items: [
        { title: "Home", img: "/img/icons/Home.png" },
        { title: "Shorts", img: "/img/icons/Shorts.png" },
        { title: "Subscriptions", img: "/img/icons/Subscriptions.png" },
      ],
    },
    {
      items: [{ title: "You", img: "/img/icons/You.png" }],
    },
    {
      items: [
        { title: "Settings", img: "/img/icons/Settings.png" },
        { title: "Report History", img: "/img/icons/Report History.png" },
        { title: "Help", img: "/img/icons/Help.png" },
      ],
    },
  ];

  return (
    <div
      className="fixed top-14 left-0 w-[5%] h-screen  bg-[#0f0f0f] text-white text-sm font-medium 
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
              {/* <div className="text-white text-s font-medium">{item.title}</div> */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Sidebar2;
