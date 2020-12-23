import * as types from "../constants/constTypes";
import {getTrackInfo} from "../services/lastFMAPI";

export function getTrack(name, song) {
    return async (dispatch) => {
        const trackInfo = await getTrackInfo(name, song).then((result) => {
            console.log('Result track info server -->', result.data);
            return result.data;
        });

        dispatch({
            type: types.ADD_TRACK,
            payload: trackInfo.results.trackmatches.track
        });
    };
}