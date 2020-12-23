import * as types from "../constants/constTypes";

const initState = {
    trackInfo: []
};

const trackReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_TRACK:
            return {
                ...{ trackInfo: action.payload }
            };

        default:
            return state;
    }
};

export default trackReducer;