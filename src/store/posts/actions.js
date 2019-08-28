import { HTTPClient } from 'boot/axios'

// const setPosts = ({ commit }, obj) => {
//   return new Promise((resolve, reject) => {
//     HTTPClient.get(`v2/posts`)
//       .then((suc) => {
//         console.log('Requisição Posts', suc)
//         commit('SET_POST', suc.data)
//         resolve(suc.data)
//       })
//       .catch((err) => {
//         console.error(err)
//         reject(err)
//       })
//   })
// }

const setPosts = ({ commit, rootState }, obj) => {
  // commit('Utils/SET_LOAD', true, { root: true })
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

export {
  setPosts
}
