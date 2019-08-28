import { HTTPClient } from 'boot/axios'

const setPosts = ({ commit }) => {
  return new Promise((resolve, reject) => {
    HTTPClient.get(`v2/posts`, {})
      .then((suc) => {
        console.log(suc)
        commit('SET_POSTS', suc.data)
        resolve(suc.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const setPost = ({ commit }, id) => {
  return new Promise((resolve, reject) => {
    HTTPClient.get(`v2/posts/${id}`, {})
      .then((suc) => {
        console.log('POST', suc)
        commit('SET_POST', suc.data)
        resolve(suc.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export {
  setPosts,
  setPost
}
