let getRequest = (url) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url); // false for synchronous request
    xmlHttp.send();
    return xmlHttp.responseText;
}

export default getRequest;