import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getLiveData = createAsyncThunk(
  "cricketData/getLiveData",
  async (data) => {
      console.log(data);
    let api_token =
      "jY6CqnGY7ncbaltI2roDwYbHHctUxinrl7rpJDvNdAWCRQrs3rHA7xSp6sY9";

    return await axios.get( 
      `https://cricket.sportmonks.com/api/v2.0/fixtures/${data.id}?api_token=${api_token}&include=localteam,visitorteam,bowling.team,batting.team,runs.team,bowling.bowler,batting.batsman`
    );
  
  }
);


const newSlice = createSlice({
    name:"cricketData",
    initialState:{
        liveData:[]
    },
    extraReducers:{
    [getLiveData.pending]:(state,action)=>{},
    [getLiveData.fulfilled]:(state,{payload})=>{
        state.liveData = payload.data
    },
    [getLiveData.rejected]:(state,action)=>{},
    },

    reducers:{

    },
});

export const {} =newSlice.actions;
export default newSlice.reducer;


