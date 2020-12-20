import {SEARCH, SEARCH_RESULTS, TOOGLE_SAVE} from './actions'

const bookReducer = (state,action) => {

  switch (action.type){
    case SEARCH_RESULTS:
    console.log('in the SEARCH')
      return {
        ...state,
        searchResults: action.payload.items
      }
      case TOOGLE_SAVE:
      return {}
      default:
        return state
  }
}

export default bookReducer;