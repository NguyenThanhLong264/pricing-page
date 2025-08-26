const imageNames = generateImageNames('logo', 1, 24, ['png']);
// const slider = document.getElementById('logo-slider');
const imgList = [];

const gallery = document.getElementById("logo-slider");
const prevBtn = document.getElementById("gallery-prev");
const nextBtn = document.getElementById("gallery-next");
const carousel = document.querySelector(".logo-gallery-wrapper");

let loadedCount = 0;
let offset = 0;              // vị trí hiện tại
let speed = 2;             // px mỗi frame (auto chạy)
let step = 300;              // số px nhảy khi click nút
let paused = false;          // trạng thái pause
let targetOffset = 0;       // vị trí cần đến khi click nút
let isAnimatingClick = false; // đang chạy animation click
let galleryWidth = gallery.scrollWidth / 2; // vì clone 2 lần

// Auto scroll loop
function autoScroll() {
    if (!paused) {
        if (isAnimatingClick) {
            offset += (targetOffset - offset) * 0.1;
            if (Math.abs(targetOffset - offset) < 0.5) {
                offset = targetOffset;
                isAnimatingClick = false;
            }
        } else { offset -= speed; }
        if (offset <= -galleryWidth) {
            offset += galleryWidth;
            targetOffset += galleryWidth; // giữ đồng bộ với target
        }
        if (offset > 0) {
            offset -= galleryWidth;
            targetOffset -= galleryWidth; // giữ đồng bộ với target
        }
        gallery.style.transform = `translateX(${offset}px)`;
    }
    requestAnimationFrame(autoScroll);
}

prevBtn.addEventListener("click", () => {
    targetOffset = offset + step;
    if (targetOffset > 0) targetOffset -= galleryWidth;
    isAnimatingClick = true;
});

nextBtn.addEventListener("click", () => {
    targetOffset = offset - step;
    if (targetOffset <= -galleryWidth) targetOffset += galleryWidth;
    isAnimatingClick = true;
});


// Hover pause/resume
gallery.addEventListener("mouseenter", () => { paused = true; });
gallery.addEventListener("mouseleave", () => { paused = false; });

// function logo() {
imageNames.forEach(name => {
    const img = new Image();
    img.src = `img/logos/${name}`;
    img.alt = name;

    img.onload = () => {
        imgList.push(img.cloneNode());
        loadedCount++;
        checkDone();
    };

    img.onerror = () => {
        loadedCount++;
        checkDone();
    };
});

function checkDone() {
    if (loadedCount === imageNames.length) {
        finalizeSlider();
    }
}

function finalizeSlider() {
    imgList.forEach(img => {
        gallery.appendChild(img.cloneNode());
    });
    imgList.forEach(img => {
        gallery.appendChild(img.cloneNode());
    });
    galleryWidth = gallery.scrollWidth / 2;
    autoScroll();
}

function generateImageNames(prefix, start, end, extensions) {
    const result = [];
    for (let i = start; i <= end; i++) {
        extensions.forEach(ext => {
            result.push(`${prefix} (${i}).${ext}`);
        });
    }
    return result;
}