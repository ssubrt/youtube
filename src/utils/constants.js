import { API_KEY } from "../../config";

export const OFFSET_LIVE_CHAT = 15;

export const RELATED_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=";

// export const VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&pageToken=CBQQAA&regionCode=IN&key=";

export const YOUTUBE_CHANNEL_INFO_API =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=";

 


export const YOUTUBE_API =
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;
  

export const VIDEO_DATA_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=";
export const YOUTUBE_SEARCH_SUGGESTION_API =
"https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=";

export const COMMENTS_API = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";

export const IMG_URL =
  "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1312.jpg";

export const BASE_IMAGE_URL =
  "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-";


  export const topics = [
    { title: "All" },
    { title: "React" },
    { title: "Javascript" },
    { title: "Web Development" },
    { title: "HTML" },
    { title: "CSS" },
    { title: "React Native" },
    { title: "Big Data" },
    { title: "SQL" },
    { title: "Carry Minati" },
    { title: "BGMI" },
    { title: "Live" },
    { title: "Animals" },
    { title: "Scout" },
    { title: "Mortal" },
    { title: "Adipursush" },
  ];
