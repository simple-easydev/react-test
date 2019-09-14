import axios from 'axios'


export const host = 'localhost:3001';
export const apiUrls = {
	GET_ALL: host + '/articles',
	// GET_BLOCK: apiRoot + '/explorer/getBlock'
};

export function getArticles(callback) {
	axios({
		headers: {'Access-Control-Allow-Origin': '*'},
		method: 'get',
		url: apiUrls.GET_ALL,
		// data: data,
		responseType: 'json',

	}).then((response) => {
		callback(response);
	});
}