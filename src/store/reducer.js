import { Actions } from "./actions";
const initialState = {
  identity: "",
  isRoomHost: false,
  roomId: null,
  connectOnlyWithAudio: false,
  showOverLay: true,
  Participants: [],
};

function reducer(state = initialState, action) {
  console.log(action, state);
  switch (action.type) {
    case Actions.SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.isRoomHost,
      };
    case Actions.Connection_only_With_Audio:
      return {
        ...state,
        connectOnlyWithAudio: action.connectOnlyWithAudio,
      };
    case Actions.RoomId:
      return {
        ...state,
        roomId: action.RoomId,
      };
    case Actions.Identity:
      return {
        ...state,
        identity: action.identity,
      };
    case Actions.SET_SHOW_OVERLAY:
      return {
        ...state,
        showOverLay: action.showOverLay,
      };
    case Actions.SET_PARTICIPANTS:
      return {
        ...state,
        Participants: action.Participants,
      };
    default: {
      console.log(action.type);
      return state;
    }
  }
}

export default reducer;
