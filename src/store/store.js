import { legacy_createStore as createstore } from "redux";
import reducer from "./reducer";

const store = createstore(reducer);

export default store;