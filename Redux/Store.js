const redux = require('redux');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//Initial State
const initialState = {
    counter: 0,
    name: 'Milon'
};

const otherInitialState = {
    timer: 0
}

//create reducer
const firstReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === 'ADD_FIVE_COUNTER') {
        return {
            ...state,
            counter: state.counter + 5
        }
    }

    if (action.type === 'CLEAR') {
        return initialState;
    }

    return state;
};

const secondReducer = (state = otherInitialState, action) => {
    if (action.type === 'ADD_VALUE') {
        return {
            ...state,
            timer: state.timer + action.value
        };
    }

    if (action.type === 'CLEAR') {
        return otherInitialState;
    }

    return state;
};

const rootReducer = combineReducers({
    first: firstReducer,
    second: secondReducer
});

export default  store = createStore(rootReducer);
// console.log(store)
// console.log(store.getState());


// store.subscribe(()=>{
//     console.log('[SUBSCRIBE]: ',store.getState());
// })


// //Dispatch Action
// store.dispatch({ type: 'INC_COUNTER' });
// store.dispatch({ type: 'ADD_FIVE_COUNTER' });


// //Second reducer
// store.dispatch({ type: 'ADD_VALUE', value: 5 });
// store.dispatch({ type: 'CLEAR' });




console.log(store.getState());