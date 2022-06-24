import idGenerator from '../helpers/idGenerator'
import types from '../types/type'

export const StartAddAlbum = (album) => {
  return (dispatch) => {
    dispatch(AddAlbum({
      ...album,
      id: idGenerator()
    }))
  }
}

const AddAlbum = (album) => ({
  type: types.addAlbum,
  payload: album
})

export const EditAlbum = (newAlbumData) => ({
  type: types.editAlbum,
  payload: newAlbumData
})

export const SetActiveAlbum = (album) => ({
  type: types.setActiveAlbum,
  payload: album
})

export const SetCleanActiveAlbum = () => ({
  type: types.setCleanActiveAlbum
})

export const AddAlbumToList = (album, list) => ({
  type: types.AddAlbumToList,
  payload: {album, list}
})

export const AddAlbumToActiveList = (album) => ({
  type: types.AddAlbumToActiveList,
  payload: album
})

export const SetActiveList = (list) => ({
  type: types.ActiveList,
  payload: list
})

export const SetCleanActiveList = () => ({
  type: types.setCleanActiveList
})
