
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
  let params = {headers: {}};
  if(data) {
    params.method = 'POST';
    params.headers['Content-Type'] = 'application/json';
    params.body = JSON.stringify(data);
  }
  if(auth) {
    params.headers['Authorization'] = localStorage.getItem("switch_token");
  }
  return fetch(config.API_BASE_URL+path, params).then(res => {
    if(!res.ok) { // check 2xx status code
      throw new Error(res.status+' '+res.statusText);
    }
    return res.json();
  });
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

function getTop10() {
  return apiCall('/users/top10users');
}

export default {
  getPosts,
  getChallenges,
  getChallenge,
  getUsers,
  getUser,
  postPost,
  getTop10,
}
