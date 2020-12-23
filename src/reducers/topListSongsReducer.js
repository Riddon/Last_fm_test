import * as types from "../constants/constTypes";

const initState = {
    topListSongs: []
};

const topListSongsReducer = (state = initState, action) => {
    switch (action.type) {
        case types.ADD_TOP_LIST:
            return {
                ...{ topListSongs: action.payload }
            };

        default:
            return state;
    }
};

export default topListSongsReducer;