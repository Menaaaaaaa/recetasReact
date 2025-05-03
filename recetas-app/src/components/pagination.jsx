/* import React from "react";
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
} */
  import React from "react";
  import { Link } from "react-router-dom";
  import "../assets/pagination.css";
  
  export default function Pagination({ currentPage, totalPages }) {
    const renderPages = () => {
      const pages = [];
  
      const createLink = (page) => (
        <Link
          key={page}
          to={`?page=${page}`}
          className={`page ${page === currentPage ? "active" : ""}`}
        >
          {page}
        </Link>
      );
  
      if (totalPages <= 6) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(createLink(i));
        }
      } else {
        pages.push(createLink(1));
  
        if (currentPage > 3) {
          pages.push(<span key="dots1" className="page dots">...</span>);
        }
  
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);
  
        for (let i = start; i <= end; i++) {
          pages.push(createLink(i));
        }
  
        if (currentPage < totalPages - 2) {
          pages.push(<span key="dots2" className="page dots">...</span>);
        }
  
        pages.push(createLink(totalPages));
      }
  
      return pages;
    };
  
    return (
      <div className="pagination-wrapper">
        <div className="pagination">
          <Link
            to={`?page=${Math.max(1, currentPage - 1)}`}
            className="page"
          >
            {"<"}
          </Link>
          {renderPages()}
          <Link
            to={`?page=${Math.min(totalPages, currentPage + 1)}`}
            className="page"
          >
            {">"}
          </Link>
        </div>
      </div>
    );
  }
  