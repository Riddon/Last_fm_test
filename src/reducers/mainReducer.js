import { combineReducers } from "redux";
import topListSongsReducer from "./topListSongsReducer";
import artistReducer from "./artistReducer";
import trackReducer from "./trackReducer";

export default combineReducers({
  topListSongsReducer,
  artistReducer,
  trackReducer
});
