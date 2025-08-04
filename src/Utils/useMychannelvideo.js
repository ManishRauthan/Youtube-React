import { useEffect, useState } from "react";

function useMychannelvideo() {
  const [videos, setvideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://youtube-api-6auv.onrender.com/api/mychannel/videos")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setvideos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);
  return { videos, loading };
}

export default useMychannelvideo;
