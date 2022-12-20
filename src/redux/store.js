import {configureStore} from "@reduxjs/toolkit";
import AuthorizationSlice from "./authorization/slice";
import BlogSlice from "./blog/slice";
import TeamSlice from "./team/slice";
import NewsSlice from "./news/slice"
import CareerSlice from './career/slice'

export const store = configureStore({
    reducer: {
      authorization: AuthorizationSlice.reducer, 
      blog: BlogSlice.reducer,
      team: TeamSlice.reducer, 
      news: NewsSlice.reducer,
      career: CareerSlice.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: process.env.REACT_APP_ENV !== 'dev',
});
