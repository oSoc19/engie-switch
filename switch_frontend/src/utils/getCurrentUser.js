import getRequest from './getRequest'
/**
 * 
 * @param {string} path the path to send to get request to
 * @param {string} token for auth
 * @param {string} [method=get]
 */
let getUserData = async (path, token, method = "get") => {

    let userId = await fetch(path, {
        method: method,
        headers: {
            "Content-Type": "application/json",
            'Authorization': token
        },
    })

    getRequest("http://localhost:3000/users/" + userId).then((userData) => {
        return userData
    });
}

export default getUserData