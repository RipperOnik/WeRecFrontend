import { configureStore } from '@reduxjs/toolkit'
import {currentNavbarItemReducer, currentTabItemReducer, currentDetailedPageReducer} from "./reducerActions"

export const store = configureStore({
  reducer: {
    currentNavbarItem: currentNavbarItemReducer,
    currentTabItem: currentTabItemReducer,
    currentDetailedPage: currentDetailedPageReducer,
    // currentFeed: currentFeedReducer
}})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch