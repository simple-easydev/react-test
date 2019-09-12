import { actionTypes } from '../actions';

let initState = {
	blocks: []
};

export default (state=initState, action) => {
	
	switch (action.type){
		case actionTypes.GET_ETH_STATUS:
			if (state.blocks.length > 0){
				// eslint-disable-next-line eqeqeq
				if (action.ethstatus.block.number == state.blocks[0].number) return state;
			}

			state.blocks.unshift(action.ethstatus.block);
			return {
				...state
			};
		default: return state;
	}
};