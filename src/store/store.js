import { configureStore } from "@reduxjs/toolkit";
import meetingReducer from "../reducers/meetingReducer";

const store = configureStore({
  reducer: {
    meeting: meetingReducer,
  },
});

export default store;
