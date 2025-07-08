import { useEffect, useState } from "react";

function useHomepagevideo() {
  const [videos, setvideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5100/api/videos")
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

export default useHomepagevideo;
