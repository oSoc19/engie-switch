
function resizeCanvas(canvas, newWidth, newHeight) {
    var newCanvas = document.createElement('canvas');
    newCanvas.width = newWidth;
    newCanvas.height = newHeight;
    newCanvas.getContext('2d').drawImage(canvas, 0, 0, newWidth, newHeight);
    return newCanvas;
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    }
    reader.onerror = reject;
    reader.readAsDataURL(file);
  })
}

function fromSrc(src) {
  return new Promise(resolve => {
    let img = new Image();
    img.onload = (load) => resolve(load.target);
    img.src = src;
  })
}
/*
 * Reduce the size of the image by 2,
 * until one of the dimensions are below max
 */
function resize(img, max) {
    var canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);

    while (canvas.width >= 2*max && canvas.height >= 2*max) {
        canvas = resizeCanvas(canvas, canvas.width/2, canvas.height/2)
    }
    return canvas.toDataURL('image/jpeg')
}

function prepare(file, imagePreview, max) {
  return new Promise(resolve => {
    // imagePreview is used to get size and convert to canvas
    imagePreview.onload = () => resolve(resize(imagePreview, max));
    // read file as base64 and populate imagePreview
    toBase64(file).then(data => imagePreview.src = data);
  })
}

export default{
  toBase64,
  fromSrc,
  resize,
  prepare,
}
