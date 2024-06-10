import { useEffect, useState } from "react";
import favicon from "../images/logo/favoriteIcon.svg";
import {CallItemSearch} from "../api/CallAPI";
import "../../src/style/BestItemsSection.css";
import { Link, NavLink } from "react-router-dom";

function getWidth() {
    let width = window.innerWidth;
    let count = 0;
    if(width < 768) {
        count = 1;
    }
    else if(width < 1280) {
        count = 2;
    }
    else {
        count = 4;
    }

    return count;
}

function BestItem({item}) {
    return (
        <div className="BestItem">
            <NavLink to={`/items/${item.id}`}>
                <img src={item.images[0]} alt={item.name}/>
            </NavLink>
            <div className="ItemHistory">
                <p>{item.name}</p>
                <h1>{item.price.toLocaleString()}원</h1>
                <div className="Itemfav">
                    <img src={favicon} alt="하트"></img>
                    <p>{item.favoriteCount}</p>
                </div>
            </div>
        </div>
    );
}

function BestItemsSection() {
    const [BestItemsList, setBestItemsList] = useState([]);
    const [ItemCount, setItemCount] = useState(getWidth());

    const BestItemsLoad = async (ItemCount) => {
        const response = await CallItemSearch(1, ItemCount);
        setBestItemsList(response.list);
    };
    useEffect(() => {

        const ReCount = () => {
            const newWidth = getWidth();
            setItemCount(newWidth);
        };

        window.addEventListener("resize", ReCount);

        return () => {
            window.removeEventListener("resize", ReCount);
        };
    }, []);

    useEffect(() => {
        BestItemsLoad(ItemCount);
    }, [ItemCount]);

    return (
        <div className="BestItemLayer">
            <h1>베스트 상품</h1>
            <div className="ItemList">
                {BestItemsList.map((item) => (
                    <BestItem item={item} key={item.id}></BestItem>
                ))}
            </div>
        </div>
    );
}

export default BestItemsSection;