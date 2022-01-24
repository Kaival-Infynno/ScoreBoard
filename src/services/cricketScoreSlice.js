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
// By me

// https://cricket.sportmonks.com/api/v2.0/fixtures
const cricketScoreSlice = createSlice({
  name: "cricketScore",
  initialState: {
    score:[]
  },  
  extraReducers: {
    [getLiveScore.pending]: (state, action) => {},
    [getLiveScore.fulfilled]: (state, { payload }) => {
     
      state.score = payload.data
     
    },
    [getLiveScore.rejected]: (state, action) => {},
  },
  reducers: {
    // setlocalteam: (state, { payload }) => {
    //   state.localteam_dl_data = payload;
    // },
    // setvisitorteam_dl_data: (state, { payload }) => {
    //   state.visitorteam_dl_data = payload;
    // },
    // settotal_overs_played: (state, { payload }) => {
    //   state.total_overs_played = payload;
    // },
    // setlive: (state, { payload }) => {
    //   state.live = payload;
    // },
  },
});

export const {} = cricketScoreSlice.actions;
export default cricketScoreSlice.reducer;
