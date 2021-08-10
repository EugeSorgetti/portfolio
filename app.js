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
});


window.addEventListener('scroll', reveal);

function reveal() {
    const sections = document.querySelectorAll('.reveal');

    for (var i = 0; i < sections.length; i++) {
        const windowHeight = window.innerHeight;
        let revealTop = sections[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealTop< windowHeight - revealpoint) {
            sections[i].classList.add('active');
        } else {
            sections[i].classList.remove('active');
        }
    }
}

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.querySelector('.navbar-nav');

const navSlide = () => {

    menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('fa-bars');
    menuBtn.classList.toggle('fa-times');
})
}

navSlide();