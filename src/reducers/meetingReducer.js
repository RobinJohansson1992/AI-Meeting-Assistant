import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: "",
  summary: "",
  agenda: "",
  invitation: "",
  loading: false,
  error: null,
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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setNotes,
  setSummary,
  setAgenda,
  setInvitation,
  setLoading,
  setError,
} = meetingSlice.actions;

export default meetingSlice.reducer;
