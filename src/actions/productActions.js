import { FETCH_PRODUCT_REQUEST } from "../type";

export const fetchProducts = () => async (dispatch) => {
    //fetch data from server
    const res = await fetch("/api/products");
    const data =  await res.json()
    console.log("this is" , data)
    //collect res.data which contain list of products and dispatch that as actions
    //dispatch accepts an objects an object, and this object has two values...the first one is type and the second is the payload that contains the data
    dispatch({
        type: FETCH_PRODUCT_REQUEST,
        payload: data,
    });
};