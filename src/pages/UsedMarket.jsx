import "../style/UsedMarket.css";
import { useEffect, useState } from "react";
import BestItemsSection from "../component/BestItemsSection";
import CallAPI from "../api/CallAPI";
import AllItemsSection from "../component/AllItemsSction";
import Pageination from "../component/Pageination";

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

function Main() {
    const [BestItemsList, setBestItemsList] = useState([]);
    const [AllItemsList, setAllItemsList] = useState([]);
    const [Pointer, setPointer] = useState(1);
    const ItemCount = getWidth();
    

    const BestItemsLoad = async () => {
        const response = await CallAPI(Pointer, ItemCount);
        setBestItemsList(response.list);
    };
    const AllItemsLoad = async () => {
        const response = await CallAPI(Pointer, ItemCount, "recent");
        setAllItemsList(response.list);
    };

    useEffect(() => {
        BestItemsLoad();
        AllItemsLoad();
    }, []);

    return (
        <main>
            <section className="bestItem">
                <BestItemsSection></BestItemsSection>
            </section>
            <section className="allItem">
                <AllItemsSection></AllItemsSection>
            </section>
            <section>
                {/* <Pageination></Pageination> */}
            </section>
        </main>
    );
}

export default Main;