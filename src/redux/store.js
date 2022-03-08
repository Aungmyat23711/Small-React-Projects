import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const initialState = {
  userData: [
    {
      userName: "Aung Myint Myat",
      age: 20,
      job: "Web Developer",
    },
  ],
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "Logout User":
      return { ...state, userData: action.payload };
    case "Set Data":
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
const persistConfig = {
  key: "use-key",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);
export default store;
export { persistor };
