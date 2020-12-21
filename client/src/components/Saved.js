import React, {useEffect,useContext} from 'react'
import Nav from './Nav'
import BookContext from '../context/books-context'

export default function Saved() {
 console.log('------IM IN THE SAVED COMPONENT ------')
  const {savedBooks,getSavedBooksFromDatabase, setFavoritesFromDatabase,removeBookFromFavorites,addBooktoFavorites}= useContext(BookContext)
  useEffect(()=>{
    console.log('USING the EFFECT')
    getSavedBooksFromDatabase()
    .then((resultsFromDatabase)=>{
     setFavoritesFromDatabase(resultsFromDatabase)
     console.log('results from database ', resultsFromDatabase)
    })
   
     },[])
 
 
 
 return (
<React.Fragment>
  <Nav/>
  <h1>Saved</h1>
 {console.log('these are the saved books we are going to loop through ',savedBooks)}

  {savedBooks.map((singleBook)=>{
  return <div className="container border-bottom border-secondary " key={singleBook._id}>
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