export const ADD_PROFILE = "profile/added";
export const REMOVE_PROFILE = "profile/remove";
export const CALCULATE_AVERAGE_AGE = "profile/calculateAverageAge";

export const addProfile = (profile) => ({
  type: ADD_PROFILE,
  payload: profile,
});

export const removeProfie = (profileId) => ({
  type: REMOVE_PROFILE,
  payload: profileId,
});

export const calculateAverageAge = () => ({
  type: CALCULATE_AVERAGE_AGE,
});
