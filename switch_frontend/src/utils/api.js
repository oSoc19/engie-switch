const BASE_URL = 'http://localhost:3000'
let user = null;


/*
 * Local functions
 */
function createUser() {
  let randomNr = Math.floor(Math.random() * 1e6);
  user = {
    username: "Anonymous " + randomNr,
    profilePic: '',
    points: 0
  };

  return apiCall('/users', user).then((data) => {
    localStorage.setItem("switch_token", data.token);
    user = data
  });
}

function fetchUser() {
  return apiCall('/users/login', null, true);
}

function apiCall(path, data=null, auth=false) {
  return new Promise((resolve, reject) => {
    window.$.ajax(BASE_URL+path, {
      data : data ? JSON.stringify(data) : null,
      contentType : data ? 'application/json' : null,
      type : data ? 'POST' : 'GET',
      headers: auth ? {'Authorization': localStorage.getItem("switch_token")} : {},
    })
    .done(resolve)
    .fail(reject);
  })
}

/*
 * External functions
 */
function initAuth() {
  if(user) {
    return Promise.resolve(user);
  }
  if(localStorage.getItem("switch_token")) {
    return fetchUser()
  } else {
    return createUser()
  }
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
  initAuth,
  getPosts,
  getChallenges,
  getUsers,
  getUser,
}
