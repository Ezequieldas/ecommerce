const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector ('.product-detail-close')


menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click' , toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


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
  
  closeProductDetailAside();

    mobileMenu.classList.toggle('inactive')

}

function toggleCartAside() {
  const isMobileMenuCLosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuCLosed){
    mobileMenu.classList.add('inactive')
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed){
      productDetailContainer.classList.add('inactive')
  }
  
  shoppingMenu.classList.toggle('inactive');
};

function openProductDetailAside() {

  shoppingMenu.classList.add('inactive');

  desktopMenu.classList.add('inactive')

  productDetailContainer.classList.remove('inactive')
};

function closeProductDetailAside() {

  productDetailContainer.classList.add('inactive')
}


const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://cdn.pixabay.com/photo/2016/09/09/22/40/bike-1658214_960_720.jpg'
})
productList.push({
  name: 'Computer',
  price: 1200,
  image: 'https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_960_720.jpg'
})
productList.push({
  name: 'TV',
  price: 2300,
  image: 'https://cdn.pixabay.com/photo/2020/04/08/15/50/tv-5017870_960_720.jpg'
})
productList.push({
  name: 'Pants',
  price: 120,
  image: 'https://cdn.pixabay.com/photo/2016/11/29/10/21/adult-1868988_960_720.jpg'
})
productList.push({
  name: 'Shirts',
  price: 20,
  image: 'https://cdn.pixabay.com/photo/2020/03/31/16/18/rabbit-4988412_960_720.jpg'
})
productList.push({
  name: 'Hat',
  price: 120,
  image: 'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_960_720.jpg'
})
productList.push({
  name: 'Motorcycle',
  price: 120,
  image: 'https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299_960_720.jpg'
})
productList.push({
  name: 'Fridge',
  price: 520,
  image: 'https://cdn.pixabay.com/photo/2018/11/04/13/29/hospitality-3793946_960_720.jpg'
})
productList.push({
  name: 'Toy',
  price: 11,
  image: 'https://cdn.pixabay.com/photo/2018/05/31/15/06/see-no-evil-3444212_960_720.jpg'
})
productList.push({
  name: 'Flowers',
  price: 10,
  image: 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg'
})
productList.push({
  name: 'Guitar',
  price: 300,
  image: 'https://cdn.pixabay.com/photo/2016/03/26/22/36/man-1281642_960_720.jpg'
})
productList.push({
  name: 'Piano',
  price: 1500,
  image: 'https://cdn.pixabay.com/photo/2018/06/29/01/47/piano-3505109_960_720.jpg'
})


function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
 
    const productImg = document.createElement('img');
     productImg.setAttribute('src', product.image);
     productImg.addEventListener('click', openProductDetailAside)
 
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
};

renderProducts(productList);
