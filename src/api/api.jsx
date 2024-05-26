const BASE_URL = 'https://panda-market-api.vercel.app/docs/#/';

export async function getProducts({ order = '', cursor = '', limit = 10, search = '' }) {
    const query = `order=${order}&cursor=${cursor}&limit=${limit}&search=${search}`;
    const response = await fetch(`${BASE_URL}/foods?${query}`);
    if (!response.ok) {
        throw new Error('데이터를 불러오는데 실패했습니다');
    }
    const body = await response.json();
    return body;
}
