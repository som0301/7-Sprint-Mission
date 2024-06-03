import BestItemList from "./BestItemList";
import '../styles/BestItem.css'
import useMediaQuery from "../hooks/useMediaQuery";

function BestItem() {
  const isDesktop = useMediaQuery("(min-width: 1200px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1199px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="best-item-container"> 
      <label className="best-item-label">베스트 상품</label>
      <BestItemList
        isDesktop={isDesktop}
        isTablet={isTablet}
        isMobile={isMobile}
      />
    </div>
  )
}

export default BestItem;