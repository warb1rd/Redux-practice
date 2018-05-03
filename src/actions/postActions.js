import { FETCH_POST, NEW_POST, FETCH_POSTS } from './types';

export const fetchPosts = () => (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(apiResponse => apiResponse.json())
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
            }))    
}


export const createPost = (postData) => (dispatch) => {
    console.log("action called")
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(postData)
    })
    .then(apiResponse => apiResponse.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }))  
}