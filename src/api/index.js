const DEFAULT_URL = 'https://panda-market-api.vercel.app/products';
const DEFAULT_PARAMS = { page: 1, pageSize: 4, orderBy: 'recent' };

export async function getDataFunc(url = DEFAULT_URL, params = DEFAULT_PARAMS) {
	const query = new URLSearchParams(params).toString();
	try {
		const response = await fetch(`${url}?${query}`);
		if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
