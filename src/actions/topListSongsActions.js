import * as types from "../constants/constTypes";
import {getTopListSongs} from "../services/lastFMAPI";

export function getTopList() {
    return async (dispatch) => {
        const topListSongs = await getTopListSongs().then((result) => {
            console.log('Result top list server-->', result.data);
            return result.data;
        });

        dispatch({
            type: types.ADD_TOP_LIST,
            payload: topListSongs.tracks.track
        });
    };
}