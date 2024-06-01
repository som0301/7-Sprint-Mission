/**
 * @function setURL
 * @param {String} url - The server URL.
 * @param {Object} [params] - Query parameters as key-value pairs.
 * @returns {String} - URL String with Query parameters.
 * @throws Will throw an error with the URL is empty.
 */
const setURL = (url, params) => {
	if (!url) throw new Error('URL is Empty');
	const query = params ? '?' + new URLSearchParams(params).toString() : '';
	return url + query;
};

/**
 * HTTP requests
 *
 * @namespace httpClient
 */
const httpClient = {
	/**
	 * HTTP GET request
	 *
	 * @async
	 * @function get
	 * @memberof httpClient
	 * @param {String} url - The server URL.
	 * @param {Object} [params] - Query parameters as key-value pairs.
	 * @returns {Promise<Object>} The response data parsed as JSON.
	 * @throws Will throw an error with the specified error message and error details if the request fails.
	 */
	get: async function (url, params) {
		try {
			const URL = setURL(url, params);
			const response = await fetch(URL, {
				method: 'GET',
			});
			if (!response.ok) throw new Error(response.status);
			const data = await response.json();
			return data;
		} catch (error) {
			throw Error(error);
		}
	},

	/**
	 * HTTP POST request
	 *
	 * @async
	 * @function post
	 * @memberof httpClient
	 * @param {String} url - The server URL.
	 * @param {Object} [params] - Query parameters as key-value pairs.
	 * @param {Object} body - The request body to be sent.
	 * @returns {Promise<Object>} The response data parsed as JSON.
	 * @throws Will throw an error with the specified error message and error details if the request fails.
	 */
	post: async function (url, params, body) {
		try {
			const URL = setURL(url, params);
			const response = await fetch(URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			});
			if (!response.ok) throw new Error(response.status);
			const data = await response.json();
			return data;
		} catch (error) {
			throw Error(error);
		}
	},

	/**
	 * HTTP PATCH request
	 *
	 * @async
	 * @function patch
	 * @memberof httpClient
	 * @param {String} url - The server URL.
	 * @param {Object} [params] - Query parameters as key-value pairs.
	 * @param {Object} body - The request body to be sent.
	 * @returns {Promise<Object>} The response data parsed as JSON.
	 * @throws Will throw an error with the specified error message and error details if the request fails.
	 */
	patch: async function (url, params, body) {
		try {
			const URL = setURL(url, params);
			const response = await fetch(URL, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			});
			if (!response.ok) throw new Error(response.status);
			const data = await response.json();
			return data;
		} catch (error) {
			throw Error(error);
		}
	},

	/**
	 * HTTP DELETE request
	 *
	 * @async
	 * @function delete
	 * @memberof httpClient
	 * @param {String} url - The server URL.
	 * @param {Object} [params] - Query parameters as key-value pairs.
	 * @returns {Promise<Object>} The response data parsed as JSON.
	 * @throws Will throw an error with the specified error message and error details if the request fails.
	 */
	delete: async function (url, params) {
		try {
			const URL = setURL(url, params);
			const response = await fetch(URL, {
				method: 'DELETE',
			});
			if (!response.ok) throw new Error(response.status);
			const data = await response.json();
			return data;
		} catch (error) {
			throw Error(error);
		}
	},
};

export default httpClient;
