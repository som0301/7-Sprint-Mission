import { useState, useEffect } from 'react';

const useItemsCountPerPage = (
  defaultCount: number,
  smallCount: number,
  smallerCount: number
) => {
  const [itemsCountPerPage, setItemsCountPerPage] = useState(defaultCount);
  useEffect(() => {
    const updateItemsCountPerPage = () => {
      const width = window.innerWidth;
      if (width <= 375) {
        setItemsCountPerPage(smallerCount);
      } else if (width <= 744) {
        setItemsCountPerPage(smallCount);
      } else {
        setItemsCountPerPage(defaultCount);
      }
    };

    updateItemsCountPerPage();
    window.addEventListener('resize', updateItemsCountPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsCountPerPage);
    };
  }, [defaultCount, smallCount, smallerCount]);

  return itemsCountPerPage;
};

export default useItemsCountPerPage;
