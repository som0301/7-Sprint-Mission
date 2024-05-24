import "../style/UsedMarket.css";
import { useEffect, useState } from "react";
import BestItemsSection from "../component/BestItemsSection";
import CallAPI from "../api/CallAPI";
import AllItemsSection from "../component/AllItemsSction";
import Pageination from "../component/Pageination";

function Main() {
    return (
        <main>
            <section className="bestItem">
                <BestItemsSection></BestItemsSection>
            </section>
            <section className="allItem">
                {/* <AllItemsSection items={AllItems}></AllItemsSection> */}
            </section>
            <section>
                {/* <Pageination></Pageination> */}
            </section>
        </main>
    );
}

export default Main;