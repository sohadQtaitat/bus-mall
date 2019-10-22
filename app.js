'use strict';


<<<<<<< HEAD
function Productss(title, src) {
    this.title = title;
    this.src = src;
    this.clickCtr = 0;
    this.shownCtr = 0;
    Productss.all.push(this);
}

Productss.initialCounter = 0;
Productss.roundFinish = 25;
Productss.all = [];
=======
function Products(title, src) {
  this.title = title;
  this.src = src;
  this.clickctr = 0;
  this.counterSho = 0;
  Products.all.push(this);
}

Products.initialCounter = 0;
Products.finalattemp = 25;
Products.all = [];
>>>>>>> chartjs





<<<<<<< HEAD
Productss.container = document.getElementById('products-container');

Productss.leftImage = document.getElementById('left-product-image');
Productss.centerImage = document.getElementById('center-product-image');
Productss.rightImage = document.getElementById('right-product-image');


Productss.leftTitle = document.getElementById('left-product-title');
Productss.centerTitle = document.getElementById('center-product-title');
Productss.rightTitle = document.getElementById('right-product-title');

Productss.leftObject = null;
Productss.centerObject = null;
Productss.rightObject = null;




new Productss('banana product', 'img/banana.jpg');
new Productss('breakfast product', 'img/breakfast.jpg');
new Productss('bubblegum product', 'img/bubblegum.jpg');
new Productss('chair product', 'img/chair.jpg');
new Productss('sweep product', 'img/sweep.png');


new Productss('cthulhu product', 'img/cthulhu.jpg');
new Productss('water-can product', 'img/water-can.jpg');
new Productss('wine-glass product', 'img/wine-glass.jpg');
new Productss('dog-duck product', 'img/dog-duck.jpg');


new Productss('dragon product', 'img/dragon.jpg');
new Productss('pen product', 'img/pen.jpg');
new Productss('boots product', 'img/boots.jpg');
new Productss('pet-sweep product', 'img/pet-sweep.jpg');
new Productss('bathroom product', 'img/bathroom.jpg');


new Productss('scissors product', 'img/scissors.jpg');
new Productss('shark product', 'img/shark.jpg');
new Productss('tauntaun product', 'img/tauntaun.jpg');
new Productss('unicorn product', 'img/unicorn.jpg');
new Productss('usb product', 'img/usb.gif');
new Productss('bag product', 'img/bag.jpg');
=======

Products.container = document.getElementById('products-container');

Products.leftImage = document.getElementById('left-product-image');
Products.centerImage = document.getElementById('center-product-image');
Products.rightImage = document.getElementById('right-product-image');


Products.leftTitle = document.getElementById('left-product-title');
Products.centerTitle = document.getElementById('center-product-title');
Products.rightTitle = document.getElementById('right-product-title');

Products.leftObject = null;
Products.centerObject = null;
Products.rightObject = null;


new Products('banana product', 'img/banana.jpg');
new Products('breakfast product', 'img/breakfast.jpg');
new Products('bubblegum product', 'img/bubblegum.jpg');
new Products('chair product', 'img/chair.jpg');
new Products('sweep product', 'img/sweep.png');


new Products('cthulhu product', 'img/cthulhu.jpg');
new Products('water-can product', 'img/water-can.jpg');
new Products('wine-glass product', 'img/wine-glass.jpg');
new Products('dog-duck product', 'img/dog-duck.jpg');


new Products('dragon product', 'img/dragon.jpg');
new Products('pen product', 'img/pen.jpg');
new Products('boots product', 'img/boots.jpg');
new Products('pet-sweep product', 'img/pet-sweep.jpg');
new Products('bathroom product', 'img/bathroom.jpg');


new Products('scissors product', 'img/scissors.jpg');
new Products('shark product', 'img/shark.jpg');
new Products('tauntaun product', 'img/tauntaun.jpg');
new Products('unicorn product', 'img/unicorn.jpg');
new Products('usb product', 'img/usb.gif');
new Products('bag product', 'img/bag.jpg');

>>>>>>> chartjs





<<<<<<< HEAD
function renderNewProducts() {

    var item = [Productss.leftObject, Productss.centerObject, Productss.rightObject];

    do {

        Productss.leftObject = getRandomProduct();

    } while (item.includes(Productss.leftObject))
    item.push(Productss.leftObject);
    do {

        Productss.centerObject = getRandomProduct();

    } while (item.includes(Productss.centerObject));
    item.push(Productss.centerObject);
    do {

        Productss.rightObject = getRandomProduct();
    } while (item.includes(Productss.rightObject));





    Productss.leftObject.shownCtr++;
    Productss.centerObject.shownCtr++;
    Productss.rightObject.shownCtr++;



    var leftProductImageElement = Productss.leftImage;
    var centerProductImageElement = Productss.centerImage;
    var rightProductImageElement = Productss.rightImage;





    leftProductImageElement.setAttribute('src', Productss.leftObject.src);
    leftProductImageElement.setAttribute('alt', Productss.leftObject.title);

    centerProductImageElement.setAttribute('src', Productss.centerObject.src);
    centerProductImageElement.setAttribute('alt', Productss.centerObject.title);

    rightProductImageElement.setAttribute('src', Productss.rightObject.src);
    rightProductImageElement.setAttribute('alt', Productss.rightObject.title);


    Productss.leftTitle.textContent = Productss.leftObject.title;
    Productss.centerTitle.textContent = Productss.centerObject.title
    Productss.rightTitle.textContent = Productss.rightObject.title;

}





function getRandomProduct() {
    var index = Math.floor(Math.random() * Productss.all.length);
    console.log('index', index);
    return Productss.all[index];
} 



function updateTotals() {

    var pageshow = document.getElementById('listProduct');

    pageshow.innerHTML = '';

    for (var i = 0; i < Productss.all.length; i++) {
        var newProduct = Productss.all[i];
        var showw = addElement('showw', pageshow);
        addElement('p', showw, newProduct.title + ' had ' + newProduct.clickCtr + ' votes and was shown ' + newProduct.shownCtr + ' times');
    }
}  



/////////////////////////////////////

function addElement(tag, container, text) {

    var element = document.createElement(tag);
    container.appendChild(element);
    if (text) {
        element.textContent = text;
    }
    return element;

}



function clickHandler(event) {

    var clickItemId = event.target.id;
    var productChlicked;

    if (clickItemId === 'left-product-image') {
        productChlicked = Productss.leftObject;
    } else if (clickItemId === 'center-product-image') {
        productChlicked = Productss.centerObject;
    } else if (clickItemId === 'right-product-image') {
        productChlicked = Productss.rightObject;

    } else {
        console.log('Finished your chance ', clickItemId);
    }

    if (productChlicked) {
        productChlicked.clickCtr++;
        Productss.initialCounter++;

        updateTotals();

        if (Productss.initialCounter === Productss.roundFinish) {

            alert('you cannt click ... dont have attemp ');

            Productss.container.removeEventListener('click', clickHandler);

        } else {

            renderNewProducts();
        } 
    } 
} 

Productss.container.addEventListener('click', clickHandler);

updateTotals();

renderNewProducts();





























// 'use strict';



// var leftIndex=ma








































// var leftIndex= Math.floor(Math.random() * Product.all.length);
// var centerndex= Math.floor(Math.random() * Product.all.length);
// var rightIndex= Math.floor(Math.random() * Product.all.length);

// while(leftIndex===rightIndex){
//     rightIndex=Math.floor(Math.random() * Product.all.length);
// }
// while(leftIndex===centerIndex){
//     centerIndex=Math.floor(Math.random() * Product.all.length);
// }
// while(rightIndex===centerIndex){
//     centerIndex=Math.floor(Math.random() * Product.all.length);
// }

// leftProduct =Product.all[leftIndex];

// centerProduct =Product.all[centerIndex];

// rightProduct =Product.all[rightIndex];



// //////////////////////////////////////////////////////////////////////////////

































=======



function renderNewProducts() {

  var item = [Products.leftObject, Products.centerObject, Products.rightObject];

  do {

    Products.leftObject = getRandomProduct();

  } while (item.includes(Products.leftObject))
  item.push(Products.leftObject);
  do {

    Products.centerObject = getRandomProduct();

  } while (item.includes(Products.centerObject));
  item.push(Products.centerObject);
  do {

    Products.rightObject = getRandomProduct();
  } while (item.includes(Products.rightObject));



  Products.leftObject.counterSho++;                                        
 Products.centerObject.counterSho++;
  Products.rightObject.counterSho++;





  var leftProductImageElement = Products.leftImage;
  var centerProductImageElement = Products.centerImage;
  var rightProductImageElement = Products.rightImage;






  leftProductImageElement.setAttribute('src', Products.leftObject.src);             
  leftProductImageElement.setAttribute('alt', Products.leftObject.title);

  centerProductImageElement.setAttribute('src', Products.centerObject.src);        
  centerProductImageElement.setAttribute('alt', Products.centerObject.title);

  rightProductImageElement.setAttribute('src', Products.rightObject.src);          
  rightProductImageElement.setAttribute('alt', Products.rightObject.title);








  Products.leftTitle.textContent = Products.leftObject.title;
  Products.centerTitle.textContent = Products.centerObject.title
  Products.rightTitle.textContent = Products.rightObject.title;

} 

>>>>>>> chartjs




<<<<<<< HEAD
// Product.container = document.getElementById('product-container');


// Product.leftImage = document.getElementById('left-product-image');
// Product.centerImage = document.getElementById('center-product-image');
// Product.rightImage = document.getElementById('right-product-image');

// Product.leftTitle = document.getElementById('left-product-title');
// Product.centerTitle = document.getElementById('center-product-title');
// Product.rightTitle = document.getElementById('right-product-title');




// Product.leftObject = null;
// Product.centerObject = null;
// Product.rightObject = null;



// ////////////////////////////////////////////////////////////////////////////////////////////////////////


// new Product('Bag Product', 'img/bag.jpg');
// new Product('Bananan Product', 'img/banana.jpg');
// new Product('Bathroom Product', 'img/bathroom.jpg');
// new Product('Boot Product', 'img/boots.jpg');
// new Product('Break Fast Product', 'img/breakfast.jpg');


// new Product('Bubblegum Product ', 'img/bubblegum.jpg');
// new Product('Chair Product', 'img/chair.jpg');
// new Product('Cthulhu Product', 'img/cthulhu.jpg');
// new Product('Dog Duck Product', 'img/dog-duck.jpg');
// new Product('Dragon Product', 'img/dragon.jpg');


// new Product('Pen Product', 'img/pen.jpg');
// new Product('Pet Sweep', 'img/pet-sweep.jpg');
// new Product('Scissors Prouct', 'img/scissors.jpg');
// new Product('Shark Product', 'img/shark.jpg');
// new Product('Sweep Product', 'img/sweep.png');


// new Product('Tauntaum Product', 'img/tauntaun.jpg');
// new Product('Unicorn Product', 'img/unicorn.jpg');
// new Product('USB Product', 'img/usb.gif');
// new Product('Water Can Product ', 'img/water-can.jpg');
// new Product('Wine Glass Product', 'img/wine-glass.jpg');




// /////////////////////////////////////////////////////////////////////////////////////////////////////////



// function renderNewProducts() {

//   var item = [Product.leftObject , Product.centerObject , Product.rightObject];            




//   do {

//     Product.leftObject = getRandomProduct();

//   } while (item.includes(Product.leftObject))

//   item.push(Product.leftObject);




//   do {

//     Product.centerObject = getRandomProduct();

//   }
//    while(item.includes(Product.centerObject));

//    item.push(Product.centerObject);




//   do {

//     Product.rightObject = getRandomProduct();

//   }
//    while(item.includes(Product.rightObject));

//    item.push(Product.righrObject);










//   Product.leftObject.shownCtr++;
//   Product.centerObject.shownCtr++;
//   Product.rightObject.shownCtr++;


//   var leftProductImageElement = Product.leftImage;
//   var centerProductImageElement = Product.centerImage;
//   var rightProductImageElement = Product.rightImage;



//   leftProductImageElement.setAttribute('src', Product.leftObject.src);
//   leftProductImageElement.setAttribute('alt', Product.leftObject.title);

//   centerProductImageElement.setAttribute('src', Product.centerObject.src);
//   centerProductImageElement.setAttribute('alt', Product.centerObject.title);


//   rightProductImageElement.setAttribute('src', Product.rightObject.src);
//   rightProductImageElement.setAttribute('alt', Product.rightObject.title);




//   Product.leftTitle.textContent = Product.leftObject.title;
//   Product.centerTitle.textContent = Product.centerObject.title;
//   Product.rightTitle.textContent = Product.rightObject.title;
// }




// /////////////////////////////////////////////////////////////////////////////////////






// function getRandomProduct() {
//   var index = Math.floor(Math.random() * Product.all.length);
//   return Product.all[index];
// }



// function randomInRange(min, max) {
//   var range = max - min + 1; 
//   var rand = Math.floor(Math.random() * range) + min
//   return rand;
// }





// function updateTotals() {

//   var tableBody = document.getElementById('report');


//   tableBody.innerHTML = '';













// function addElement(tag, container, text) {
//   var element = document.createElement(tag);
//   container.appendChild(element);
//   if(text) {
//     element.textContent = text;
//   }
//   return element;
// }







// function clickHandler(event) {

//   var clickedId = event.target.id;
//   var productClicked;

//   if(clickedId === 'left-product-image') {
//     productClicked = Product.leftObject;

//   } else if (clickedId === 'center-product-image') {
//     productClicked = Product.centerObject;
//   } 
//   else if (clickedId === 'right-product-image') {
//     productClicked = Product.rightObject;
//   } 
//   else {
//     console.log('Um, what was clicked on???', clickedId);
//   }





//   if(productClicked) {
//     productClicked.clickCtr++;
//     Product.roundCtr++;

//     updateTotals();

//     if(Product.roundCtr === Product.roundLimit) {

//       alert('No more clicking for you!');

//       Product.container.removeEventListener('click', clickHandler);

//     } else {

//       renderNewProducts();
//     }
//   }
// }

// // Notice that we're attaching event listener to the container, 
// // but event.target will allow us to which child element was actually clicked
// Product.container.addEventListener('click', clickHandler);

// updateTotals();

// renderNewProducts();





// 'use strict';



// var leftIndex=ma
=======
function getRandomProduct() {
  var index = Math.floor(Math.random() * Products.all.length);
  console.log('index', index);
  return Products.all[index];
}  



>>>>>>> chartjs









<<<<<<< HEAD



=======
function change() {

  var output = document.getElementById('itemShow');

  output.innerHTML = '';

  for (var i = 0; i < Products.all.length; i++) {
    var newProduct = Products.all[i];
    var output = addElement('output', output);
    addElement('ul', output, newProduct.title + ' have ' + newProduct.clickctr + ' click and number of shown =' + newProduct.counterSho );
  }
}  
>>>>>>> chartjs












<<<<<<< HEAD


=======
function addElement(tag, container, text) {

  var element = document.createElement(tag);
  container.appendChild(element);
  if (text) {
    element.textContent = text;
  }
  return element;

} 
>>>>>>> chartjs







<<<<<<< HEAD



=======
function clickHandler(event) {

  var clickItemId = event.target.id;
  var productChlicked;

  if (clickItemId === 'left-product-image') {
    productChlicked = Products.leftObject;
  } else if (clickItemId === 'center-product-image') {
    productChlicked = Products.centerObject;
  } else if (clickItemId === 'right-product-image') {
    productChlicked = Products.rightObject;

  } else {
    console.log('Finished ', clickItemId);
  }
>>>>>>> chartjs




<<<<<<< HEAD
// var leftIndex= Math.floor(Math.random() * Product.all.length);
// var centerndex= Math.floor(Math.random() * Product.all.length);
// var rightIndex= Math.floor(Math.random() * Product.all.length);

// while(leftIndex===rightIndex){
//     rightIndex=Math.floor(Math.random() * Product.all.length);
// }
// while(leftIndex===centerIndex){
//     centerIndex=Math.floor(Math.random() * Product.all.length);
// }
// while(rightIndex===centerIndex){
//     centerIndex=Math.floor(Math.random() * Product.all.length);
// }

// leftProduct =Product.all[leftIndex];

// centerProduct =Product.all[centerIndex];

// rightProduct =Product.all[rightIndex];



// //////////////////////////////////////////////////////////////////////////////




=======


  if (productChlicked) {
    productChlicked.clickctr++;
    Products.initialCounter++;

    change();

    if (Products.initialCounter === Products.finalattemp) {

      alert('sorry .. your trail finish');
      drawChart();

      Products.container.removeEventListener('click', clickHandler);

    } else {

      renderNewProducts();
    }}} 

Products.container.addEventListener('click', clickHandler);

change();

renderNewProducts();
>>>>>>> chartjs
































<<<<<<< HEAD
// function Product(title, src) {
//   this.title = title;
//   this.src = src;
//   this.clickCtr = 0;
//   this.shownCtr = 0;
//   Product.all.push(this);
// }

// Product.roundCtr = 0;
// Product.roundLimit = 25;
// Product.all = [];
=======

>>>>>>> chartjs




<<<<<<< HEAD
// Product.container = document.getElementById('product-container');


// Product.leftImage = document.getElementById('left-product-image');
// Product.centerImage = document.getElementById('center-product-image');
// Product.rightImage = document.getElementById('right-product-image');

// Product.leftTitle = document.getElementById('left-product-title');
// Product.centerTitle = document.getElementById('center-product-title');
// Product.rightTitle = document.getElementById('right-product-title');
=======



>>>>>>> chartjs




<<<<<<< HEAD
// Product.leftObject = null;
// Product.centerObject = null;
// Product.rightObject = null;



// ////////////////////////////////////////////////////////////////////////////////////////////////////////


// new Product('Bag Product', 'img/bag.jpg');
// new Product('Bananan Product', 'img/banana.jpg');
// new Product('Bathroom Product', 'img/bathroom.jpg');
// new Product('Boot Product', 'img/boots.jpg');
// new Product('Break Fast Product', 'img/breakfast.jpg');


// new Product('Bubblegum Product ', 'img/bubblegum.jpg');
// new Product('Chair Product', 'img/chair.jpg');
// new Product('Cthulhu Product', 'img/cthulhu.jpg');
// new Product('Dog Duck Product', 'img/dog-duck.jpg');
// new Product('Dragon Product', 'img/dragon.jpg');


// new Product('Pen Product', 'img/pen.jpg');
// new Product('Pet Sweep', 'img/pet-sweep.jpg');
// new Product('Scissors Prouct', 'img/scissors.jpg');
// new Product('Shark Product', 'img/shark.jpg');
// new Product('Sweep Product', 'img/sweep.png');


// new Product('Tauntaum Product', 'img/tauntaun.jpg');
// new Product('Unicorn Product', 'img/unicorn.jpg');
// new Product('USB Product', 'img/usb.gif');
// new Product('Water Can Product ', 'img/water-can.jpg');
// new Product('Wine Glass Product', 'img/wine-glass.jpg');
=======











>>>>>>> chartjs




<<<<<<< HEAD
// /////////////////////////////////////////////////////////////////////////////////////////////////////////



// function renderNewProducts() {

//   var item = [Product.leftObject , Product.centerObject , Product.rightObject];            
=======




>>>>>>> chartjs




<<<<<<< HEAD
//   do {

//     Product.leftObject = getRandomProduct();

//   } while (item.includes(Product.leftObject))

//   item.push(Product.leftObject);
=======



>>>>>>> chartjs




<<<<<<< HEAD
//   do {

//     Product.centerObject = getRandomProduct();

//   }
//    while(item.includes(Product.centerObject));

//    item.push(Product.centerObject);
=======



>>>>>>> chartjs




<<<<<<< HEAD
//   do {

//     Product.rightObject = getRandomProduct();

//   }
//    while(item.includes(Product.rightObject));

//    item.push(Product.righrObject);
=======



>>>>>>> chartjs










<<<<<<< HEAD
//   Product.leftObject.shownCtr++;
//   Product.centerObject.shownCtr++;
//   Product.rightObject.shownCtr++;


//   var leftProductImageElement = Product.leftImage;
//   var centerProductImageElement = Product.centerImage;
//   var rightProductImageElement = Product.rightImage;



//   leftProductImageElement.setAttribute('src', Product.leftObject.src);
//   leftProductImageElement.setAttribute('alt', Product.leftObject.title);

//   centerProductImageElement.setAttribute('src', Product.centerObject.src);
//   centerProductImageElement.setAttribute('alt', Product.centerObject.title);


//   rightProductImageElement.setAttribute('src', Product.rightObject.src);
//   rightProductImageElement.setAttribute('alt', Product.rightObject.title);
=======








>>>>>>> chartjs




<<<<<<< HEAD
//   Product.leftTitle.textContent = Product.leftObject.title;
//   Product.centerTitle.textContent = Product.centerObject.title;
//   Product.rightTitle.textContent = Product.rightObject.title;
// }
=======
>>>>>>> chartjs




<<<<<<< HEAD
// /////////////////////////////////////////////////////////////////////////////////////
=======
>>>>>>> chartjs






<<<<<<< HEAD
// function getRandomProduct() {
//   var index = Math.floor(Math.random() * Product.all.length);
//   return Product.all[index];
// }



// function randomInRange(min, max) {
//   var range = max - min + 1; 
//   var rand = Math.floor(Math.random() * range) + min
//   return rand;
// }
=======
var ctx = document.getElementById('chart').getContext('2d');


var chartTitle = [];
var productsSeen = [];
var productsClicks = [];

>>>>>>> chartjs





<<<<<<< HEAD
// function updateTotals() {

//   var tableBody = document.getElementById('report');


//   tableBody.innerHTML = '';


=======


function xAxis() {

  for (var i = 0; i < Products.all.length; i++) {     
    var producttitle = Products.all[i].title;
    chartTitle.push(producttitle);
  }

  return chartTitle;

}
>>>>>>> chartjs






<<<<<<< HEAD





// function addElement(tag, container, text) {
//   var element = document.createElement(tag);
//   container.appendChild(element);
//   if(text) {
//     element.textContent = text;
//   }
//   return element;
// }







// function clickHandler(event) {

//   var clickedId = event.target.id;
//   var productClicked;

//   if(clickedId === 'left-product-image') {
//     productClicked = Product.leftObject;

//   } else if (clickedId === 'center-product-image') {
//     productClicked = Product.centerObject;
//   } 
//   else if (clickedId === 'right-product-image') {
//     productClicked = Product.rightObject;
//   } 
//   else {
//     console.log('Um, what was clicked on???', clickedId);
//   }
=======
function chartProductShow() {

  for (var i = 0; i < Products.all.length; i++) {
    var productSeen = Products.all[i];
    productsSeen.push(productSeen.counterSho);
    console.log('productsSeen', productsSeen);
  }

  return productsSeen;
} 






function chartProductCick() {

  for (var i = 0; i < Products.all.length; i++) {
    var productClick = Products.all[i];
    productsClicks.push(productClick.clickctr);
  }

  return productsClicks;

}




>>>>>>> chartjs




<<<<<<< HEAD

//   if(productClicked) {
//     productClicked.clickCtr++;
//     Product.roundCtr++;

//     updateTotals();

//     if(Product.roundCtr === Product.roundLimit) {

//       alert('No more clicking for you!');

//       Product.container.removeEventListener('click', clickHandler);

//     } else {

//       renderNewProducts();
//     }
//   }
// }

// // Notice that we're attaching event listener to the container, 
// // but event.target will allow us to which child element was actually clicked
// Product.container.addEventListener('click', clickHandler);

// updateTotals();

// renderNewProducts();
=======
function drawChart()
{

  var chart = new Chart(ctx, {
    type: 'line',
  
    
    data: {
      labels: xAxis(),


      datasets: [
        {



          label: 'lab 11 chart ',
          backgroundColor: 'rgb(150, 120, 132)',
          borderColor: 'rgb(255, 200, 132)',
          data: chartProductCick()
        }, 

{         label: 'lab 11 ',
            backgroundColor: 'rgb(150, 120, 132)',
            borderColor: 'rgb(255, 200, 132)',
            data: chartProductShow(), 
          type: 'bar'
        }            ]
        
        
    },
    options: {}
  });

}


>>>>>>> chartjs
