import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getLiveScore = createAsyncThunk(
  "cricketScore/getLiveScore",
  async (data) => {
    let api_token =
      "jY6CqnGY7ncbaltI2roDwYbHHctUxinrl7rpJDvNdAWCRQrs3rHA7xSp6sY9";

    return await axios.get(
      `https://cricket.sportmonks.com/api/v2.0/fixtures?api_token=${api_token}&include=localteam,visitorteam`
    );
  }
);

const cricketScoreSlice = createSlice({
  name: "cricketScore",
  initialState: {
    score: [],
  },
  extraReducers: {
    [getLiveScore.pending]: (state, action) => {},
    [getLiveScore.fulfilled]: (state, { payload }) => {
      state.score = payload.data;
    },
    [getLiveScore.rejected]: (state, action) => {},
  },
  reducers: {},
});

export const {} = cricketScoreSlice.actions;
export default cricketScoreSlice.reducer;
