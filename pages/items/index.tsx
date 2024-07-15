import style from "@/styles/UsedMarket.module.css";
import BestItemsSection from "@/components/BestItemsSection";
import AllItemsSection from "@/components/AllItemsSction";

function usedMarket() {
    return (
        <main className={style.main}>
            <section className={style.bestItem}>
                <BestItemsSection></BestItemsSection>
            </section>
            <section className={style.allItem}>
                <AllItemsSection></AllItemsSection>
            </section>
        </main>
    );
}

export default usedMarket;