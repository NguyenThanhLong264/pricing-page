// const imageNames = generateImageNames('logo', 1, 24, ['png']);
// const slider = document.getElementById('logo-slider');
// const imgList = [];

// let loadedCount = 0;

// // function logo() {
// imageNames.forEach(name => {
//     const img = new Image();
//     img.src = `img/logos/${name}`;
//     img.alt = name;

//     img.onload = () => {
//         imgList.push(img.cloneNode());
//         loadedCount++;
//         checkDone();
//     };

//     img.onerror = () => {
//         loadedCount++;
//         checkDone();
//     };
// });

// function checkDone() {
//     if (loadedCount === imageNames.length) {
//         finalizeSlider();
//     }
// }

// function finalizeSlider() {
//     imgList.forEach(img => {
//         slider.appendChild(img.cloneNode());
//     });
//     imgList.forEach(img => {
//         slider.appendChild(img.cloneNode());
//     });
// }

// function generateImageNames(prefix, start, end, extensions) {
//     const result = [];
//     for (let i = start; i <= end; i++) {
//         extensions.forEach(ext => {
//             result.push(`${prefix} (${i}).${ext}`);
//         });
//     }
//     return result;
// }

const slides = document.querySelector('.gallery');
const prevBtn = document.getElementById('gallery-prev');
const nextBtn = document.getElementById('gallery-next');

let offset = 0;
let speed = 500;

// Hàm cập nhật transform
function updatePosition() {
    console.log('debug', offset);
    slides.style.animationPlayState = 'paused'; // dừng auto scroll
    slides.style.transform = `translateX(${offset}px)`;
    setTimeout(() => {
        slides.style.animationPlayState = 'running'; // tiếp tục
    }, 1000);
}

prevBtn.addEventListener('click', () => {
    offset += speed;
    updatePosition();
});

nextBtn.addEventListener('click', () => {
    offset -= speed;
    updatePosition();
});
