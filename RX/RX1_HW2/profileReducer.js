import { ADD_PROFILE, CALCULATE_AVERAGE_AGE, REMOVE_PROFILE } from "./actions";

const initialState = { profiles:[],averageAge:0 };

function profileReducer(state = initialState, action) {
  console.log(action.type, action.payload)
  switch (action.type) {
    case ADD_PROFILE:
      return {
        ...state,
        profiles: [...state.profiles, action.payload],
      };
    case REMOVE_PROFILE:
      return {
        ...state,
        profiles: state.profiles.filter(
          (profile) => profile.id !== action.payload
        ),
      };
    case CALCULATE_AVERAGE_AGE:
      const total = state.profiles.reduce(
        (totalAge, profile) => totalAge + parseInt(profile.age),
        0
      );
      const avgAge = state.profiles.length > 0 ? total / state.profiles.length:0;
      return {
        ...state,
        averageAge:avgAge
      }
  }
}

export default profileReducer;
