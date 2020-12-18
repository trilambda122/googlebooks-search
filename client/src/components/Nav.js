import React, {useRef} from 'react'
import { SEARCH } from '../utils/actions';
import { useStoreContext } from "../utils/GlobalState";
import api from '../utils/api'



export default function Nav() {
  
const inputRef = useRef();
const [state,dispatch]=useStoreContext();
  
const getSearchResults = async(searchStr)=>{
  const results = await api.getBook(searchStr)
  return results
}


const handleSubmit = (e)=>{
  console.log('--------HANDLING----(NAV.js)----')
  e.preventDefault()
  getSearchResults(inputRef.current.value).then((result)=>{
    dispatch({
      type: SEARCH,
      search: inputRef.current.value,
      searchResults: result.data
  
    })
    inputRef.current.value = ''
    console.log(state)
    console.log('--------DONE----')
  })
}



  return (
    <React.Fragment>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
    <a className="navbar-brand " href="#"><img className="img-thumbnail" src='./imgs/books-75x75.png'/> BOOK SEARCH</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/saved">Saved</a>
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