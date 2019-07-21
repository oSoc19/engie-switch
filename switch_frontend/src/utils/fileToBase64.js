
export default function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    }
    reader.onerror = reject;
    reader.readAsDataURL(file);
  })
}
