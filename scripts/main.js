var NAV_SEL = '[data-nav-item]';
var IMG_SEL = '[data-main-image]';
var INFO_SEL = '[data-main-info]';

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
    },
    {
        name: "Dominion Board Game",
        src: "https://cf.geekdo-images.com/7mkW_JrUx0PSa4Ame3zzsLE0BVY=/fit-in/246x300/pic394356.jpg"
    },
    {
        name: "Twilight Imperium 4th Edition",
        src: "https://cf.geekdo-images.com/UxsyZBpFiBNPOppOQ7ILJde_YhY=/fit-in/246x300/pic3727516.jpg"
    }
];

var navContainer = document.querySelector('.nav-container');

imgs.forEach(function (nav) {
    var navElement = document.createElement('a');
    var imgElement = document.createElement('img');
    navElement.classList.add('nav-item');
    navElement.setAttribute('href', nav.src);
    imgElement.setAttribute('src', nav.src);
    imgElement.setAttribute('alt', nav.name);
    navElement.setAttribute('data-nav-item', '');
    navElement.appendChild(imgElement);
    navContainer.appendChild(navElement);
});

var navImgs = document.querySelectorAll(NAV_SEL);
var mainImg = document.querySelector(IMG_SEL);
var mainInfo = document.querySelector(INFO_SEL);


navImgs.forEach(function (nav) {
    nav.addEventListener('click', function(event) {
        event.preventDefault();
        mainImg.setAttribute('src', nav.getAttribute('href'));
        mainImg.setAttribute('alt', nav.getAttribute('alt'))
    });
});

mainImg.addEventListener('click', function(event) {
    event.preventDefault();
    mainImg.classList.toggle('move-left');
    mainInfo.classList.toggle('move-right');
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