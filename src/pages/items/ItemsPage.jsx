import { useState } from 'react';
import Allitems from 'pages/items/components/AllItems';
function Items() {
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState('recent');
    return <Allitems />;
}

export default Items;
