import idGenerator from '../helpers/idGenerator'
import types from '../types/type'

// Add an album
export const StartAddAlbum = (album) => {
  return (dispatch) => {
    dispatch(AddAlbum({
      id: idGenerator(),
      ...album
    }))
  }
}

const AddAlbum = (album) => ({
  type: types.addAlbum,
  payload: album
})

// Edit an album
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

export const AddAlbumToList = (id, list) => ({
  type: types.addAlbumToList,
  payload: {id, list}
})

export const AddAlbumToActiveList = (id) => ({
  type: types.addAlbumToActiveList,
  payload: id
})

export const SetActiveList = (list) => ({
  type: types.activeList,
  payload: list
})

export const SetCleanActiveList = () => ({
  type: types.setCleanActiveList
})

export const AddList = (list) => ({
  type: types.addList,
  payload: list
})

export const DeleteList = () => ({
  type: types.deleteList
})

