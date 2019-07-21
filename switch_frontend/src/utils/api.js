
import config from '@/config'

/*
 * Local functions
 */
function getMyUser() {
  if(localStorage.getItem("switch_token")) {
    if(config.DEBUG) {
      window.console.log('fetchUser')
    }
    return fetchUser()
  } else {
    if(config.DEBUG) {
      window.console.log('createUser')
    }
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
    window.$.ajax(config.API_BASE_URL+path, {
      data : data ? JSON.stringify(data) : null,
      contentType : data ? 'application/json' : null,
      type : data ? 'POST' : 'GET',
      headers: auth ? {'Authorization': localStorage.getItem("switch_token")} : {},
    })
    .done(resolve)
    .fail(reject);
  })
  if(config.DEBUG) {
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

function getChallenge(id) {
  return apiCall('/challenges/'+id)
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

function postPost(post) {
  return apiCall('/posts', post, true);
}

export default {
  getPosts,
  getChallenges,
  getChallenge,
  getUsers,
  getUser,
  postPost,
}
