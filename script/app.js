if (document.readyState == 'loading')
{
    document.addEventListener('DOMContentLoaded', ready)
}

else
{
    ready();
}

function ready()
{
    var removeItem = document.getElementsByClassName('delete');

    for(var i=0; i<removeItem.length; i++)
    {
        var deleteBtn = removeItem[i];
        deleteBtn.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for(var i=0; i<quantityInputs.length; i++)
    {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    var addCart = document.getElementsByClassName('add-to-cart');
    for (var i =0; i<addCart.length; i++)
    {
        var button = addCart[i];
        button.addEventListener('click', addtoCart);
    }

    var clearCart = document.getElementById('clear-cart');
    clearCart.addEventListener('click', Clear);
}

function Clear()
{
    var cartItems = document.getElementsByClassName('item-list')[0];
    while (cartItems.hasChildNodes())
    {
        cartItems.removeChild(cartItems.firstChild)
    }

    updateCartTotal();
}

function removeCartItem(event)
{
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event)
{
    var input = event.target;

    if(isNaN(input.value) || input.value <= 0)
    {
        input.value = 1;
    }
    updateCartTotal();
}

function addtoCart(event)
{
    var button = event.target;
    var shopItem = button.parentElement.parentElement.parentElement;

    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src; //imgBx

    console.log(title, price, imageSrc);
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemToCart(title, price, imageSrc)
{
    var cartRow = document.createElement('div');
    cartRow.classList.add('list');
    var cartItems = document.getElementsByClassName('item-list')[0];

    var cartNames = cartItems.getElementsByClassName('shop-item-title');
    for (var i = 0; i < cartNames.length; i++)
    {
        if(cartNames[i].innerText == title)
        {
            alert("This Item is already in the cart");
            return;
        }
    }

    var cartContents = `
        <div class="item-image">
            <img class="shop-item-image" src="${imageSrc}" alt="">
            <h4 class="shop-item-title">${title}</h4>
        </div>

        <span class="shop-item-price">${price}</span>
        <div class="item-quantity">
            Quantity<input class="cart-quantity-input" type="number" value="1">
        </div>

        <div class="delete">
            <img src="images/delete.png" alt="">
        </div>`

    cartRow.innerHTML = cartContents
    cartItems.append(cartRow)

    cartRow.getElementsByClassName('delete')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal()
{
    var list = document.getElementsByClassName('item-list')[0];
    var cartRows = list.getElementsByClassName('list');
    var total = 0;

    for(var i=0; i<cartRows.length; i++)
    {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('shop-item-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];

        var price = parseFloat(priceElement.innerText.replace('R', ''));
        var quantity = quantityElement.value;
        
        total = total + (price * quantity);
    }
    total = Math.round(total*100)/100;
    document.getElementsByClassName('total-price')[0].innerText = 'R' + total;
}

////////////////////////////////////////////////////

/* var curButton = document.getElementsByClassName('spans');
for(var i = 0; i< curButton.length; i++)
{
    var button = curButton[i];
    
    button.addEventListener('click', (event)=>
    {
        buttonClicked = event.target;
        buttonClicked.classList.add("activeButton")
        buttonClicked.style.color = "red";
    })
} */


//-----------------------Checkout---------------------------//
var cart = document.getElementsByClassName('cart')[0];
var check = document.getElementsByClassName('leave')[0];

cart.addEventListener('click', ()=>
{
    check.classList.toggle('checkIn');
})

//------------------------SNEAKER COLORS---------------------------//
let cBtns = document.getElementsByClassName('cButtons');
let card1 = document.getElementsByClassName('card')[0];
let card2 = document.getElementsByClassName('card')[1];
let card3 = document.getElementsByClassName('card')[2];
let card4 = document.getElementsByClassName('card')[3];
let card5 = document.getElementsByClassName('card')[4];
let card6 = document.getElementsByClassName('card')[5];
let card7 = document.getElementsByClassName('card')[6];
let card8 = document.getElementsByClassName('card')[7];
let card9 = document.getElementsByClassName('card')[8];

//Sneaker 1 - SN1
var sn1 = cBtns[0];

var sn1c1 = sn1.children[0];
sn1c1.style.backgroundColor = "#0EDB22";

sn1c1.addEventListener('click', ()=>{
    card1.classList.add('sn1c1');
    card1.classList.remove('sn1c2');
    card1.classList.remove('sn1c3');
    card1.classList.remove('sn1c4');

    card1.firstElementChild.firstElementChild.setAttribute('src', 'images/sn1.1.png');
    
})

var sn1c2 = sn1.children[1];
sn1c2.style.backgroundColor = "#E503D1";

sn1c2.addEventListener('click', ()=>{
    card1.classList.add('sn1c2');
    card1.classList.remove('sn1c1');
    card1.classList.remove('sn1c3');
    card1.classList.remove('sn1c4');

    card1.firstElementChild.firstElementChild.setAttribute('src', 'images/sn1.2.png');
})

var sn1c3 = sn1.children[2];
sn1c3.style.backgroundColor = "#EF0021";

sn1c3.addEventListener('click', ()=>{
    card1.classList.add('sn1c3');
    card1.classList.remove('sn1c1');
    card1.classList.remove('sn1c2');
    card1.classList.remove('sn1c4');

    card1.firstElementChild.firstElementChild.setAttribute('src', 'images/sn1.3.png');
})

var sn1c4 = sn1.children[3];
sn1c4.style.backgroundColor = "#07D0CA";

sn1c4.addEventListener('click', ()=>{
    card1.classList.add('sn1c4');
    card1.classList.remove('sn1c1');
    card1.classList.remove('sn1c2');
    card1.classList.remove('sn1c3');

    card1.firstElementChild.firstElementChild.setAttribute('src', 'images/sn1.png');
})

//Sneaker 10 - SN10
var sn10 = cBtns[1];

var sn10c1 = sn10.children[0];
sn10c1.style.backgroundColor = "#42F38E";
sn10c1.addEventListener('click', ()=>{
    card2.classList.add('sn10c1');
    card2.classList.remove('sn10c2');

    card2.firstElementChild.firstElementChild.setAttribute('src', 'images/sn10.1.png');
})

var sn10c2 = sn10.children[1];
sn10c2.style.backgroundColor = "#6282C1";
sn10c2.addEventListener('click', ()=>{
    card2.classList.add('sn10c2');
    card2.classList.remove('sn10c1');

    card2.firstElementChild.firstElementChild.setAttribute('src', 'images/sn10.png');
})

//Sneaker 4 - SN4
var sn4 = cBtns[2];

var sn4c1 = sn4.children[0];
sn4c1.style.backgroundColor = "#D91005";
sn4c1.addEventListener('click', ()=>{
    card3.classList.add('sn4c1');
    card3.classList.remove('sn4c2');
    card3.classList.remove('sn4c3');
    card3.classList.remove('sn4c4');

    card3.firstElementChild.firstElementChild.setAttribute('src', 'images/sn4.png');
})

var sn4c2 = sn4.children[1];
sn4c2.style.backgroundColor = "#06D208";
sn4c2.addEventListener('click', ()=>{
    card3.classList.add('sn4c2');
    card3.classList.remove('sn4c1');
    card3.classList.remove('sn4c3');
    card3.classList.remove('sn4c4');

    card3.firstElementChild.firstElementChild.setAttribute('src', 'images/sn4.1.png');
})

var sn4c3 = sn4.children[2];
sn4c3.style.backgroundColor = "#000000";
sn4c3.addEventListener('click', ()=>{
    card3.classList.add('sn4c3');
    card3.classList.remove('sn4c2');
    card3.classList.remove('sn4c1');
    card3.classList.remove('sn4c4');

    card3.firstElementChild.firstElementChild.setAttribute('src', 'images/sn4.2.png');
})

var sn4c4 = sn4.children[3];
sn4c4.style.backgroundColor = "#D6D601";
sn4c4.addEventListener('click', ()=>{
    card3.classList.add('sn4c4');
    card3.classList.remove('sn4c2');
    card3.classList.remove('sn4c3');
    card3.classList.remove('sn4c1');

    card3.firstElementChild.firstElementChild.setAttribute('src', 'images/sn4.3.png');
})

//Sneaker 2 - SN2
var sn2 = cBtns[3];

var sn2c1 = sn2.children[0];
sn2c1.style.backgroundColor = "#CE0712";
sn2c1.addEventListener('click', ()=>{
    card4.classList.add('sn2c1');
    card4.classList.remove('sn2c2');
    card4.classList.remove('sn2c3');

    card4.firstElementChild.firstElementChild.setAttribute('src', 'images/sn2.png');
})

var sn2c2 = sn2.children[1];
sn2c2.style.backgroundColor = "#CD06A2";
sn2c2.addEventListener('click', ()=>{
    card4.classList.add('sn2c2');
    card4.classList.remove('sn2c1');
    card4.classList.remove('sn2c3');

    card4.firstElementChild.firstElementChild.setAttribute('src', 'images/sn2.1.png');
})

var sn2c3 = sn2.children[2];
sn2c3.style.backgroundColor = "#0CC748";
sn2c3.addEventListener('click', ()=>{
    card4.classList.add('sn2c3');
    card4.classList.remove('sn2c1');
    card4.classList.remove('sn2c2');

    card4.firstElementChild.firstElementChild.setAttribute('src', 'images/sn2.2.png');
})

//Sneaker 12 - SN12
var sn12 = cBtns[4];

var sn12c1 = sn12.children[0];
sn12c1.style.backgroundColor = "white";
sn12c1.addEventListener('click', ()=>{
    card5.classList.add('sn12c1');
})

//Sneaker 3 - SN3
var sn3 = cBtns[5];

var sn3c1 = sn3.children[0];
sn3c1.style.backgroundColor = "#B4E311";
sn3c1.addEventListener('click', ()=>{
    card6.classList.add('sn3c1');
    card6.classList.remove('sn3c2');
    card6.classList.remove('sn3c3');

    card6.firstElementChild.firstElementChild.setAttribute('src', 'images/sn3.png');
})

var sn3c2 = sn3.children[1];
sn3c2.style.backgroundColor = "#2DF776";
sn3c2.addEventListener('click', ()=>{
    card6.classList.add('sn3c2');
    card6.classList.remove('sn3c1');
    card6.classList.remove('sn3c3');

    card6.firstElementChild.firstElementChild.setAttribute('src', 'images/sn3.1.png');
})

var sn3c3 = sn3.children[2];
sn3c3.style.backgroundColor = "#0BDED7";
sn3c3.addEventListener('click', ()=>{
    card6.classList.add('sn3c3');
    card6.classList.remove('sn3c2');
    card6.classList.remove('sn3c1');

    card6.firstElementChild.firstElementChild.setAttribute('src', 'images/sn3.2.png');
})

//Sneaker 6 - SN6
var sn6 = cBtns[6];

var sn6c1 = sn6.children[0];
sn6c1.style.backgroundColor = "#EA961D";
sn6c1.addEventListener('click', ()=>{
    card7.classList.add('sn6c1');
    card7.classList.remove('sn6c2');
    card7.classList.remove('sn6c3');

    card7.firstElementChild.firstElementChild.setAttribute('src', 'images/sn6.png');
})

var sn6c2 = sn6.children[1];
sn6c2.style.backgroundColor = "#0BCFE5";
sn6c2.addEventListener('click', ()=>{
    card7.classList.add('sn6c2');
    card7.classList.remove('sn6c1');
    card7.classList.remove('sn6c3');

    card7.firstElementChild.firstElementChild.setAttribute('src', 'images/sn6.1.png');
})

var sn6c3 = sn6.children[2];
sn6c3.style.backgroundColor = "#EE0724";
sn6c3.addEventListener('click', ()=>{
    card7.classList.add('sn6c3');
    card7.classList.remove('sn6c2');
    card7.classList.remove('sn6c1');

    card7.firstElementChild.firstElementChild.setAttribute('src', 'images/sn6.2.png');
})

//Sneaker 7 - SN7
var sn7 = cBtns[7];

var sn7c1 = sn7.children[0];
sn7c1.style.backgroundColor = "#ACAC8E";

//Sneaker 8 - SN8
var sn8 = cBtns[8];

var sn8c1 = sn8.children[0];
sn8c1.style.backgroundColor = "#000000";


//CART COUNTER 
    var cartC = document.getElementById('cartSpan');

const counterF = function()
{
    cartC.classList.toggle('spanDiv2');
}