const SET_POSTS = (state, payload) => {
  state.posts = payload
}

const SET_POST = (state, payload) => {
  state.post = payload
}

const CLEAR_POST = (state) => {
  state.post = {}
}

export {
  SET_POSTS,
  SET_POST,
  CLEAR_POST
}
