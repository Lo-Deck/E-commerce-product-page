# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/E-commerce-product-page/blob/main/screenshot/E-commerce%20product%20page-mobile.png).
![screenshot desktop](https://github.com/Lo-Deck/E-commerce-product-page/blob/main/screenshot/E-commerce%20product%20page-desktop.png).
![screenshot desktop-cart](https://github.com/Lo-Deck/E-commerce-product-page/blob/main/screenshot/E-commerce%20product%20page-desktop-cart.png).
![screenshot desktop-lightbox](https://github.com/Lo-Deck/E-commerce-product-page/blob/main/screenshot/E-commerce%20product%20page-desktop-lightbox.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/E-commerce-product-page).
- Live Site URL: [Website](https://lo-deck.github.io/E-commerce-product-page/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned how to make a image gallery and change the source when you click on a `button`.

```js

item.addEventListener('click', () => {
        
   if(index === 0 ){

      j--;

      if(j < 0){
        j = 3;
      }

   document.querySelector('.lightbox .image-product').src = `./images/image-product-${j+1}.jpg`;

```


Select a product with the quantity and add on a cart shopping.

```js

item.addEventListener('click', () => {

    if(index === 0 && quantity > 0){
       quantity--;
    }...

const numberItem = document.createElement('span');
numberItem.textContent = quantity;
numberItem.classList.add('itemOnCart');
btnCart.insertAdjacentElement('afterbegin', numberItem);


```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.
- [Utopia](https://utopia.fyi/) - To have a better responsive design.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
