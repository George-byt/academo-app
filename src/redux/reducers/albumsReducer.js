import { albumTypes } from "../types/types";

export const albumsReducers = (state = { albums: [] }, action) => {
  switch (action.type) {
    case albumTypes.LIST:
      return {
        albums: [...action.payload]
      }
    default:
      return state
  }
}

