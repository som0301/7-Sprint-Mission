import httpClient from './httpClient';

const API_URL = 'https://panda-market-api.vercel.app';
const ERROR_MESSAGE = '제품 데이터를 가져오는데 실패했습니다.';

/**
 * 제품 목록 가져오기
 *
 * @function getProductDataList
 * @param {number} page - 페이지 번호
 * @param {number} pageSize - 페이지 당 상품 수
 * @param {string} orderBy - 정렬 기준
 * @param {string} keyword - 검색 키워드 [ favorite, recent ]
 * @returns {Promise<Object>} The response data parsed as JSON.
 */
export const getProductDataList = async ({ page = 1, pageSize = 4, orderBy = 'favorite', ...args }) => {
	return await httpClient.get(`${API_URL}/products`, { page, pageSize, orderBy, ...args }).catch((e) => {
		throw new Error(ERROR_MESSAGE, e);
	});
};

/**
 * 제품 정보 가져오기
 *
 * @function getProductData
 * @param {number} id - 제품 식별 번호
 * @returns {Promise<Object>} The response data parsed as JSON.
 */
export const getProductData = async (id) => {
	if (!id) throw new Error('제품 id를 입력해주세요.');
	return await httpClient.get(`${API_URL}/products/${id}`).catch((e) => {
		throw new Error(ERROR_MESSAGE, e);
	});
};

// const setProductData = async (id, params) => {};

// const updateProductData = async (id, params) => {};

// const patchProductData = async (id, params) => {};

// const deleteProductData = async (id, params) => {};
