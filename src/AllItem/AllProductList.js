import AllProductItem from "./AllProductItem";

function AllProductList(){
    return(
        <div className="All-container">
            <div>전체 상품</div>
            <input></input>
            <button></button>
            <ul>
                <li>최신순</li>
                <li>좋아요순</li>
            </ul>
            <AllProductItem />
        </div>
    )
}

export default AllProductList;