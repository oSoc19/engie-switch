/*
 * Config
 * TODO move to .env file
 */
const BASE_URL = 'http://localhost:3000'
const DEBUG = true

/*
 * Local functions
 */
function getMyUser() {
  if(localStorage.getItem("switch_token")) {
    window.console.log('fetchUser')
    return fetchUser()
  } else {
    window.console.log('createUser')
    return createUser()
  }
}

function createUser() {
  let randomNr = Math.floor(Math.random() * 1e6);
  let user = {
    username: "Anonymous " + randomNr,
    profilePic: '',
    points: 0
  };

  return apiCall('/users', user).then((data) => {
    localStorage.setItem("switch_token", data.token);
    return data.user
  });
}

function fetchUser() {
  return apiCall('/users/login', null, true);
}
/*
 * TODO call initAuth() at first auth
 * but initAuth has to be run only once, even if 2 apiCall
 * this way, initAuth should not be call (and known) by user
 */
function apiCall(path, data=null, auth=false) {
  let promise = new Promise((resolve, reject) => {
    window.$.ajax(BASE_URL+path, {
      data : data ? JSON.stringify(data) : null,
      contentType : data ? 'application/json' : null,
      type : data ? 'POST' : 'GET',
      headers: auth ? {'Authorization': localStorage.getItem("switch_token")} : {},
    })
    .done(resolve)
    .fail(reject);
  })
  if(DEBUG) {
    // always not available averywhere
    promise.then(data => window.console.log(path, data))
    promise.catch(err => window.console.log(path, err))
  }
  return promise;
}

/*
 * External functions
 */
function getPosts() {
  return apiCall('/posts')
}

function getChallenges() {
  return apiCall('/challenges')
}

function getUsers() {
  return apiCall('/users')
}

function getUser(id=null) {
  if(id) {
    return apiCall('/users/'+id)
  } else {
    return getMyUser();
  }
}

export default {
  getPosts,
  getChallenges,
  getUsers,
  getUser,
}
