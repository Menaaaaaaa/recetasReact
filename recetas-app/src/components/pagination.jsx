import React from "react";
import '../assets/pagination.css'
export default function Pagination(){
  return(
    <div className="pagination-wrapper">
      <div className="pagination">
        <button className="page active">1</button>
        <button className="page">2</button>
        <button className="page">3</button>
        <button className="page dots">...</button>
        <button className="page">304</button>
        <button className="page">{">"}</button>
      </div>
    </div>
  )
}
