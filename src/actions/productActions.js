import { FETCH_PRODUCT_REQUEST } from "../type";

export const fetchProducts = () => async (dispatch) => {
    //fetch data from server
    const res = await fetch("api/products");
    console.log(res.data)
    //collect res.data which contain list of products and dispatch that as actions
    //dispatch accepts an objects an this object contain two values...the first one is type and the second is the payload that contains the datea
    dispatch({
        type: FETCH_PRODUCT_REQUEST,
        payload: res.data
    })
}