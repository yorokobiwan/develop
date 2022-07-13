let movies=[];

function loadData(url){
    var xhttp = new XMLHttpRequest();
    var mm=[];
      xhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
        mm = JSON.parse(this.responseText)['data'];
       console.log(mm);;
     } };
        xhttp.open("GET", "http://localhost:3000"+ url, false);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(null); 
 return mm;
}

movies = loadData("/api/items");

/*
let movies = [
    {
        name: 'Ambulance',
        des: 'Un vétéran fait équipe avec son frère adoptif pour voler 32 millions de dollars.',
        image: 'images/slide_ambulance.jpg'
    },
    {
        name: 'Doctor Strange in the Multiverse of Madness',
        des: '',
        image: 'images/doctor_strange_multiverse.jpg'
    },
    {
        name: 'Once Upon a Time in Hollywood',
        des: '',
        image: 'images/once_hollywood.jpg'
    },
    {
        name: 'La Rage au Ventre',
        des: 'Champion du monde de boxe, Billy Hope mène une existence fastueuse, son monde s\'écroule à la mort de sa femme.',
        image: 'images/slide_southpaw.jpg'
    },
    {
        name: 'luca',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro et veniam excepturi, eaque voluptatem impedit nulla laboriosam facilis ut laboriosam libero!',
        image: 'images/slider 5.PNG'
    }
];
*/

let cardList=[
    {
        name: 'Ambulance',
        des: 'Lorem ipsum dolor sit amet consectetur',
        image: 'images/ambulance.jpg',
        video: 'videos/marvel.mp4'
    },
    {
        name: 'Doctor Strange in the Multiverse of Madness',
        des: 'Lorem ipsum dolor sit amet consectetur',
        image: 'images/doctor_strange_multiverse.jpg',
        video: 'videos/marvel.mp4'
    },
    {
        name: 'Once Upon a Time in Hollywood',
        des: 'Lorem ipsum dolor sit amet consectetur',
        image: 'images/once_hollywood.jpg',
        video: 'videos/marvel.mp4'
    },
    {
        name: 'La Rage au Ventre',
        des: 'Lorem ipsum dolor sit amet consectetur',
        image: 'images/southpaw.jpg',
        video: 'videos/marvel.mp4'
    },
    {
        name: 'falcon and the winter soldier',
        des: 'Lorem ipsum dolor sit amet consectetur',
        image: 'images/slider 2.PNG',
        video: 'videos/marvel.mp4'
    },
    {
        name: 'loki',
        des: 'Lorem ipsum dolor sit amet consectetur',
        image: 'images/slider 1.PNG',
        video: 'videos/marvel.mp4'
    }
];