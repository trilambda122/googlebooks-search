import React, {useState,useEffect,useContext} from 'react'
import { useStoreContext } from "../utils/GlobalState";
import Nav  from './Nav'


export default function Home() {

  const [state,dispatch]=useStoreContext();


  return (
<React.Fragment>
  <Nav/>
  {
    state.searchResults.map((item)=>{
      console.log(item)
     return <div>
       <div class="container border-bottom border-secondary">
       
       <div class="row align-items-start"> 
       <div class="col">
       <a className="text-decoration-none" href={item.volumeInfo.previewLink}>
      <img className="mt-2 mb-2 img-effect" src={item.volumeInfo.imageLinks.thumbnail} alt='book'/>
      </a>
    </div>
    <div class="col">
      <p className="fs-2">{item.volumeInfo.title}</p>
      <p className="fs-5">{item.volumeInfo.authors}</p>
      <p className="fs-6">{item.volumeInfo.publisher}  {item.volumeInfo.publishedDate}</p>
    </div>
       </div>
    
      

       </div>
      
 {/* <p>TITLE:{item.volumeInfo.title}</p>
 <p>AUTHOR:{item.volumeInfo.authors}</p>
 <p>DESCRIPTION:{item.volumeInfo.description}</p>
 <p>IMAGE:{item.volumeInfo.imageLinks.thumbnail}</p>
 <p>LINK:{item.volumeInfo.previewLink}</p>
 <p>PUBLISHER:{item.volumeInfo.publisher}</p>
 <p>PUBDATE:{item.volumeInfo.publishedDate}</p> */}

     </div>
     

    })
  }
</React.Fragment>
  )
}

// title: { type: String },
// authors: { type: Array },
// description: { type: String },
// image: { type: String },
// link: { type: String },
// publisher: { type: String },
// publishedDate: { type: String }