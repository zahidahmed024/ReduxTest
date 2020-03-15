import * as actions from './Types'

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
             let res = await fetch('https://jsonplaceholder.typicode.com/todos'); 
                let data = await res.json();
                 
                dispatch({
                    type: actions.GETDATA,
                    posts: data
                });
            
        } catch (error) {
            console.log(error.message);
        }
    };
};