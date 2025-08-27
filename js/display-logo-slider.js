const carousel = document.querySelector('.logo-gallery-wrapper');
const gallery = document.getElementById('logo-slider');
const prevBtn = document.getElementById("gallery-prev");
const nextBtn = document.getElementById("gallery-next");

const imgSrcList = generateImgSrc(48);
const imgQueue = [];
let singleImgWidth = 150;

const startIdx = 10
let currentIndex = startIdx; // đã load 13 cái đầu
let offset = 0; // vị trí dịch hiện tại
let clickTimeOut = 500 //ms

function generateImgSrc(total) {
    const arr = [];
    for (let i = 1; i <= total; i++) {
        arr.push(`img/logos/logo (${i}).png`);
    }
    return arr;
}

function initialQueue() {
    const first13 = imgSrcList.slice(0, startIdx);
    imgQueue.push(...first13);
    generateFristLoad();
}

function generateFristLoad() {
    gallery.innerHTML = "";
    console.log("Length:", imgQueue.length);
    imgQueue.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = src;
        img.style.width = singleImgWidth + "px";
        gallery.appendChild(img);
    });
}
let carouselInterval = null;

function startCarousel() {
    if (carouselInterval) return; // nếu đang chạy thì không tạo mới
    carouselInterval = setInterval(() => {
        gallery.style.animation = "scroll 1s ease 1";
        gallery.addEventListener("animationend", () => {
            gallery.style.animation = "none";
            imgQueue.shift();
            imgQueue.push(imgSrcList[currentIndex % imgSrcList.length]);
            currentIndex++;
            generateFristLoad();
        }, { once: true });
    }, 1500);
}

function stopCarousel() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

carousel.addEventListener("mouseenter", stopCarousel);
carousel.addEventListener("mouseleave", startCarousel);

let clickAble = true;

let isAnimating = false;

function waitAnimationEnd(element) {
    return new Promise(resolve => {
        element.addEventListener("animationend", () => resolve(), { once: true });
    });
}

async function handleNext() {
    if (isAnimating) return;
    isAnimating = true;

    gallery.style.animation = `scrollNext ${clickTimeOut}ms ease 1`;
    await waitAnimationEnd(gallery);

    gallery.style.animation = "none";
    imgQueue.shift();
    imgQueue.push(imgSrcList[currentIndex % imgSrcList.length]);
    currentIndex++;
    imgQueue.shift();
    imgQueue.push(imgSrcList[currentIndex % imgSrcList.length]);
    currentIndex++;
    generateFristLoad();

    isAnimating = false;
}

async function handlePrev() {
    if (isAnimating) return;
    isAnimating = true;

    gallery.style.animation = `scrollPrev ${clickTimeOut}ms ease 1`;
    await waitAnimationEnd(gallery);

    gallery.style.animation = "none";
    imgQueue.pop();
    imgQueue.pop();
    currentIndex -= 2;
    if (currentIndex < 0) currentIndex += imgSrcList.length;
    imgQueue.unshift(imgSrcList[(currentIndex) % imgSrcList.length]);
    imgQueue.unshift(imgSrcList[(currentIndex + 1) % imgSrcList.length]);
    generateFristLoad();

    isAnimating = false;
}

// Sửa startCarousel để dùng cùng flag
function startCarousel() {
    if (carouselInterval) return;
    carouselInterval = setInterval(async () => {
        if (isAnimating) return;
        isAnimating = true;

        gallery.style.animation = "scroll 1s ease 1";
        await waitAnimationEnd(gallery);

        gallery.style.animation = "none";
        imgQueue.shift();
        imgQueue.push(imgSrcList[currentIndex % imgSrcList.length]);
        currentIndex++;
        generateFristLoad();

        isAnimating = false;
    }, 1500);
}
nextBtn.addEventListener("click", () => {
    if (!clickAble) return;
    clickAble = false;
    handleNext();
    setTimeout(() => {
        clickAble = true;
    }, clickTimeOut);
});
prevBtn.addEventListener("click", () => {
    if (!clickAble) return;
    clickAble = false;
    handlePrev();
    setTimeout(() => {
        clickAble = true;
    }, clickTimeOut);
});

initialQueue();
startCarousel();
