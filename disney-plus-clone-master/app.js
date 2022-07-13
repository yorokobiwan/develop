
const carous= document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;

console.log("movies="+movies.length);

const createSlide = () =>{
    
    if(slideIndex>= movies.length){
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carous.appendChild(slide);
    
    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';
   
    sliders.push(slide);

    //adding sliding effect
   if(sliders.length){
       sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
   }

}

//callDb()

for (let i = 0; i < 3;i++){
    createSlide();
}
setInterval(() => {
    createSlide();
}, 5000);

// video cards

const videoCards = document.querySelectorAll('.video-card');

videoCards.forEach(item=> {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        //video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        //video.pause();
    })
})

// cards
const moviesList = document.querySelector('.movies-list');

let nxtButton = document.createElement('button');
let preButton = document.createElement('button');
let imgPreBtn = document.createElement('img');
let imgNxtBtn = document.createElement('img');
imgPreBtn.src="images/pre.png";
imgNxtBtn.src="images/nxt.png";

nxtButton.appendChild(imgNxtBtn);
preButton.appendChild(imgPreBtn);

nxtButton.className = 'nxt-btn';
preButton.className = 'pre-btn';

let cardContainerDiv = document.createElement('div');

for (let cardIndex = 0; cardIndex < cardList.length; cardIndex++){

let cardDiv = document.createElement('div');
let imgCard = document.createElement('img');
let buttonLink = document.createElement('a');

let cardBodyDiv = document.createElement('div');
let nameContent = document.createElement('h2');
let desContent = document.createElement('h6');
let watchButton = document.createElement('button');
watchButton.appendChild(document.createTextNode('Aperçu'));

imgCard.className ='card-img';
//watchButton.className = 'watchlist-btn';
nameContent.className = 'name';
desContent.className = 'des';
cardBodyDiv.className = 'card-body';
cardDiv.className = 'card';


nameContent.appendChild(document.createTextNode(cardList[cardIndex].name));
desContent.appendChild(document.createTextNode(cardList[cardIndex].des));
imgCard.src = cardList[cardIndex].image;
buttonLink.href = cardList[cardIndex].video;

//buttonLink.appendChild(watchButton);
//cardBodyDiv.appendChild(nameContent);
//cardBodyDiv.appendChild(desContent);
//cardBodyDiv.appendChild(buttonLink);

buttonLink.appendChild(imgCard);
cardDiv.appendChild(buttonLink);

//cardDiv.appendChild(imgCard);
//cardDiv.appendChild(cardBodyDiv);

cardContainerDiv.appendChild(cardDiv);

}

cardContainerDiv.className = 'card-container';

moviesList.appendChild(preButton);
moviesList.appendChild(nxtButton);
moviesList.appendChild(cardContainerDiv);


// card sliders

let cardContainers = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i)=>{
     let containerDimensions = item.getBoundingClientRect();

     nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerDimensions.width -100;
     })

     preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerDimensions.width -100;
     })

});
