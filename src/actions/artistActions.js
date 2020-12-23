import * as types from "../constants/constTypes";
import {getArtistInfo} from "../services/lastFMAPI";

export function getArtist(name) {
    return async (dispatch) => {
        const artistInfo = await getArtistInfo(name).then((result) => {
            console.log('Result artist info server-->', result.data);
            return result.data;
        });

        dispatch({
            type: types.ADD_ARTIST,
            payload: artistInfo.artist
        });
    };
}