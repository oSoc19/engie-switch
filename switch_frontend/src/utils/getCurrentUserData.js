/**
 * 
 * @param {string} pathToGetId the path to send to get request to
 * @param {string} token for auth
 * @param {string} [method=get]
 */
let getCurrentUserData = async (pathToGetId, token, method = "GET") => {

    let userId = ""
    await fetch(pathToGetId, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Authorization': token,
            "Content-type": "application/json"
        },
        mode: 'cors'
    }).then((data) => {

        return data.text()

    }).then((data) => {

        return data


    }).then((id) => {
        userId = JSON.parse(id).id
    })

    let userData = ""
    await fetch("http://localhost:3000/users/" + userId)
        .then((data) => {

            return data.text()

        }).then((data) => {

            userData = JSON.parse(data)
        })

    return userData


    // setInterval(() => {
    //     console.log(data)
    // }, 200);

}

export default getCurrentUserData