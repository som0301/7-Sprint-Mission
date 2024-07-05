import "../../src/style/DropDownSort.css"
import React from "react";

interface DropDownSortProp{
    setOrder: React.Dispatch<React.SetStateAction<string>>;
}

function DropDownSort( {setOrder}:DropDownSortProp ) {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOrder(event.target.value);
    };

    return(
        <div className="DropDownLayer">
            <select className="SortMenu" onChange={handleChange}>
                <option value="recent">최신순</option>
                <option value="favorite">좋아요순</option>
            </select>
        </div>
    );
}

export default DropDownSort;