'use strict';


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