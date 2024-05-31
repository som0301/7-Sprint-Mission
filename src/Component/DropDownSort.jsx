import "../../src/style/dropDownSort.css"
import React from "react";
function DropDownSort( {setOrder} ) {

    const handleChange = (event) => {
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