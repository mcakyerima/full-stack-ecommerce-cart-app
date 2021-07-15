import { FETCH_PRODUCT_REQUEST } from "../type";

export const productReducer = (state = {} , action) => {
    switch ( action.type) {
        case FETCH_PRODUCT_REQUEST: 
            return {items: action.payload}
        default: 
            return state;
    }
}