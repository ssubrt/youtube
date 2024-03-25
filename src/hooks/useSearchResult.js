import { useEffect, useState } from "react";
import {    YOUTUBE_SEARCH_API } from "../utils/constants";
import { convertToSearchQuery } from "../utils/helperFunction";

  


const useSearchResults = (searchQuery) => {
  const [videos,setVideos] = useState([]);
  
  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);

  const getSearchResults = async () => {
    const query = convertToSearchQuery(searchQuery);
    const data = await fetch(
      YOUTUBE_SEARCH_API +
        query +
        "&regionCode=IN&type=video&key="
        +"AIzaSyCNUD1YeGurGXdowiptR1Bl7CGeggdaVfs"
    );
    const json = await data.json();
    setVideos(json?.items);
  };

  return videos;
};

export default useSearchResults;
