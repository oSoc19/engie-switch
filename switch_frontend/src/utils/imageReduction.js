//import config from '@/config'

function createCanvas(image){
    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = event => {
        const img = new Image();
        img.src = event.target.result;
    }
}


export default{
    createCanvas,
}