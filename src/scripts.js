//Array for Canden Yards images 
const CamdenImages = [
    "images/ballpark/stadium-530431101.jpg",
    
]

//Carousel prev/next initilalization
$(document).ready(function() {
    $('#carouselIndicators').carousel();
});

//Array for Canden Yards images 
const camdenImages = [
     'images/ballpark/welcome.jpg',
    'images/ballpark/boogs.jpg',
    'images/ballpark/camden-yards-in-the-twilight.jpg',
    'images/ballpark/camdenaerial.jpg',
    'images/ballpark/camdenStormCloud.jpg',
    'images/ballpark/camdenyardsbedell-128843873.jpg',
    'images/ballpark/Eutaw.jpg',
    'images/ballpark/eutawDay.jpg',
    'images/ballpark/insideFood.jpg',
    'images/ballpark/mons.jpg',
    'images/ballpark/outfieldView.jpg',
    'images/ballpark/packedHouse.jpg',
    'images/ballpark/Roof-Deck-Seating-631512521.jpg',
    'images/ballpark/stadium-530431101.jpg',
   
  ];


//Carousel prev/next initilalization
$(document).ready(function() {
    $('#carouselIndicators').carousel();
});

//connect to the carousel containers
const carouselInner = document.querySelector('.carousel-inner')
const carouselIndicator = document.querySelector('.carousel-indicators')

//Loop the aimages and create div
camdenImages.forEach((image, index) => {
    const carouselItem = document.createElement('div')
    carouselItem.classList.add('carousel-item')

    //First item active
    if (index === 0){
        carouselItem.classList.add('active')
    }

    //create img element
    const img = document.createElement('img');
    img.src = image;
    img.classList.add('d-block', 'w-100');
    img.alt = `Slide ${index + 1}`;

    carouselItem.appendChild(img);
    carouselInner.appendChild(carouselItem)

    //create indicator
    const indicator = document.createElement('li');
    indicator.setAttribute('data-target', '#carouselIndicators');
    indicator.setAttribute('data-slide-to', index);

    if(index === 0){
        indicator.classList.add('active')
    }

    carouselIndicator.appendChild(indicator);
});

  
console.log(camdenImages, "images")