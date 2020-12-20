import React, {useReducer} from 'react'
import BookContext from './books-context'
import bookReducer from './book-reducer'
import {SEARCH_RESULTS, TOOGLE_SAVE} from './actions'

function BookState(props) {
  const initialState = {
    searchResults:[],
    savedBooks:[]
  }

  const [state, dispatch] = useReducer(bookReducer,initialState)

// searchResults
 const returnedBooks = (returnedBooksArray) =>{
dispatch({
  type: SEARCH_RESULTS,
  payload: returnedBooksArray
})

 }

// toogle book saved
const savedToogle = (bookObject)=>{
  dispatch({
    type: TOOGLE_SAVE,
    payload: bookObject,
 
  })
}

  return (
 <BookContext.Provider 
 value={{
   searchResults: state.searchResults,
   savedBooks: state.savedBooks,
   returnedBooks,
   savedToogle
 }}
 ><h1>PROVIDER</h1>
 {console.log(props)}
 {props.children}
   </BookContext.Provider>
  )
} 

export default BookState
