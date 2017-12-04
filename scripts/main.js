var NAV_SEL = '[data-nav-item]';
var IMG_SEL = '[data-main-image]';

var imgs = [
    {
        name: "Justice Meeples",
        src: "https://www.cryptozoic.com/sites/default/files/products/main/mm_hall_of_justice_pp.jpg" 
    },
    {
        name: "Carcassonne Meeples",
        src: "http://theglassmeeple.com/wp-content/uploads/Carcassonne-meeples1.jpg"
    },
    {
        name: "See Through Meeples",
        src: "https://cf.geekdo-images.com/images/pic1012078_md.jpg"
    }
]

var navContainer = document.querySelector('.nav-container');
var navImgs = document.querySelectorAll(NAV_SEL);
var mainImg = document.querySelector(IMG_SEL);

imgs.forEach(function (nav) {
    var navElement = document.createElement('a');
    var imgElement = document.createElement('img');
    navElement.classList.add('nav-item');
    navElement.setAttribute('href', nav.src);
    imgElement.setAttribute('src', nav.src);
    imgElement.setAttribute('alt', nav.name);
    navElement.appendChild(imgElement);
    navContainer.appendChild(navElement);
});

navImgs.forEach(function (nav) {
    nav.addEventListener('click', function(event) {
        event.preventDefault();
        mainImg.setAttribute('src', nav.getAttribute('href'));
    });
});

// navImgs.forEach(function (nav) {
//     nav.addEventListener('mouseover', function() {
//         nav.classList.toggle('nav-item-grow');
//     });
// });

// navImgs.forEach(function (nav) {
//     nav.addEventListener('mouseleave', function() {
//         nav.classList.toggle('nav-item-grow');
//     });
// });