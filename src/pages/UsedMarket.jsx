import "../style/UsedMarket.css";
import { useState } from "react";
import BestItemsSection from "../component/BestItemsSection";
import AllItemsSection from "../component/AllItemsSction";

function Main() {
    const [bestPoint, setBestPoint] = useState(1);
    const [allPoint, setAllPoint] = useState(1);
    return (
        <main>
            <section className="bestItem">
                <BestItemsSection></BestItemsSection>
            </section>
            <section className="allItem">
                <AllItemsSection></AllItemsSection>
            </section>
        </main>
    );
}

export default Main;