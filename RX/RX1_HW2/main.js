import { createStore } from "redux";
import profileReducer from "./profileReducer";
import { addProfile, calculateAverageAge, removeProfie } from "./actions";

const store = createStore(profileReducer);

const profileList = document.querySelector("#profile_list");
const averageAge = document.querySelector("#averageAge");
const profileId = document.querySelector("#profileId");
const profileName = document.querySelector("#name");
const profileAge = document.querySelector("#age");
const addProfileBtn = document.querySelector("#add_profile");

const removeId = document.querySelector('#remove_id');
const removeProfileBtn = document.querySelector('#remove_profile_btn');


// function addnew profile and dispatch action payload;
addProfileBtn.addEventListener("click", addNewProfile);

function addNewProfile() {
  let newProfile = {
    id: parseInt(profileId.value),
    name: profileName.value,
    age: profileAge.value,
  };
  store.dispatch(addProfile(newProfile));
  store.dispatch(calculateAverageAge());
}

// function to remove profile and pass profile id in action payload
removeProfileBtn.addEventListener('click',removeProfieById);

function removeProfieById(){
  const profileId = parseInt(removeId.value);
  store.dispatch(removeProfie(profileId))
  store.dispatch(calculateAverageAge())
}


// initial Profiles
const profiles = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

// adding initial profiles to the store
profiles.forEach((profile) => {
  store.dispatch({ type: "profile/added", payload: profile });
});

// Subscribe to store updates
store.subscribe(() => {
  console.log(store.getState());
  const state = store.getState();
  renderProfiles(state.profiles);
  renderAverageAge(state.averageAge);
});

// function to render profiles
function renderProfiles(profiles) {
  profileList.innerHTML = profiles
    .map(
      (profile) => `
  <li>
  ${profile.id}  ${profile.name} - ${profile.age} (Years Old)
  </li>
  `
    )
    .join(" ");
}

// render average age
function renderAverageAge(avgAge) {
  averageAge.textContent = `Average Age: ${avgAge.toFixed(2)} Years`;
}
// Calculate average age initially
store.dispatch(calculateAverageAge());

const calculateAverageAgeHandler = () => {
  store.dispatch(calculateAverageAge());
};

window.calculateAverageAgeHandler = calculateAverageAgeHandler;
