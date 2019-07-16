/**
 * sends a request to the specified url from a form. this will change the window location.
 * @param {string} path the path to send the post request to
 * @param {object} body the paramiters to add to the url
 * @param {string} [method=post] the method to use on the form
 */

let postRequest = async (path, body, method = 'post') => {

    let posts = await fetch(path, {
        method: method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    return posts;
}

export default postRequest