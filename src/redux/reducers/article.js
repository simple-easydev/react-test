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
            // articles[action.id].isRead = true;

            articles.forEach(element => {
                if (element.id == action.id){
                    element.isRead = true;
                }
            });

            return {
                ...state,
                articles
            };
        case actionTypes.ARTICLE_DELETE:
            // console.log(action.id);
            // console.log(state.articles);
            var articles = state.articles.filter(function( obj ) {
                return obj.id !== action.id;
              });
            return {
                ...state,
                articles
            };
        default: return state;
    }
};