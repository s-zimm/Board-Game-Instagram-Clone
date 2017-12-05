
var imgs = [
    {
        name: "Pandemic Board Game",
        src: "https://cf.geekdo-images.com/cTrAWasNHyKMcNs8Zrv5O7sKS6M=/fit-in/246x300/pic1534148.jpg",
        description: `In Pandemic, several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand.
        
        The game board depicts several major population centers on Earth. On each turn, a player can use up to four actions to travel between cities, treat infected populaces, discover a cure, or build a research station. A deck of cards provides the players with these abilities, but sprinkled throughout this deck are Epidemic! cards that accelerate and intensify the diseases' activity. A second, separate deck of cards controls the "normal" spread of the infections.`
    },
    {
        name: "King of Tokyo",
        src: "https://cf.geekdo-images.com/wOXROwYuEDNoDY6LhhUPGETrSnM=/fit-in/246x300/pic3043734.jpg",
        description: `In King of Tokyo, you play mutant monsters, gigantic robots, and strange aliens—all of whom are destroying Tokyo and whacking each other in order to become the one and only King of Tokyo.
        
        At the start of each turn, you roll six dice, which show the following six symbols: 1, 2, or 3 Victory Points, Energy, Heal, and Attack. Over three successive throws, choose whether to keep or discard each die in order to win victory points, gain energy, restore health, or attack other players into understanding that Tokyo is YOUR territory.
        
        The fiercest player will occupy Tokyo, and earn extra victory points, but that player can't heal and must face all the other monsters alone!`
    },
    {
        name: "Coup Game",
        src: "https://cf.geekdo-images.com/BnJhQjCjNI0iVEJVZpTIGkvpoqw=/fit-in/1200x630/pic2016054.jpg",
        description: `You are head of a family in an Italian city-state, a city run by a weak and corrupt court. You need to manipulate, bluff and bribe your way to power. Your object is to destroy the influence of all the other families, forcing them into exile. Only one family will survive...
        In Coup, you want to be the last player with influence in the game, with influence being represented by face-down character cards in your playing area.`
    },
    {
        name: "Dominion Board Game",
        src: "https://cf.geekdo-images.com/7mkW_JrUx0PSa4Ame3zzsLE0BVY=/fit-in/246x300/pic394356.jpg",
        description: `You are a monarch, like your parents before you, a ruler of a small pleasant kingdom of rivers and evergreens. Unlike your parents, however, you have hopes and dreams! You want a bigger and more pleasant kingdom, with more rivers and a wider variety of trees. You want a Dominion! In all directions lie fiefs, freeholds, and feodums. All are small bits of land, controlled by petty lords and verging on anarchy. You will bring civilization to these people, uniting them under your banner.
        
        But wait! It must be something in the air; several other monarchs have had the exact same idea. You must race to get as much of the unclaimed land as possible, fending them off along the way. To do this you will hire minions, construct buildings, spruce up your castle, and fill the coffers of your treasury. Your parents wouldn't be proud, but your grandparents, on your mother's side, would be delighted.`
    },
    {
        name: "Twilight Imperium 4th Edition",
        src: "https://cf.geekdo-images.com/UxsyZBpFiBNPOppOQ7ILJde_YhY=/fit-in/246x300/pic3727516.jpg",
        description: `Twilight Imperium (Fourth Edition) is a game of galactic conquest in which three to six players take on the role of one of seventeen factions vying for galactic domination through military might, political maneuvering, and economic bargaining. Every faction offers a completely different play experience, from the wormhole-hopping Ghosts of Creuss to the Emirates of Hacan, masters of trade and economics. These seventeen races are offered many paths to victory, but only one may sit upon the throne of Mecatol Rex as the new masters of the galaxy.`
    },
    {
        name: "Codenames",
        src: "https://images-na.ssl-images-amazon.com/images/I/91rEXffAsfL._SL1500_.jpg",
        description: `Two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their CODENAMES.
        
        In Codenames, two teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin.
        
        Codenames: Win or lose, it's fun to figure out the clues.`
    }
];

var NAV_SEL = '[data-nav-item]';
var IMG_SEL = '[data-main-image]';
var INFO_SEL = '[data-main-info]';
var IMG = '[data-image]';
var navContainer = document.querySelector('.nav-container');


imgs.forEach(function (nav) {
    var navElement = document.createElement('a');
    var imgElement = document.createElement('img');
    navElement.classList.add('nav-item');
    navElement.setAttribute('href', nav.src);
    imgElement.setAttribute('src', nav.src);
    navElement.setAttribute('alt', nav.name);
    navElement.setAttribute('description', nav.description);
    navElement.setAttribute('data-nav-item', '');
    navElement.appendChild(imgElement);
    navContainer.appendChild(navElement);
});

var navImgs = document.querySelectorAll(NAV_SEL);
var mainImg = document.querySelector(IMG_SEL);
var mainInfo = document.querySelector(INFO_SEL);

function mainImgLoad (imgs) {
    var imgSelect = document.querySelector(IMG);
    imgSelect.setAttribute('src', imgs[0].src);
    imgSelect.setAttribute('alt', imgs[0].name);
    mainInfo.textContent = imgs[0].description; 
};

navImgs.forEach(function (nav) {
    nav.addEventListener('click', function(event) {
        event.preventDefault();
        var image = document.querySelector(IMG);
        image.setAttribute('src', nav.getAttribute('href'));
        image.setAttribute('alt', nav.getAttribute('alt'));
        mainInfo.textContent = nav.getAttribute('description');
    });
});

mainImg.addEventListener('click', function(event) {
    event.preventDefault();
    mainImg.classList.toggle('move-left');
    mainInfo.classList.toggle('move-right');
});

window.onload = mainImgLoad(imgs);

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