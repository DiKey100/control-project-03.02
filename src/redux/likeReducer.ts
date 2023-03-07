import { createSlice } from "@reduxjs/toolkit";
import { omit } from "lodash";

type LikeProducts = {
    [id: number]: boolean
}

export const initialState:LikeProducts = {
    1: true,
    2: true,
}

export const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        toggleLike: (prevState, action) => ({
            ...prevState,
            [action.payload]: !prevState[action.payload]
        }),
        deleteLike: (prevState, action) => omit(prevState, [action.payload])
    },
})

export const { toggleLike, deleteLike } = likeSlice.actions

export default likeSlice.reducer