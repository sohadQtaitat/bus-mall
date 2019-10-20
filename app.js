'use strict';

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats
  Let students participate by suggesting the steps needed to make the app run
  Continue until students have provided enough detail that they feel confident they could build the app themselves
  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
    - Random number generator
    - a function to display goats
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 25 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which goat was clicked on
        - update clicke images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 goats, run the same code that put them on the screen to begin with
  HTML
    - have a container for left and right images
    - Give the images id's so we can select them
    - let the user know what they are supposed to do
      - instructions
  More javascript details
  We need Objects with all the image properties
  var Image = function ()
  {
    name : 'cool goat',
    clicks: 0,
    times shown: 0,
    url : 'cool-goat.jpg'
  }
  We need an Array to hold all image Objects
  function to randomly pick an image{
    Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }
  click on an image, targetted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })
  function to display all the clicks at the end () {
    generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }
*/



/* TODO
* HTML with image container and 2 images with ids
* set left and right goat images to random
*   - but not 2 same images at same time
*/







































function Product(title, src) {
  this.title = title;
  this.src = src;
  this.clickCtr = 0;
  this.shownCtr = 0;
  Product.all.push(this);
}

Product.roundCtr = 0;
Product.roundLimit = 25;

Product.all = [];







Product.container = document.getElementById('product-container');


Product.leftImage = document.getElementById('left-product-image');
Product.centerImage = document.getElementById('center-product-image');
Product.rightImage = document.getElementById('right-product-image');

Product.leftTitle = document.getElementById('left-product-title');
Product.centerTitle = document.getElementById('center-product-title');
Product.rightTitle = document.getElementById('right-product-title');




Product.leftObject = null;
Product.centerObject = null;
Product.rightObject = null;



////////////////////////////////////////////////////////////////////////////////////////////////////////


new Product('Bag Product', 'img/bag.jpg');
new Product('Bananan Product', 'img/banana.jpg');
new Product('Bathroom Product', 'img/bathroom.jpg');
new Product('Boot Product', 'img/boots.jpg');
new Product('Break Fast Product', 'img/breakfast.jpg');





new Product('Bubblegum Product ', 'img/bubblegum.jpg');
new Product('Chair Product', 'img/chair.jpg');
new Product('Cthulhu Product', 'img/cthulhu.jpg');
new Product('Dog Duck Product', 'img/dog-duck.jpg');
new Product('Dragon Product', 'img/dragon.jpg');





new Product('Pen Product', 'img/pen.jpg');
new Product('Pet Sweep', 'img/pet-sweep.jpg');
new Product('Scissors Prouct', 'img/scissors.jpg');
new Product('Shark Product', 'img/shark.jpg');
new Product('Sweep Product', 'img/sweep.png');





new Product('Tauntaum Product', 'img/tauntaun.jpg');
new Product('Unicorn Product', 'img/unicorn.jpg');
new Product('USB Product', 'img/usb.gif');
new Product('Water Can Product ', 'img/water-can.jpg');
new Product('Wine Glass Product', 'img/wine-glass.jpg');




/////////////////////////////////////////////////////////////////////////////////////////////////////////



function renderNewProducts() {

  var item = [Product.leftObject , Product.centerObject , Product.rightObject];            // ensure that previous goats not shown on next round











  do {

    Goat.leftObject = getRandomGoat();

  } while (forbidden.includes(Goat.leftObject))

  // add left goat to forbidden list so we don't double up
  forbidden.push(Goat.leftObject);

  do {

    Goat.rightObject = getRandomGoat();

  } while(forbidden.includes(Goat.rightObject));

  // WARNING: if you got really unlucky the above code would result in infinite loop
  // Can you think of safer ways?
  
 
 
 
 
 
 
 
 
  Goat.leftObject.shownCtr++;
  Goat.rightObject.shownCtr++;

  var leftGoatImageElement = Goat.leftImage;
  var rightGoatImageElement = Goat.rightImage;

  leftGoatImageElement.setAttribute('src', Goat.leftObject.src);
  leftGoatImageElement.setAttribute('alt', Goat.leftObject.title);
  rightGoatImageElement.setAttribute('src', Goat.rightObject.src);
  rightGoatImageElement.setAttribute('alt', Goat.rightObject.title);

  Goat.leftTitle.textContent = Goat.leftObject.title;
  Goat.rightTitle.textContent = Goat.rightObject.title;
}



















function getRandomProduct() {
  var index = Math.floor(Math.random() * Product.all.length);
  return Product.all[index];
}



function randomInRange(min, max) {
  var range = max - min + 1; 
  var rand = Math.floor(Math.random() * range) + min
  return rand;
}





function updateTotals() {

  var tableBody = document.getElementById('report');


  tableBody.innerHTML = '';


  for (var i = 0; i < Product.all.length; i++) {
    var product = Product.all[i];
    var row = addElement('tr', tableBody);
    addElement('td', row, product.title);
    addElement('td', row, '' + product.clickCtr);
    addElement('td', row, '' + product.shownCtr);
  }
}
























function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  if(text) {
    element.textContent = text;
  }
  return element;
}







function clickHandler(event) {

  var clickedId = event.target.id;
  var productClicked;

  if(clickedId === 'left-product-image') {
    productClicked = Product.leftObject;

  } else if (clickedId === 'center-product-image') {
    productClicked = Product.centerObject;
  } 
  else if (clickedId === 'right-product-image') {
    productClicked = Product.rightObject;
  } 
  else {
    console.log('Um, what was clicked on???', clickedId);
  }





  if(productClicked) {
    productClicked.clickCtr++;
    Product.roundCtr++;

    updateTotals();

    if(Product.roundCtr === Product.roundLimit) {

      alert('No more clicking for you!');

      Product.container.removeEventListener('click', clickHandler);

    } else {

      renderNewProducts();
    }
  }
}

// Notice that we're attaching event listener to the container, 
// but event.target will allow us to which child element was actually clicked
Product.container.addEventListener('click', clickHandler);

updateTotals();

renderNewProducts();