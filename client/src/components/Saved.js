import React, {useEffect,useContext} from 'react'
import Nav from './Nav'
import BookContext from '../context/books-context'
export default function Saved() {
  const {savedBooks,getSavedBooksFromDatabase, setFavoritesFromDatabase,removeBookFromFavorites}= useContext(BookContext)
  useEffect(()=>{
    getSavedBooksFromDatabase()
    .then((resultsFromDatabase)=>{
     setFavoritesFromDatabase(resultsFromDatabase)
    })
   
     },[savedBooks.length])
 
 
 
 return (
<React.Fragment>
  <Nav/>
  {savedBooks.map((singleBook)=>{
  return <div className="container border-bottom border-secondary " key={singleBook.etag}>
<div className="clearfix">

    <a className="text-decoration-none" href={singleBook.link}>
    <img src={singleBook.image} className="col-md-6 float-md-start mb-3 ms-md-3 img-effect" alt="..."/>
   
    </a>

    <div className="ml-3">
        <p className="fs-2 fw-bold"> 



<img  className="save-icon "src='./imgs/stared.svg' onClick={()=>{
          removeBookFromFavorites(singleBook)
        }} alt="Favorite"/> 
   
     

    
        {singleBook.title}</p>
        <p className="fs-5">{singleBook.authors}</p>
        <p className="fs-6 fw-light">{singleBook.publisher}  {singleBook.publishedDate}</p>
      <p className="fs-6">{singleBook.description}</p>
    </div>
</div>
</div>
  })}
</React.Fragment>
  )
}