let getBase64Image = (img, width, height) => {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL
    //return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

export default getBase64Image;