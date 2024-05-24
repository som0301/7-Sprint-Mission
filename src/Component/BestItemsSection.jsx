import CallAPI from "../api/CallAPI";

function BestItem({item}) {
    console.log(item);
    return (
        <div className="BestItem">
            <img src={item.images} alt={item.name}/>
            <div>
                <p>{item.description}</p>
                <h1>{item.price}</h1>
                <div>
                    <img src="../images/logo/favicon.ico" alt="하트"></img>
                    <h2>{item.favoriteCount}</h2>
                </div>
            </div>
        </div>
    );
}

function BestItemsSection() {

    const BestItemList = await CallAPI(1, 4);

    return (
        <article>
            
        </article>
    );
}

export default BestItemsSection;