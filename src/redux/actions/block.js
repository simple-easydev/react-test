import { actionTypes } from './index';

export const setEthState = (ethstatus) => dispatch => {
	dispatch({
		type: actionTypes.GET_ETH_STATUS,
		ethstatus
	});
};