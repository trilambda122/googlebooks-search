import React, {useState,useEffect,useContext} from 'react'
import Nav  from './Nav'
import BookContext from '../context/books-context'


export default function Home() {


  const {searchResults, addBooktoFavorites, savedBooks, removeBookFromFavorites}= useContext(BookContext)



  return (
<div>
  <Nav/>
{searchResults.map((singleBook)=>{

return <div className="container border-bottom border-secondary " key={singleBook.id}>
          <div className="clearfix">

              <a className="text-decoration-none" href={singleBook.volumeInfo.previewLink}>
              <img src={singleBook.volumeInfo.imageLinks.thumbnail} className="col-md-6 float-md-start mb-3 ms-md-3 img-effect" alt="..."/>
              </a>

              <div className="ml-3">
                  <p className="fs-2 fw-bold"> 
                  {savedBooks.map(book => book.id).includes(singleBook.id)   ?  <img  className="save-icon "src='./imgs/stared.svg' onClick={()=>{removeBookFromFavorites(singleBook)}} alt="Favorite"/>  :  <img  className="save-icon "src='./imgs/star.svg' onClick={()=>{addBooktoFavorites(singleBook)}} alt="Could be a favorite"/>
                  
                  }
                  {singleBook.volumeInfo.title}</p>
                  <p className="fs-5">{singleBook.volumeInfo.authors}</p>
                  <p className="fs-6 fw-light">{singleBook.volumeInfo.publisher}  {singleBook.volumeInfo.publishedDate}</p>
                <p className="fs-6">{singleBook.volumeInfo.description}</p>
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