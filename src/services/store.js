import { configureStore } from "@reduxjs/toolkit";
import cricketScoreSlice from "./cricketScoreSlice";
import newSlice from "./newSlice";
export default configureStore({
  reducer: {
    cricketScore: cricketScoreSlice,
    cricketData: newSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
