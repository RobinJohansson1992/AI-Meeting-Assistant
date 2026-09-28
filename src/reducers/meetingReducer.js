import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: "",
  result: "",
};

const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setResult: (state, action) => {
      state.result = action.payload;
    },
  },
});

export const { setNotes, setResult } = meetingSlice.actions;

export default meetingSlice.reducer;
