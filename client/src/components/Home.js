import React, {useState,useEffect,useContext} from 'react'
import Nav  from './Nav'
import BookContext from '../context/books-context'


export default function Home() {


  const {searchResults, addBooktoFavorites, savedBooks, removeBookFromFavorites, getSavedBooksFromDatabase,createBookforDatabase,setFavoritesFromDatabase }= useContext(BookContext)

  // GET FAVORITES SAVED IN THE DATABASE AND ADD THEM TO THE STATE
  useEffect(()=>{
 getSavedBooksFromDatabase()
 .then((resultsFromDatabase)=>{
  setFavoritesFromDatabase(resultsFromDatabase)
 })

  },[])


  return (
<div>
  <Nav/>
  {console.log('this is the inital state of saved books', savedBooks)}
{searchResults.map((singleBook)=>{

return <div className="container border-bottom border-secondary " key={singleBook._id}>
          <div className="clearfix">

              <a className="text-decoration-none" href={singleBook.link}>
              <img src={singleBook.image} className="col-md-6 float-md-start mb-3 ms-md-3 img-effect" alt="..."/>
              </a>

              <div className="ml-3">
                  <p className="fs-2 fw-bold"> 
                  {savedBooks.map(book => book._id).includes(singleBook._id)   ?  <img  className="save-icon "src='./imgs/stared.svg' onClick={()=>{removeBookFromFavorites(singleBook)}} alt="Favorite"/>  :  <img  className="save-icon "src='./imgs/star.svg' onClick={()=>{addBooktoFavorites(singleBook)}} alt="Could be a favorite"/>
                  
                  }
                  {singleBook.title} {singleBook._id}</p>
                  <p className="fs-5">{singleBook.authors}</p>
                  <p className="fs-6 fw-light">{singleBook.publisher}  {singleBook.publishedDate}</p>
                <p className="fs-6">{singleBook.description}</p>
              </div>
          </div>
</div>

})}
</div>
  )
 
}

// title: { type: String },
// authors: { type: Array },
// description: { type: String },
// image: { type: String },
// link: { type: String },
// publisher: { type: String },
// publishedDate: { type: String }