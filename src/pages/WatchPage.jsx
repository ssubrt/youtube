import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setIsHomepage } from "../utils/appSlice";
import WatchVideo from "../components/WatchVideo";
import useVideoData from "../hooks/useVideoData";
import CommentSection from "../components/CommentSection";
import LiveChat from "../components/LiveChat";
import RelatedVideo from "../components/RelatedVideo";




const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");
  const videoInfo = useVideoData(videoId);

   

  useEffect(() => {
    dispatch(setIsHomepage(false));

    return () => dispatch(setIsHomepage(true));
  }, []);

  if (!videoInfo) return;
  return (
    // <div className={`relative lg:py-1 mx-4 flex flex-row justify-center`}>
    //   <div className="max-w-7xl w-full flex flex-row gap-4 flex-wrap">
    //     <WatchVideo videoInfo={videoInfo} />
    //     <CommentSection videoId={videoId} />
    //     <RelatedVideo videoInfo={videoInfo} />
    //       <LiveChat />
       
    //   </div>
    <div className={`relative lg:py-1 mx-4 flex flex-col lg:flex-row md:flex-row-reverse`}>
  <div className="lg:w-3/4 flex flex-col">
    <WatchVideo videoInfo={videoInfo} />
    <CommentSection videoId={videoId} />
  </div>
  <div className="lg:w-1/2 flex flex-col gap-2 m-3">
    <RelatedVideo videoInfo={videoInfo} />
    
    <LiveChat />
  </div>
</div>
        
    // </div>
    // <div className={`relative lg:py-1 mx-4 flex flex-row justify-center`}>
    // <div className="max-w-7xl w-full flex flex-row gap-4 mr-4 flex-wrap">
    // <RelatedVideo videoInfo={videoInfo} />
    //   <WatchVideo videoInfo={videoInfo} />

    // </div>

    // <div className="flex flex-col gap-4 flex-wrap">
    //   <CommentSection videoId={videoId} />
    //   <LiveChat/>

    //   </div>
    // </div>
  );
};

export default WatchPage;
