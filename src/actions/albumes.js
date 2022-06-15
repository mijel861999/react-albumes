import types from '../types/type'

export const AddAlbum = (album) => ({
  type: types.addAlbum,
  payload: album
})