import getRequest from './getRequest'
/**
 * 
 * @param {string} path the path to send to get request to
 * @param {string} token for auth
 * @param {string} [method=get]
 */
let getCurrentUserData = async (path, token, method = "get") => {

    let userId = await fetch(path, {
        method: method,
        headers: {
        },
    })

    setInterval(function () {
        window.console.log(userId)
    }, 3000);



    getRequest("http://localhost:3000/users/" + userId).then((userData) => {
        return userData
    });
}

export default getCurrentUserData