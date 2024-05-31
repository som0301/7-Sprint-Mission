import "../../src/style/usedMarket.css";
import BestItemsSection from "../component/bestItemsSection";
import AllItemsSection from "../component/allItemsSction";

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