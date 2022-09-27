import * as api from '../api'

//* Action Creators
export const getPosts = () => async (dispatch) =>{
    api.fetchPosts()
        .then(({data})=>{
            console.log("GETPOSTS!");
            dispatch({type: "FETCH_ALL",
            payload: data})
        })
        .catch((error)=>{
            console.log(error)
        })
}