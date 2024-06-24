
import { createStore } from 'redux';
import rootReducer from "./redux/reducer/reducer";

 const store = createStore(rootReducer);

 export default store;