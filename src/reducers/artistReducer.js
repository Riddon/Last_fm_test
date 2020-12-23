import * as types from "../constants/constTypes";

const initState = {
    artistInfo: {}
};

const artistReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_ARTIST:
            return {
                ...{ artistInfo: action.payload }
            };

        default:
            return state;
    }
};

export default artistReducer;