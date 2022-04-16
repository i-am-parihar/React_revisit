import {createStore , combineReducers , applyMiddleware} from "redux" ;
import { loginReducer } from "./login/reducer";
import { productReducer } from "./products/reducer";
import { signupReducer } from "./signUp/reducer";
import thunk from "redux-thunk" ;


export const rootReducer = combineReducers({
    signUp : signupReducer ,
    login : loginReducer ,
    products : productReducer ,
})

export const store = createStore(rootReducer , applyMiddleware(thunk)) ;