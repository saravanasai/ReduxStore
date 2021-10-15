import { combineReducers } from "redux";
import  {ProductReducer, SingleProductReducer } from "./ProductReducer";


 const rootReducer = combineReducers({
    allProducts:ProductReducer,
    singleProduct:SingleProductReducer
})

export default rootReducer