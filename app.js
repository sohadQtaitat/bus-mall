'use strict';


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





function getRandomProduct() {
  var index = Math.floor(Math.random() * Products.all.length);
  console.log('index', index);
  return Products.all[index];
}  












function change() {

  var output = document.getElementById('itemShow');

  output.innerHTML = '';

  for (var i = 0; i < Products.all.length; i++) {
    var newProduct = Products.all[i];
    var output = addElement('output', output);
    addElement('ul', output, newProduct.title + ' have ' + newProduct.clickctr + ' click and number of shown =' + newProduct.counterSho );
  }
}  












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
    productChlicked = Products.leftObject;
  } else if (clickItemId === 'center-product-image') {
    productChlicked = Products.centerObject;
  } else if (clickItemId === 'right-product-image') {
    productChlicked = Products.rightObject;

  } else {
    console.log('Finished ', clickItemId);
  }






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




var ctx = document.getElementById('chart').getContext('2d');


var chartTitle = [];
var productsSeen = [];
var productsClicks = [];








function xAxis() {

  for (var i = 0; i < Products.all.length; i++) {     
    var producttitle = Products.all[i].title;
    chartTitle.push(producttitle);
  }

  return chartTitle;

}






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


