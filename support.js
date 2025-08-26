function extractClassesFromDOM() {
    const elements = document.querySelectorAll('[class]');
    const allClasses = new Set();

    elements.forEach(el => {
        el.classList.forEach(cls => allClasses.add(cls));
    });

    return [...allClasses];
}

// console.log(extractClassesFromDOM());

