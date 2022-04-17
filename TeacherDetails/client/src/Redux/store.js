import {createStore , combineReducers , applyMiddleware} from "redux" ;
import { loginReducer } from "./login/reducer";
import { regReducer } from "./Registration/reducer";
import thunk from "redux-thunk" ;
import { composeWithDevTools } from "redux-devtools-extension"; 
import { dataReducer } from "./Home/reducer";


export const rootReducer = combineReducers({
    registration : regReducer ,
    login : loginReducer ,
    teacherData : dataReducer ,
})


export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk) ) );