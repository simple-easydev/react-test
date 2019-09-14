import { actionTypes } from './index';

export const setArticles = (articles) => dispatch => {
	dispatch({
		type: actionTypes.ARTICLE_SET_ALL,
		articles
	});
};

export const setArticleRead = (id) => dispatch => {
	dispatch({
		type: actionTypes.ARTICLE_READ,
		id
	});
};
