const carousel = document.querySelector('.logo-gallery-wrapper');
const gallery = document.getElementById('logo-slider');
const prevBtn = document.getElementById("gallery-prev");
const nextBtn = document.getElementById("gallery-next");

const imgSrcList = generateImgSrc(15);
const imgQueue = [];
let singleImgWidth = 150;

let currentIndex = 13; // đã load 13 cái đầu
let offset = 0; // vị trí dịch hiện tại

function generateImgSrc(total) {
    const arr = [];
    for (let i = 1; i <= total; i++) {
        arr.push(`img/logos/logo (${i}).png`);
    }
    return arr;
}

function initialQueue() {
    const first13 = imgSrcList.slice(0, 13);
    imgQueue.push(...first13);
    generateFristLoad();
}

function generateFristLoad() {
    gallery.innerHTML = "";
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
function handleNext() {
    gallery.style.animation = "scrollNext 0.2s ease 1";
    gallery.addEventListener("animationend", () => {
        gallery.style.animation = "none";
        imgQueue.shift();
        imgQueue.push(imgSrcList[currentIndex % imgSrcList.length]);
        currentIndex++;
        imgQueue.shift();
        imgQueue.push(imgSrcList[currentIndex % imgSrcList.length]);
        currentIndex++;
        generateFristLoad();
    }, { once: true });
}

function handlePrev() {
    gallery.style.animation = "scrollPrev 0.2s ease 1";
    gallery.addEventListener("animationend", () => {
        gallery.style.animation = "none";
        imgQueue.pop();
        imgQueue.pop();
        currentIndex -= 2;
        if (currentIndex < 0) currentIndex += imgSrcList.length;
        imgQueue.unshift(imgSrcList[(currentIndex) % imgSrcList.length]);
        imgQueue.unshift(imgSrcList[(currentIndex + 1) % imgSrcList.length]);
        generateFristLoad();
    }, { once: true });
}

nextBtn.addEventListener("click", () => {
    if (!clickAble) return;
    clickAble = false;
    handleNext();
    setTimeout(() => {
        clickAble = true;
    }, 200);
});
prevBtn.addEventListener("click", () => {
    if (!clickAble) return;
    clickAble = false;
    handlePrev();
    setTimeout(() => {
        clickAble = true;
    }, 200);
});

initialQueue();
startCarousel();
