// Creation of the array that holds object data for each game
var imgs = [
    {
        name: "Pandemic Board Game",
        src: "https://cf.geekdo-images.com/cTrAWasNHyKMcNs8Zrv5O7sKS6M=/fit-in/246x300/pic1534148.jpg",
        description: `In Pandemic, several virulent diseases have broken out simultaneously all over the world! The players are disease-fighting specialists whose mission is to treat disease hotspots while researching cures for each of four plagues before they get out of hand.
        
        The game board depicts several major population centers on Earth. On each turn, a player can use up to four actions to travel between cities, treat infected populaces, discover a cure, or build a research station. A deck of cards provides the players with these abilities, but sprinkled throughout this deck are Epidemic! cards that accelerate and intensify the diseases' activity. A second, separate deck of cards controls the "normal" spread of the infections.`,
        store: 'https://www.amazon.com/Z-Man-Games-ZMG-71100-Pandemic/dp/B00A2HD40E'
    },
    {
        name: "King of Tokyo",
        src: "https://cf.geekdo-images.com/wOXROwYuEDNoDY6LhhUPGETrSnM=/fit-in/246x300/pic3043734.jpg",
        description: `In King of Tokyo, you play mutant monsters, gigantic robots, and strange aliens—all of whom are destroying Tokyo and whacking each other in order to become the one and only King of Tokyo.
        
        At the start of each turn, you roll six dice, which show the following six symbols: 1, 2, or 3 Victory Points, Energy, Heal, and Attack. Over three successive throws, choose whether to keep or discard each die in order to win victory points, gain energy, restore health, or attack other players into understanding that Tokyo is YOUR territory.
        
        The fiercest player will occupy Tokyo, and earn extra victory points, but that player can't heal and must face all the other monsters alone!`,
        store: 'https://www.amazon.com/King-Tokyo-New-Board-Game/dp/B01F46RPS4/ref=sr_1_1?ie=UTF8&qid=1512587970&sr=8-1&keywords=king+of+tokyo+game'
    },
    {
        name: "Coup Game",
        src: "https://cf.geekdo-images.com/BnJhQjCjNI0iVEJVZpTIGkvpoqw=/fit-in/1200x630/pic2016054.jpg",
        description: `You are head of a family in an Italian city-state, a city run by a weak and corrupt court. You need to manipulate, bluff and bribe your way to power. Your object is to destroy the influence of all the other families, forcing them into exile. Only one family will survive...
        In Coup, you want to be the last player with influence in the game, with influence being represented by face-down character cards in your playing area.`,
        store: 'https://www.amazon.com/Indie-Boards-Cards-COU1IBC-Dystopian/dp/B00GDI4HX4/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1512500708&sr=1-1&keywords=coup'
    },
    {
        name: "Dominion Board Game",
        src: "https://cf.geekdo-images.com/7mkW_JrUx0PSa4Ame3zzsLE0BVY=/fit-in/246x300/pic394356.jpg",
        description: `You are a monarch, like your parents before you, a ruler of a small pleasant kingdom of rivers and evergreens. Unlike your parents, however, you have hopes and dreams! You want a bigger and more pleasant kingdom, with more rivers and a wider variety of trees. You want a Dominion! In all directions lie fiefs, freeholds, and feodums. All are small bits of land, controlled by petty lords and verging on anarchy. You will bring civilization to these people, uniting them under your banner.
        
        But wait! It must be something in the air; several other monarchs have had the exact same idea. You must race to get as much of the unclaimed land as possible, fending them off along the way. To do this you will hire minions, construct buildings, spruce up your castle, and fill the coffers of your treasury. Your parents wouldn't be proud, but your grandparents, on your mother's side, would be delighted.`,
        store: 'https://www.amazon.com/Dominion-2nd-Edition-Board-Game/dp/B01LYLIS2U/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1512500742&sr=1-1&keywords=dominion'
    },
    {
        name: "Twilight Imperium 4th Edition",
        src: "https://cf.geekdo-images.com/UxsyZBpFiBNPOppOQ7ILJde_YhY=/fit-in/246x300/pic3727516.jpg",
        description: `Twilight Imperium (Fourth Edition) is a game of galactic conquest in which three to six players take on the role of one of seventeen factions vying for galactic domination through military might, political maneuvering, and economic bargaining. Every faction offers a completely different play experience, from the wormhole-hopping Ghosts of Creuss to the Emirates of Hacan, masters of trade and economics. These seventeen races are offered many paths to victory, but only one may sit upon the throne of Mecatol Rex as the new masters of the galaxy.`,
        store: 'https://www.amazon.com/Fantasy-Flight-Games-Twilight-Imperium/dp/B074YPSTRP/ref=sr_1_1?s=toys-and-games&ie=UTF8&qid=1512500773&sr=1-1&keywords=twilight+imperium+4th+edition'
    },
    {
        name: "Codenames",
        src: "https://images-na.ssl-images-amazon.com/images/I/91rEXffAsfL._SL1500_.jpg",
        description: `Two rival spymasters know the secret identities of 25 agents. Their teammates know the agents only by their CODENAMES.
        
        In Codenames, two teams compete to see who can make contact with all of their agents first. Spymasters give one-word clues that can point to multiple words on the board. Their teammates try to guess words of the right color while avoiding those that belong to the opposing team. And everyone wants to avoid the assassin.
        
        Codenames: Win or lose, it's fun to figure out the clues.`,
        store: 'https://www.amazon.com/Czech-Games-00031CGE-Codenames/dp/B014Q1XX9S/ref=sr_1_2?s=toys-and-games&ie=UTF8&qid=1512500800&sr=1-2&keywords=codenames'
    }
];

// Creating data attribute variables for easy reading of code
var NAV_CONTAINER = '[data-nav-container]';
// NAV_SEL is targeting the <img> elements created in the forEach function below. It targets them using the attribute, 'data-nav-item' which is created within the function.
var NAV_SEL = '[data-nav-item]';
var IMG_SEL = '[data-main-image]';
var INFO_SEL = '[data-main-info]';
var IMG = '[data-image]';
var DESC = '[data-target-p]';
var LINK_CONTAINER = '[data-link-container]';
var LINK_TOGGLE = '[data-toggle-link]';
var STORE_LINK = '[data-target-store]';

// Because this is using the normal Javascript array of imgs, forEach() is used and (element) does not need to be modified to a jquery object
imgs.forEach(function (element) {
    // Creation of a jQuery variable which points to the nav container. !!!!!------$() is the same as document.querySelector()-------!!!!!
    var $navContainer = $(NAV_CONTAINER);
    // jQuery allows us to form each link element with the prescribed attributes. This link is created to hold the .nav-item class and to show the user it is interactive
    var $navElement = $('<a>', {
        'href': '#',
        'class': 'nav-item',
        
    });
    // This <img> creation is holding the images themselves, their source, and metadata from the imgs list, which is represented by the argument, element.
    var $imgElement = $('<img>', {
        'src': element.src,
        'data-nav-item': '',
        'data-store': element.store,
        'alt': element.name,
        'data-description': element.description
    });
    // These next two lines are actually putting the created <a> and <img>'s onto the DOM. The navElement(<a>) will append the imgElement (<img>) into itself.
    $navElement.append($imgElement);
    // From here, we want to add the navElement (which is now a parent to the imgElement) to the navContainer that we point to using the NAV_CONTAINER data target
    $navContainer.append($navElement);
});

// creating jQuery variables to point to our data selectors using jQuery selection
var $navImgs = $(NAV_SEL);
var $mainImg = $(IMG_SEL);
var $mainInfo = $(INFO_SEL);
var $mainText = $(DESC);
var $infoLink = $(LINK_CONTAINER);
var $infoLinkToggle = $(LINK_TOGGLE)
var $storeLink = $(STORE_LINK);

// function that is called .onload so that the main image loads something
function mainImgLoad (imgs) {
    var $imgSelect = $(IMG);
    $imgSelect.attr('src', imgs.src);
    $imgSelect.attr('alt', imgs.name);
    $storeLink.attr('href', imgs.store);
    $mainText.text(imgs.description); 
};
// The function call
window.onload = mainImgLoad(imgs[0]);

// Initializing on click function for each image in the nav container. Referenced through the variable $navImgs, which references NAV_SEL, which references [data-nav-item]
$navImgs.each(function (i, nav) {
    // In jQuery, each element will be brought out of the $(); in order to combat this, we make sure the nav argument referenced is inside the jQuery function (so that it can reference inside the document)
    var $nav = $(nav);
    $nav.on('click', function(event) {
        event.preventDefault();
        // creating the variable that points to the main image <img> in the document
        var $image = $(IMG);
        // Now we are able to add attributes to our new reference variable
        $image.attr('src', $nav.attr('src'));
        $image.attr('alt', $nav.attr('alt'));
        $storeLink.attr('href', $nav.attr('data-store'));
        $mainText.text($nav.attr('data-description'));
    });
});

// initializes on click event for main image to show info
$mainImg.on('click', function(event) {
    event.preventDefault();
    $mainImg.toggleClass('move-left');
    $mainInfo.toggleClass('move-right');
    $mainText.toggleClass('fadeInFont');
});

$infoLinkToggle.on('click', function(event) {
    event.preventDefault();
    $infoLink.toggleClass('link-container-open');
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