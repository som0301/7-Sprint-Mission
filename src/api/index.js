const DEFAULT_URL = 'https://panda-market-api.vercel.app/products';

export async function getDataFunc({ url = DEFAULT_URL, params, id }) {
	const query = new URLSearchParams(params).toString();
	// console.log(`${id ? url + '/' + id : url}${query ? '?' + query : ''}`);
	try {
		const response = await fetch(`${id ? url + '/' + id : url}${query ? '?' + query : ''}`);
		if (!response.ok) throw new Error(response.status);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('제품 데이터를 가져오는데 실패했습니다:', error);
	}
}
