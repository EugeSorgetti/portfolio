const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content');

tabs.forEach (tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        });
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        target.classList.add('active');
        tab.classList.add('active');
    })
})

const thumbnails = document.querySelectorAll('img[data-type]');
const lightbox = document.getElementById('lightbox');
const closeBtn = document.getElementById('close-btn');

console.log(thumbnails.src);

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', e => {
        lightbox.classList.add('active');
        const image = document.getElementById('lightbox-image');
        image.src = thumbnail.src;
    })
});

closeBtn.addEventListener('click', e => {
    lightbox.classList.remove('active');
})