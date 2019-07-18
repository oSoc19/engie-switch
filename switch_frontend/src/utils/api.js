const BASE_URL = 'http://localhost:3000'

function apiCall(path, data=null, auth=false) {
  if(auth) {
    // TODO add Authorization header
  }
  return new Promise((resolve, reject) => {
    window.$.getJSON(BASE_URL+path, data)
      .done(resolve)
      .fail(reject);
  })
}

function getPosts() {
  return apiCall('/posts')
}

function getChallenges() {
  return apiCall('/challenges')
}

function getUsers() {
  return apiCall('/users')
}

function getUser(id) {
  return apiCall('/users/'+id)
}

export default {
  getPosts,
  getChallenges,
  getUsers,
  getUser,
}
