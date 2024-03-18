import { ActionTypes } from "../constant/constant.js"

const intitailState={
    products:[]
}
export const productsReducer = (state=intitailState,{type,payload})=>{
    
     switch(type){
        case ActionTypes.SET_PRODUCTS :
            return {...state,products:payload};
        default :
        return state;

     }

}
