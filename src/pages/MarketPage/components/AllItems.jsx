import React, { useEffect, useState } from "react";
import { getProducts } from "../../../api/itemApi";
import ItemCard from "./ItemCard";
import { ReactComponent as SortIcon } from "../../../assets/images/icons/ic_sort.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/ic_search.svg";
import { Link } from "react-router-dom";
import { getItems } from "../../../api/api";
// import DropdownList from "../../../components/UI/DropdownList";
// import PaginationBar from "../../../components/UI/PaginationBar";


// 5. 31 반응형  윈도우width 값 변화에 따라 화면에 보여지는 아이템 갯수 전달
const getPageSize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      // Mobile viewport
        return 4;
    } else if (width < 1280) {
      // Tablet viewport
        return 6;
    } else {
      // Desktop viewport
        return 10;
    }
};




function AllItems() {
    const [orderBy, setOrderBy] = useState("recent");
    const [pageSize, setPageSize] = useState(getPageSize);
    const [page, setPage] =useState(1);
    const [itemList, setItemList] = useState([]);

    const fetchData = async ({ orderBy, page, pageSize }) => {
        const products = await getItems({ orderBy, page, pageSize});
        setItems
    }



//  5.30 페이지 사이즈에 따른 보여지는 아이템 갯
useEffect (() => {
    const pageResize () => {
        setPage(getPageSize());
    
    window.addEventListener("resize",pageResize);
    fetchData({orderBy, pageSize ,page});
    
    return 


}

}
