const imgWidth = 1600;
const imgCount = 10;
const jpg = 'jpg';
const imgDirect = 'imgs';
const imgTotalWidth = imgWidth * imgCount;

const images = document.querySelector('.images');

for (let i = 0, filename = 1; i < imgCount; i++, filename++) {
let img = document.createElement('img');
    img.src = `${imgDirect}/${filename}.${jpg}`;
    images.appendChild(img);
}


let position = 0

document.querySelector('.arrow_left').onclick = () => {
    if (position > 0) {
        position-=imgWidth;
        images.style.marginLeft = -position +'px';
    }
}

document.querySelector('.arrow_right').onclick =() => {
    if (position < imgTotalWidth) {
        position+=imgWidth;
        images.style.marginLeft = -position +'px';
    }
}