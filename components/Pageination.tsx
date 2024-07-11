import LeftArrow from "../public/images/home/arrow_left.svg";
import RightArrow from "../public/images/home/arrow_right.svg";
import style from "@/styles/Pageination.module.css";

interface PageinationProps {
    pageSize : number;
    activePage : number;
    onPageChange: (pageNumber: number) => void;
}

const Pageination = ({pageSize, activePage, onPageChange} : PageinationProps) => {
    const maxPages = 5;
    let startPage=0;

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
        <div className={style.PaginationBar}>
            <button
                className={style.PaginationButton}
                disabled={activePage===1}
                onClick={()=>onPageChange(activePage-1)}
            >
                <LeftArrow />
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    className={`${style.PaginationButton} ${activePage === page ? "active" : ""}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
            <button 
                className={style.PaginationButton}
                disabled={activePage===pageSize} 
                onClick={()=>onPageChange(activePage+1)}
            >
                <RightArrow/>
            </button>
        </div>
    );
}

export default Pageination;