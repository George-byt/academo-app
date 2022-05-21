import { albumTypes } from "../types/types";

export const fetchAlbums = () => {
  return async (dispatch) => {
    const response = await fetch('https://my-json-server.typicode.com/George-byt/album-api/album')
    const data = await response.json()
    console.log(data)
    dispatch(fetchAlbum(data))
  }
};

export const fetchAlbum = (albums) => {
  return {
    type: albumTypes.LIST,
    payload: albums
  }
}
