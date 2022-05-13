import { SIGN_IN, SIGN_OUT, ACCOUNT_TYPE } from "../actions/types";

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null,
    detailsType: null
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null, detailsType: false };
        case ACCOUNT_TYPE:
            return { ...state, detailsType: action.payload };
        default:
            return state;
    }
};

export default reducer;