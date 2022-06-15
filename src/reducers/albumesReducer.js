import types from '../types/type'

const initialState = {
  albumsList: [
    {
      title: 'Mr Morales and the big stepperes',
      artist: 'Kendick Lamar',
      year: '2022',
      bg: 'https://m.media-amazon.com/images/I/61Sy94hfLfL._SS500_.jpg',
      frontImage: 'https://m.media-amazon.com/images/I/61Sy94hfLfL._SS500_.jpg',
      notas: '',
      rating: 4,
    },
    {
      title: 'The Off-Season',
      artist: 'J. Cole',
      year: '2021',
      bg: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F05%2Fj-cole-the-off-season-album-stream-000.jpg?w=960&cbr=1&q=90&fit=max',
      frontImage: 'https://www.queensjournal.ca/sites/default/files/img/story/2021/05/30/theoffseason_1.png',
      notas: '',
      rating: 4
    }
  ],
}

const albumesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addAlbum:
      return {
        ...state,
        albumsList: [...state.albumsList, action.payload]
      }
    default:
      return state
  }
}

export default albumesReducer
