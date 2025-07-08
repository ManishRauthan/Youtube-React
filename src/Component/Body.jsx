import Homepage from "./Homepage";
import Sidebar from "./Sidebar";
import Sidebar2 from "./Sidebar2";
import { useState } from "react";

function Body() {
  // const [hmm, setHmm] = useState(true);
  return (
    // <div className="flex">
    //   <div className={`${hmm == true ? "w-1/10" : "w-1/20"}`}>
    //     <Sidebar />
    //     {/* <Sidebar2 /> */}
    //   </div>
    //   <div className={`${hmm == true ? "w-9/10" : "w-19/20"}`}>
    //     <Homepage />
    //   </div>
    // </div>
    <>
      <Homepage />
    </>
  );
}

export default Body;
