import React, {useReducer} from 'react'
import BookContext from './books-context'
import bookReducer from './book-reducer'
import {SEARCH_RESULTS, ADD_BOOK_FAVORITES,REMOVE_BOOK_FAVORITES} from './actions'

function BookState(props) {
  const initialState = {
    searchResults:[],
    savedBooks:[]
  }

  const [state, dispatch] = useReducer(bookReducer,initialState)

// DISPLAY SEARCH RESULTS
 const returnedBooks = (returnedBooksArray) =>{
dispatch({
  type: SEARCH_RESULTS,
  payload: returnedBooksArray
})

 }

// ADD BOOK TO FAVORITES
const addBooktoFavorites = (book)=>{
console.log('trying to add this book to favorites ', book)
dispatch({
  type: ADD_BOOK_FAVORITES,
  payload: book
})
}




// REMOVE BOOK FROM FAVORITES 

const removeBookFromFavorites = (book)=>{
  console.log('trying to remove this book from favorites ', book)
  dispatch({
    type: REMOVE_BOOK_FAVORITES,
    payload: book.id
  })
}


  return (
 <BookContext.Provider 
 value={{
   searchResults: state.searchResults,
   savedBooks: state.savedBooks,
   returnedBooks,
   addBooktoFavorites,
   removeBookFromFavorites
 }}
 ><h1>PROVIDER</h1>
 {console.log(props)}
 {props.children}
   </BookContext.Provider>
  )
} 

export default BookState
