import DisplayItems from './components/DisplayItems';
import HandlePageSize from './components/HandlePageSize';
import SearchItems from './components/SearchItems';

function Items() {
    const pageSize = HandlePageSize();
    const result = SearchItems({ page: 1, pageSize, order: 'recent', search: '' });

    console.log('Items products:', result); // 디버깅용 로그
    return <DisplayItems {...result} />;
}

export default Items;
