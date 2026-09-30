import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: "",
  summary: "",
  agenda: "",
  invitation: "",
};

const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
    setAgenda: (state, action) => {
      state.agenda = action.payload;
    },

    setInvitation: (state, action) => {
      state.invitation = action.payload;
    },
  },
});

export const { setNotes, setSummary, setAgenda, setInvitation } =
  meetingSlice.actions;

export default meetingSlice.reducer;
