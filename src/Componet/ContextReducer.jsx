import React, { Children, createContext, useContext, useReducer } from 'react'
const CartStateContext = createContext();
const CartDispatchContext = createContext();
const reducer =(state,action)=>{
switch(action.type){
    case "ADD":
        return[...state,{id:action._id, name:action.name ,description:action.description,price:action.price}]
        default:
            console.log("errore")
}
}
export const CardProvider =({Children})=>{
    const [state,dispatch] =useReducer(reducer,[]);
    return(
<CartDispatchContext.Provider value={dispatch}>
<CartStateContext.Provider value={state}>
{Children}
</CartStateContext.Provider>
</CartDispatchContext.Provider>
    )
}
export const useCard =()=>{useContext(CartStateContext)}
export const useDispatch =()=>{useContext(CartDispatchContext)}