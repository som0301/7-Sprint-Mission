import React from "react";
import { ReactComponent as LeftArrow } from "../../src/images/home/arrow_left.svg";
import { ReactComponent as RightArrow } from "../../src/images/home/arrow_right.svg";
import "../../src/style/pageination.css";

const Pageination = ({pageSize, activePage, onPageChange}) => {
    const maxPages = 5;
    let startPage;

    if(pageSize <= maxPages) {
        startPage = 1;
    }
    else {
        startPage = Math.max(activePage - Math.floor(maxPages / 2), 1);
        startPage = Math.min(startPage, pageSize-maxPages+1);
    }

    const pages = Array.from(
        { length: Math.min(maxPages, pageSize - startPage + 1) },
        (_, i) => startPage + i
      );
    
    return (
        <div className="PaginationBar">
            <button
                className="PaginationButton"
                disabled={activePage===1}
                onClick={()=>onPageChange(activePage-1)}
            >
                <LeftArrow />
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={`PaginationButton ${activePage === page ? "active" : ""}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button 
                className="PaginationButton" 
                disabled={activePage===pageSize} 
                onClick={()=>onPageChange(activePage+1)}
            >
                <RightArrow/>
            </button>
        </div>
    );
}

export default Pageination;