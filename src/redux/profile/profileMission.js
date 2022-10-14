const JOIN_MISSION = 'spacehub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spacehub/missions/LEAVE_MISSION';

const initialSate = {
  reserved: [],
  joined: [],
};
// Create mision Action
export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

// Create Leave mission action
export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const profileReducer = (state = initialSate, action = {}) => {
  switch (action.type) {
    case JOIN_MISSION:
      return {
        ...state,
        joined: [...state.joined, action.payload],
      };
    case LEAVE_MISSION:
      return {
        ...state,
        joined: state.joined.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default profileReducer;
