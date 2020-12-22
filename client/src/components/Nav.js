import React, {useRef, useContext} from 'react'
import api from '../utils/api'
import BookContext from '../context/books-context'
import { useHistory } from "react-router-dom";

export default function Nav() {
  
const history = useHistory()  
const inputRef = useRef();
const {returnedBooks,createBookObject}= useContext(BookContext)
  
const getSearchResults = async(searchStr)=>{
  const results = await api.getBook(searchStr)
  return results
}



const handleSubmit = (e)=>{
  e.preventDefault()
  let booksObjectFormated = []
  getSearchResults(inputRef.current.value).then((results)=>{
    results.data.items.map((result)=>{
      console.log("handling the submit request", result)
        const book = createBookObject(result)
        booksObjectFormated.push(book)
    })
    returnedBooks(booksObjectFormated)
    inputRef.current.value = ''
   history.push('/')
  })
}

{/* <img className="img-thumbnail" src='./imgs/books-75x75.png' style={{maxWidth: "75px"}}/> */}

  return (
   
    <React.Fragment>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">

    <a className="navbar-brand" href="/">
    <img className="img-thumbnail" src='./imgs/books-75x75.png' alt='book-icon'/>
    </a> 
    <a className="navbar-brand" aria-current="page" href="/">BOOK SEARCH</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
        <li className="nav-item">
            <a className="nav-link active navbar-text" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active navbar-text" aria-current="page" href="/saved">Favorites</a>
        </li>
    </ul>
    </div>
    </div>
    <form className="d-flex" onSubmit={handleSubmit}>
        <input className="form-control me-2"  ref={inputRef}  type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-secondary" type="submit">Search</button>
      </form>
</nav>
    </React.Fragment>
  )
}