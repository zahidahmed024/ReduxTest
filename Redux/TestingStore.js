import { createStore , combineReducers } from 'redux';

const initState = {
       name:['zahid']
}

const testNames=(state = initState, action)=>{
        if(action.type === 'ADD_NAME'){
            return{
                ...state,
                name: state.name.push("Kiwi")
            }
        }
        return state;

}
const rootReducer = combineReducers({
    first: testNames,
    
});
export const TestingStore =createStore(rootReducer);