import ItemCard from './ItemCard'
import { getProducts } from '../../../service/Api'
import { useEffect, useState } from 'react'
import { ItemListResponse } from '../../../interfaces/item.interface'
import useFetch from '../../../hooks/useFetch'

const getPageSize = () => {
  const width = window.innerWidth
  if (width < 768) return 1
  else if (width < 1280) return 2
  else return 4
}

function BestItem() {
  const [pageSize, setPageSize] = useState(getPageSize())

  const fetchBestItems = useFetch<ItemListResponse>(
    () => getProducts({ orderBy: 'favorite', pageSize }),
    { list: [], totalCount: 0 }
  )
  const { list: itemList } = fetchBestItems

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [pageSize])

  return (
    <div className="best-item-container">
      <h1 className="container-title">베스트 상품</h1>
      <div className="best-item-list">
        {itemList.map((item) => (
          <ItemCard item={item} key={`best-item-${item.id}`} />
        ))}
      </div>
    </div>
  )
}

export default BestItem
