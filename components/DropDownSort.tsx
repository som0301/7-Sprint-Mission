import style from "@/styles/DropDownSort.module.css";
import React from "react";

interface DropDownSortProp{
    option: optionProp;
    setOrder: React.Dispatch<React.SetStateAction<string>>;
}

interface optionProp {
    [key: string] : string;
}

function DropDownSort( {option, setOrder}:DropDownSortProp ) {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOrder(event.target.value);
    };

    return(
        <div className={style.DropDownLayer}>
            <select className={style.SortMenu} onChange={handleChange}>
                {Object.entries(option).map(([key, value]) => (
                <option key={key} value={key}>
                    {value}
                </option>
            ))}
            </select>
        </div>
    );
}

export default DropDownSort;