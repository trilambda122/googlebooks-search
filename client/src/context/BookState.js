import React, {useReducer, useEf} from 'react'
import BookContext from './books-context'
import bookReducer from './book-reducer'
import {SEARCH_RESULTS, ADD_BOOK_FAVORITES,REMOVE_BOOK_FAVORITES,SET_FAVORITES_FROM_DATABASE} from './actions'
import API from '../utils/api'

function BookState(props) {
  const initialState = {
    searchResults:[],
    savedBooks:[]
  }

 const [state, dispatch] = useReducer(bookReducer,initialState)


// GET SAVED BOOKS FROM THE DATABASE

const getSavedBooksFromDatabase = async()=>{
try{
return await API.savedBooks()
}catch (error){
  console.log(error)
}
}


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

//SET FAVORITES FROM DATABASE
 const setFavoritesFromDatabase = (favoritesArrayFromDatabase)=>{
  console.log('favorite books from database ', favoritesArrayFromDatabase)
  dispatch({
    type: SET_FAVORITES_FROM_DATABASE,
    payload: favoritesArrayFromDatabase
  })

 }

// MAKE BOOK OBJECT 
const createBookObject = (bookFromGoogle)=>{
  return {
    _id: bookFromGoogle.id,
    title: bookFromGoogle.volumeInfo.title,
    authors: bookFromGoogle.volumeInfo.authors,
    description: bookFromGoogle.volumeInfo.description ,
    image: bookFromGoogle.volumeInfo.imageLinks.thumbnail,
    link: bookFromGoogle.volumeInfo.previewLink,
    publisher: bookFromGoogle.volumeInfo.publisher,
    publishedDate: bookFromGoogle.volumeInfo.publishedDate
  }
  }

  return (
 <BookContext.Provider 
 value={{
   searchResults: state.searchResults,
   savedBooks: state.savedBooks,
   returnedBooks,
   addBooktoFavorites,
   removeBookFromFavorites,
   getSavedBooksFromDatabase,
   createBookObject,
   setFavoritesFromDatabase
 }}
 >
 {props.children}
   </BookContext.Provider>
  )
} 

export default BookState
