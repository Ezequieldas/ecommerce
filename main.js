const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')



menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click' , toggleCartAside)


function toggleDesktopMenu() {
  const isAsideClosed = shoppingMenu.classList.contains('inactive');

  if (!isAsideClosed){
    shoppingMenu.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingMenu.classList.contains('inactive');

  if (!isAsideClosed){
    shoppingMenu.classList.add('inactive')
  }
  
    mobileMenu.classList.toggle('inactive')

}

function toggleCartAside() {
  const isMobileMenuCLosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuCLosed){
    mobileMenu.classList.add('inactive')
  }

    shoppingMenu.classList.toggle('inactive')
};

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299_960_720.jpg'
})
productList.push({
  name: 'Computer',
  price: 1200,
  image: 'https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299_960_720.jpg'
})
productList.push({
  name: 'TV',
  price: 2300,
  image: 'https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299_960_720.jpg'
})
productList.push({
  name: 'Pants',
  price: 120,
  image: 'https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299_960_720.jpg'
})
productList.push({
  name: 'Shirts',
  price: 120,
  image: 'https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299_960_720.jpg'
})
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299_960_720.jpg'
})
productList.push({
  name: 'Motorcycle',
  price: 120,
  image: 'https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299_960_720.jpg'
})
productList.push({
  name: 'Fridge',
  price: 120,
  image: 'https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299_960_720.jpg'
})
productList.push({
  name: 'Toy',
  price: 120,
  image: 'https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299_960_720.jpg'
})
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299_960_720.jpg'
})

for (product of productList) {
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');

   const productPrice = document.createElement('p');
   productPrice.innerText = '$'+ product.price;

   const productName = document.createElement('p');
   productName.innerText = product.name;

   productInfoDiv.appendChild(productName);
   productInfoDiv.appendChild(productPrice);

   const productInfoFigure = document.createElement('figure');

   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src', "./assets/icons/bt_add_to_cart.svg");

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard)
}

