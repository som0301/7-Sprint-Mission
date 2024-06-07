import "../../src/style/UsedMarket.css";
import BestItemsSection from "../Component/BestItemsSection";
import AllItemsSection from "../Component/AllItemsSction";

function usedMarket() {
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

export default usedMarket;