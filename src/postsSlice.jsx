import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => { 
      state.posts.push(action.payload);
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
   deletePost :(state, action)=>{
    const {id} = action.payload
    console.log(" i am from delete post" )
    console.log(action.payload)
    const deletefieldindex = state.posts.findIndex((object)=> object.id=== id)
    if(deletefieldindex  !== -1){
     state.posts =  state.posts.filter((object)=>object.id !== id )
    }

   }
   
  

  },
});

export const { addPost, updatePost, deletePost  } = postsSlice.actions;

export default postsSlice.reducer;










