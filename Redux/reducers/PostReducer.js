import * as actions from '../actions/Types'


const initialState = {
    posts: [],
    counter:0
};
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GETDATA: {
            return {
                ...state,
                posts: action.posts,
                counter: state.counter+1
            };
        };
        default: return state;
    }
}
export default postReducer;