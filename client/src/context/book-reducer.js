import {SEARCH_RESULTS, ADD_BOOK_FAVORITES,REMOVE_BOOK_FAVORITES,SET_FAVORITES_FROM_DATABASE} from './actions'

const bookReducer = (state,action) => {

  switch (action.type){
    case SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      }
      case ADD_BOOK_FAVORITES:
      return {
        ...state,
        savedBooks: [...state.savedBooks, action.payload]
      }
      case REMOVE_BOOK_FAVORITES:
        return {
          ...state,
          savedBooks: state.savedBooks.filter((book)=> book.id !== action.payload)
        }
        case SET_FAVORITES_FROM_DATABASE:
          return {
            ...state,
            savedBooks: action.payload
          }
      
      default:
        return state
  }
}

export default bookReducer;