import {createStore , applyMiddleware ,compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/productReducers";

const initialState = {}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//we are using combineReducer to combine all the reducers we have.. in our case we only have one reducer productReducer
const store = createStore(combineReducers({
    products: productReducer,
}),
    initialState ,
    composeEnhancer(applyMiddleware(thunk))
    );
export default store;