import { ActionType } from "../constants/actionType"

 const initialState={
     Products:[],
 }

 export const ProductReducer=(state=initialState,{type,payload})=>
 {
     switch(type)
     {
         case ActionType.SET_PRODUCT:return {
             ...state,Products:payload
         }
         default:return state
     }
 }
 
 export const SingleProductReducer=(state={},{type,payload})=>
 {
     switch(type)
     {
         case ActionType.SELECTED_PRODUCT:return {
            ...state,...payload
        }
        case ActionType.REMOVE_SELECTED_PRODUCT:return {
        }
         default:return state
     }
 }

 