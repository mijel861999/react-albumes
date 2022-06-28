import types from '../types/type'

const initialState = {
  albumsList: [
    {
      id: 1,
      title: 'Mr Morales and the big stepperes',
      artist: 'Kendick Lamar',
      year: '2022',
      bg: 'https://m.media-amazon.com/images/I/61Sy94hfLfL._SS500_.jpg',
      frontImage: 'https://cdn.wegow.com/media/artists/kendrick-lamar/kendrick-lamar-1502874912.09.2560x1440.jpeg',
      notas: '',
      rating: 5,
    },
    {
      id: 2,
      title: 'The Off-Season',
      artist: 'J. Cole',
      year: '2021',
      bg: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F05%2Fj-cole-the-off-season-album-stream-000.jpg?w=960&cbr=1&q=90&fit=max',
      frontImage: 'https://www.queensjournal.ca/sites/default/files/img/story/2021/05/30/theoffseason_1.png',
      notas: '',
      rating: 2
    },
    {
      id: 3,
      title: 'The Life of Pablo',
      artist: 'Kanye West',
      year: '2016',
      bg: 'https://m.media-amazon.com/images/I/91EJXyuLDOL._AC_SL1500_.jpg',
      frontImage: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/10CD7/production/_88232886_kanye_season3_getty.jpg',
      notas: '',
      rating: 5
    },
    {
      id: 4,
      title: 'Madvillain',
      artist: 'MF Doom',
      year: '2002',
      bg: 'https://cdn.themedizine.com/2021/01/madvillainy-1536x1024.jpg',
      frontImage: 'https://i1.sndcdn.com/artworks-000202189202-meblfr-t500x500.jpg',
      notas: '',
      rating: 1
    },
    {
      id: 5,
      title: 'Harlan & Alondra',
      artist: 'Buddy',
      year: '2018',
      bg: 'https://cdn.smehost.net/sonymusiccommx-mxprod/wp-content/uploads/2018/08/BUDDY-HARLAN-ALONDRA.jpg',
      frontImage: 'https://s3.amazonaws.com/hiphopdx-production/2018/07/180719-buddy-IG-800x600.jpg',
      notas: '',
      rating: 3
    }
  ],
  albumActive: {
  },
  customLists: [
    {
      id: 1,
      title: 'Para ducharse',
      background: 'https://m.media-amazon.com/images/I/61Sy94hfLfL._SS500_.jpg',
      albums: [
        {
          id: 1,
          title: 'Mr Morales and the big stepperes',
          artist: 'Kendick Lamar',
          year: '2022',
          bg: 'https://m.media-amazon.com/images/I/61Sy94hfLfL._SS500_.jpg',
          frontImage: 'https://m.media-amazon.com/images/I/61Sy94hfLfL._SS500_.jpg',
          notas: '',
          rating: 4,
        },
        {
          id: 5,
          title: 'Harlan & Alondra',
          artist: 'Buddy',
          year: '2018',
          bg: 'https://cdn.smehost.net/sonymusiccommx-mxprod/wp-content/uploads/2018/08/BUDDY-HARLAN-ALONDRA.jpg',
          frontImage: 'https://s3.amazonaws.com/hiphopdx-production/2018/07/180719-buddy-IG-800x600.jpg',
          notas: '',
          rating: 4
        }
      ]
    },
    {
      id: 2,
      title: 'Para el gym',
      background: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F05%2Fj-cole-the-off-season-album-stream-000.jpg?w=960&cbr=1&q=90&fit=max',
      albums: [
        {
          id: 2,
          title: 'The Off-Season',
          artist: 'J. Cole',
          year: '2021',
          bg: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F05%2Fj-cole-the-off-season-album-stream-000.jpg?w=960&cbr=1&q=90&fit=max',
          frontImage: 'https://www.queensjournal.ca/sites/default/files/img/story/2021/05/30/theoffseason_1.png',
          notas: '',
          rating: 4
        },
        {
          id: 5,
          title: 'Harlan & Alondra',
          artist: 'Buddy',
          year: '2018',
          bg: 'https://cdn.smehost.net/sonymusiccommx-mxprod/wp-content/uploads/2018/08/BUDDY-HARLAN-ALONDRA.jpg',
          frontImage: 'https://s3.amazonaws.com/hiphopdx-production/2018/07/180719-buddy-IG-800x600.jpg',
          notas: '',
          rating: 4
        }
      ]
    }
  ],
  listActive: ''
}

const albumesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addAlbum:
      return {
        ...state,
        albumsList: [...state.albumsList, action.payload]
      }
    case types.editAlbum:
      return {
        ...state,
        albumsList: state.albumsList.map(
          album => (album.id === action.payload.id ? action.payload : album)
        )
      }
    case types.setActiveAlbum:
      return {
        ...state,
        albumActive: action.payload
      }
    case types.setCleanActiveAlbum:
      return {
        ...state,
        albumActive: {}
      }
    case types.ActiveList:
      return {
        ...state,
        listActive: action.payload
      }
    case types.AddAlbumToList:
      return {
        ...state,
        customLists: state.customLists.map(
          list => (list.id === action.payload.list.id ? ({
            ...list,
            albums: [
              ...list.albums,
              action.payload.album
            ]
          }): list)
        )
      }
    case types.AddAlbumToActiveList:
      return {
        ...state,
        listActive: {
          ...state.listActive,
          albums: [
            ...state.listActive.albums,
            action.payload
          ]
        }
      }
    case types.AddList:
      return {
        ...state,
        customLists: [
          ...state.customLists,
          action.payload
        ]
      }
    default:
      return state
  }
}

export default albumesReducer
