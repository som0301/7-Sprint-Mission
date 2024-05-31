// import Header from "./Header"
import React, { useState, useEffect } from "react";





function App() {
  const [orderBy, setorderBy] = useState('favorite');
  const [items, setItems] = useState([]);
  const sortedIems = items.sort((a,b) => b[orderBy]- a[orderBy]);
  


  const handleNewestClick = () => setOrderBy('recent');

  const handleFavoritClick = () => setOrderBy('favorite');


  const handleLoad = async (options) => {
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await getItems(options)
    }
  }


useEffect(() {
  handleLoad({ orderBy, page: 1,pageSize: 4 });
}, [orderBy]);


  return (
    <div>
      <>
        <Header />
      </>


    
    </div>
    
  )

}

export default App;
