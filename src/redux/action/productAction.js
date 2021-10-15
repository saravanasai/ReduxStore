import { ActionType } from "../constants/actionType"

export const setProduct=(products)=>
{
    return {
        type:ActionType.SET_PRODUCT,
        payload:products
    }
}

export const selectProduct=(product)=>
{
    return {
        type:ActionType.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectProduct=()=>
{
    return {
        type:ActionType.REMOVE_SELECTED_PRODUCT,
    }
}