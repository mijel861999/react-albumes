import types from '../types/type'

export const AddAlbum = (album) => ({
  type: types.addAlbum,
  payload: album
})

export const EditAlbum = () => ({

})

export const SetActiveAlbum = (album) => ({
  type: types.setActiveAlbum,
  payload: album
})

export const SetCleanActiveAlbum = () => ({
  type: types.setCleanActiveAlbum
})