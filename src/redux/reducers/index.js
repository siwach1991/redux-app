import { combineReducers } from "redux";
import { productsReducer } from "./productReducer";

const reducer = combineReducers({
    allProduct:productsReducer
});

export default reducer ;

