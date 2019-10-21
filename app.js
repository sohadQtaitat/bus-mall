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
        addElement('ul', showw, newProduct.title + ' have ' + newProduct.clickCtr + ' click , Number of showen' + newProduct.shownCtr );
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
