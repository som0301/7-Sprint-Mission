import AllItem from './component/AllItem'
import BestItem from './component/BestItem'
import './ItemPage.css'

function ItemPage() {
  return (
    <div className="page-wrapper">
      <BestItem />
      <AllItem />
    </div>
  )
}

export default ItemPage
