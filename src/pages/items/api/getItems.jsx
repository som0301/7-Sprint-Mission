const BASE_URL = 'https://panda-market-api.vercel.app/products';

export async function getItems({ page = 1, pageSize, order = 'recent', search = '' }) {
    const query = `page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${search}`;
    const response = await fetch(`${BASE_URL}?${query}`);
    if (!response.ok) {
        throw new Error('데이터를 불러오는데 실패했습니다');
    }
    const body = await response.json();
    return body;
}
