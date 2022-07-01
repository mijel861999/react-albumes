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

export const AddAlbumToList = (title, list) => ({
  type: types.AddAlbumToList,
  payload: {title, list}
})

export const AddAlbumToActiveList = (title) => ({
  type: types.AddAlbumToActiveList,
  payload: title
})

export const SetActiveList = (list) => ({
  type: types.ActiveList,
  payload: list
})

export const SetCleanActiveList = () => ({
  type: types.setCleanActiveList
})

export const AddList = (list) => ({
  type: types.AddList,
  payload: list
})

export const StartEditTitleInList = (newTitle) => {
  return (dispatch, getState) => {
    const { listActive, albumActive } = getState().albumes
    const listId = listActive.id
    const albumId = albumActive.title
    dispatch(EditTitleInList({ listId, albumId, newTitle })) 
  }
}

const EditTitleInList = (event) => ({
  type: types.EditTitleInList,
  payload: event 
})
