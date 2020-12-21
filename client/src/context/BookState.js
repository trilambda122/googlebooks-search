import React, {useReducer} from 'react'
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

//  ADD BOOK TO DATABASE
const addBookToDatabse = async(book)=>{
  try {
    API.saveBook(book).then((data)=>{
      console.log('book saved to database ', data)
    })
  }catch (error){ console.log(error)}
}

// REMOVE BOOK FROM THE DATABASE
const removeBookFromDatabse = async(book)=>{
  try {
    API.deleteBook(book._id).then((data)=>{
      console.log('book removed from the  database ', data)
    })
  }catch (error){ console.log(error)}
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
addBookToDatabse(book)
dispatch({
  type: ADD_BOOK_FAVORITES,
  payload: book
})
}

// REMOVE BOOK FROM FAVORITES 
const removeBookFromFavorites = (book)=>{
  removeBookFromDatabse(book)
  dispatch({
    type: REMOVE_BOOK_FAVORITES,
    payload: book.id
  })
}

//SET FAVORITES FROM DATABASE
 const setFavoritesFromDatabase = (favoritesArrayFromDatabase)=>{
  dispatch({
    type: SET_FAVORITES_FROM_DATABASE,
    payload: favoritesArrayFromDatabase
  })

 }


// MAKE BOOK OBJECT 
const createBookObject = (bookFromGoogle)=>{
// need to check if thumbnail is undefined, and if so replace the image with a placeholder
    const image = bookFromGoogle && bookFromGoogle.volumeInfo.imageLinks ? bookFromGoogle.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150x200'
    return {
      _id: bookFromGoogle.id,
      title: bookFromGoogle.volumeInfo.title,
      authors: bookFromGoogle.volumeInfo.authors,
      description: bookFromGoogle.volumeInfo.description ,
      image: image,
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
   setFavoritesFromDatabase,
 }}>
 {props.children}
   </BookContext.Provider>
  )
} 

export default BookState
