import React from 'react'
import Nav  from './Nav'

export default function NotFound() {
  return (
    <div>
      <Nav/>
<div>
<div className="page-wrap d-flex flex-row align-items-center">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12 text-center">
                <span className="display-1 d-block">No Results</span>
                <div className="mb-4 lead">What you searched for returned no results please try again</div>
                {/* <a href="/" className="btn btn-link">Back to Home</a> */}
            </div>
        </div>
    </div>
</div>

</div>
    </div>
  )
}

