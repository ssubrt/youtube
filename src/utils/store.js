import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";
import chatSlice from "./chatSlice";


const store = configureStore({
    reducer : {
        app : appSlice,
        search : searchSlice,
        video : videosSlice,
        liveChat: chatSlice,
    }
})

export default store;