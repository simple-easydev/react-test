import { actionTypes } from '../actions';

let initState = {
    articles: [
    ]
};

export default (state = initState, action) => {

    switch (action.type) {
        case actionTypes.ARTICLE_SET_ALL:
            return {
                ...state,
                articles: action.articles
            };
        case actionTypes.ARTICLE_READ:
            // console.log(action.id);
            // console.log(state.articles);
            var articles = state.articles;
            articles[action.id].isRead = true;
            
            return {
                ...state,
                articles
            };

        default: return state;
    }
};