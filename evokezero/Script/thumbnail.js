document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('#thumbnails .main-1');
    const images = main.innerHTML;
    main.innerHTML += images; // Duplicate images
});

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('#thumbnails .main-2');
    const images = main.innerHTML;
    main.innerHTML += images; // Duplicate images
});

document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('#thumbnails .main-3 .sub-box');
    const images = main.innerHTML;
    main.innerHTML += images; // Duplicate images
});
