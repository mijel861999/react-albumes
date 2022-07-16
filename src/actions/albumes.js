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

export const AddAlbumToList = () => ({
  type: types.addAlbumToList
})

export const DeleteAlbumInList = () => ({
  type: types.deleteAlbumInList
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

export const EditList = (listData) => ({
  type: types.editList,
  payload: listData
})

export const DeleteList = () => ({
  type: types.deleteList
})

