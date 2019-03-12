export default function(state={}, action) {
	switch(action.type) {
		case 'EMAIL_LIST':
		  return {...state, emails: action.payload}
		 case 'EMAIL_BY_ID':
		  return {...state, email: action.payload}
		default:
		  return state;
	}
}