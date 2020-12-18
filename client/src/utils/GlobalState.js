import React, { createContext,useReducer,useContext} from 'react';
import {SEARCH} from './actions'


const StoreContext = createContext();
const {Provider} = StoreContext;

const reducer = (state,action) => {

  switch (action.type){
    case SEARCH:
    console.log('in the SEARCH')
      return {
        ...state,
        search: action.search,
        searchResults: action.searchResults.items
      }
      default:
        return state
  }
}

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    search: '',
    searchResults:[]
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = ()=> {
  return useContext(StoreContext)
}

export {StoreProvider,useStoreContext}