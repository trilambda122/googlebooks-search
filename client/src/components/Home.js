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
<div className="container border-bottom border-secondary ">
<div className="clearfix">

  <a className="text-decoration-none" href={item.volumeInfo.previewLink}>
<img src={item.volumeInfo.imageLinks.thumbnail} className="col-md-6 float-md-start mb-3 ms-md-3 img-effect" alt="..."/>
</a>

  <div className="ml-3">
  {/* <button className="btn btn-outline-secondary justify-content-md-end mt-2" type="submit">Save</button> */}

      <p className="fs-2 fw-bold"> <img  className="save-icon "src='./imgs/star.svg'/> {item.volumeInfo.title}</p>
      <p className="fs-5">{item.volumeInfo.authors}</p>
      <p className="fs-6 fw-light">{item.volumeInfo.publisher}  {item.volumeInfo.publishedDate}</p>
    <p className="fs-6">{item.volumeInfo.description}</p>
  </div>




 
</div>
</div>

       {/* <div class="container border-bottom border-secondary">
       
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
       </div> */}
    
      

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