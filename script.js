const btnOpenMenu = document.querySelector('.button-menu');
const background = document.querySelector('.background');
const menu = document.querySelector('.menu');
const btnCloseMenu = document.querySelector('.button-close');
const btnQuantity = document.querySelectorAll('.button-quantity');
const btnCart = document.querySelector('.button-cart');
const btnAdd = document.querySelector('.button-add');
const cart = document.querySelector('.article-cart');
const btnSwitch = document.querySelectorAll('.button-switch');



/*SWITCH IMAGE*/

    /*MOBILE*/

let j = 0;

btnSwitch.forEach( (item, index) => {

    item.addEventListener('click', () => {
        
        if(index === 0 ){

            j--;

            if(j < 0){
                j = 3;
            }

            document.querySelector('.image-product').src = `./images/image-product-${j+1}.jpg`;

        }
        else if(index === 1){

            j++;

            if(j > 3){
                j = 0;
            }

            document.querySelector('.image-product').src = `./images/image-product-${j+1}.jpg`;
        }

    });

});


    /*DESKTOP*/

Array.from( document.querySelectorAll('.image-container .thumbnail') ).forEach( (item, index) => {

    item.addEventListener('click', (e) => {

        console.log(index);

        document.querySelector('.image-container .image-product').src = `./images/image-product-${index+1}.jpg`;

        for(let i = 0; i < document.querySelectorAll('.image-container .thumbnail').length; i++)
        {
            j = index;
            i === index ? document.querySelectorAll('.image-container .thumbnail')[i].classList.add('selected') : document.querySelectorAll('.thumbnail')[i].classList.remove('selected');
        }

        e.preventDefault();

    });

});


    /*LIGHTBOX*/


if(window.innerWidth > 1118){

    document.querySelector('.image-product').addEventListener('click', () => {

        background.style.display = 'block';

        document.querySelector('.lightbox').style.display = 'block';

        for(let i = 0; i < document.querySelectorAll('.lightbox .thumbnail').length; i++)
        {
            i === j ? document.querySelectorAll('.lightbox .thumbnail')[i].classList.add('selected') : document.querySelectorAll('.lightbox .thumbnail')[i].classList.remove('selected');
        }

        document.querySelector('.lightbox .image-product').src = `./images/image-product-${j+1}.jpg`;

    });

}



document.querySelector('.button-close-lightbox').addEventListener('click', () => {

    background.style.display = 'none';
    document.querySelector('.lightbox').style.display = 'none';

});


document.querySelectorAll('.lightbox .button-switch').forEach( (item, index) => {

    item.addEventListener('click', () => {
        
        if(index === 0 ){

            j--;

            if(j < 0){
                j = 3;
            }

            document.querySelector('.lightbox .image-product').src = `./images/image-product-${j+1}.jpg`;

        }
        else if(index === 1){

            j++;

            if(j > 3){
                j = 0;
            }

            document.querySelector('.lightbox .image-product').src = `./images/image-product-${j+1}.jpg`;
        }

        for(let i = 0; i < document.querySelectorAll('.lightbox .thumbnail').length; i++){

            i === j ? document.querySelectorAll('.lightbox .thumbnail')[i].classList.add('selected') : document.querySelectorAll('.lightbox .thumbnail')[i].classList.remove('selected');
        
        }

    });

});


Array.from( document.querySelectorAll('.lightbox .thumbnail') ).forEach( (item, index) => {

    item.addEventListener('click', (e) => {

        document.querySelector('.lightbox .image-product').src = `./images/image-product-${index+1}.jpg`;

        for(let i = 0; i < document.querySelectorAll('.lightbox .thumbnail').length; i++)
        {
            i === index ? document.querySelectorAll('.lightbox .thumbnail')[i].classList.add('selected') : document.querySelectorAll('.lightbox .thumbnail')[i].classList.remove('selected');
        }

        j = index;

        e.preventDefault();

    });

});


/*OPEN, CLOSE MENU */

btnOpenMenu.addEventListener('click', () => {
    background.style.display = 'block';
    menu.style.display = 'block';
});

btnCloseMenu.addEventListener('click', () => {
    background.style.display = 'none';
    menu.style.display = 'none';
});


/*DECREASE, INCREASE QUANTITY*/

let quantity = 0;

btnQuantity.forEach( (item, index) => {

    item.addEventListener('click', () => {

        if(index === 0 && quantity > 0){
            quantity--;
        }
        else if(index === 1  && quantity < 10){
            quantity++;
        }

        document.querySelector('.result').textContent = quantity;

    });

});


/*ADD ITEM ON CART */

btnAdd.addEventListener('click', () => {

    if(quantity !== 0){

        if(btnCart.firstElementChild.classList.contains('itemOnCart')){
            btnCart.firstElementChild.textContent = quantity;
        }
        else{
            const numberItem = document.createElement('span');
            numberItem.textContent = quantity;
            numberItem.classList.add('itemOnCart');
            btnCart.insertAdjacentElement('afterbegin', numberItem);
        }

        document.querySelector('.purchase-item').firstElementChild.remove();

        document.querySelector('.purchase-item').innerHTML = `<div class="item-container">
                            <img class="item-thumbnail" src="./images/image-product-1-thumbnail.jpg" alt="sneakers">
                            <h3 class="item-name text">Fall LImited Edition Sneakers</h3>
                            <p class="item-price text">$125.00 x ${quantity} <span class="text-bold">$${125.00 * quantity}</span></p>
                            <button class="button button-delete" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt=""></button>
                        </div> 
                        <button class="button button-add text-bold">Checkout</button>`;

    }
    else{
        document.querySelector('.itemOnCart').remove();
        document.querySelector('.result').textContent = 0;
        quantity = 0;
        document.querySelector('.purchase-item').innerHTML = `<p class="item-empty text-bold">Your cart is empty</p>`;
    }

});


/*OPEN, CLOSE CART*/

let isBtnCartClicked = false;

btnCart.addEventListener('click', () => {

    isBtnCartClicked = !isBtnCartClicked;
    isBtnCartClicked ? cart.style.display = 'block' : cart.style.display = '';

});

const deleteItem = () => {

    for(let i = document.querySelector('.purchase-item').children.length-1; i >= 0 ; i--)
    {
        document.querySelector('.purchase-item').firstElementChild.remove();
    }

    document.querySelector('.itemOnCart').remove();
    document.querySelector('.result').textContent = 0;
    quantity = 0;
    document.querySelector('.purchase-item').innerHTML = `<p class="item-empty text-bold">Your cart is empty</p>`;

};


