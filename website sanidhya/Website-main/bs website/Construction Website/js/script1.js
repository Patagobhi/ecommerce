const product = [
  {
    id: 0,
    image: 'images/woodplanks.jpeg',
    title: 'wood planks',
    price: 1200,
  },
  {
    id: 1,
    image: 'images/windowglass.jpeg',
    title: 'window glass',
    price: 600,
  },
  {
    id: 2,
    image: 'images/sand.jpeg',
    title: 'sand',
    price: 2300,
  },
  {
    id: 3,
    image: 'images/tiles.jpeg',
    title: 'tiles',
    price: 2100,
  },
  {
    id: 4,
    image: 'images/cement.jpeg',
    title: 'Cement',
    price: 1100,
  },
  {
    id: 5,
    image: 'images/concrete.jpeg',
    title: 'concrete',
    price: 1000,
  },
  {
    id: 6,
    image: 'images/bricks.png',
    title: 'Bricks',
    price: 500,
  },
  {
    id: 7,
    image: 'images/pipes.jpeg',
    title: 'pipes',
    price: 1800,
  },
];

const categories = [...new Set(product.map((item) => item.title))];

let i = 0;

document.getElementById('root').innerHTML = categories
  .map((item) => {
    const { image, title, price } = product.find((productItem) => productItem.title === item);
    return (
      `<div class='box'>
        <div class='img-box'>
          <img class='images' src=${image}></img>
        </div>
        <div class='bottom'>
          <p>${title}</p>
          <h2>Rs. ${price}.00</h2>` +
      "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
      `</div>
      </div>`
    );
  })
  .join('');

var cart = [];

function addtocart(a) {
  cart.push({ ...product[a] });
  displaycart();
}

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById('count').innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = 'Your cart is empty';
    document.getElementById('total').innerHTML = 'Rs. ' + 0 + '.00';
  } else {
    document.getElementById('cartItem').innerHTML = cart
      .map((items) => {
        const { image, title, price } = items;
        total = total + price;
        document.getElementById('total').innerHTML = 'Rs. ' + total + '.00';
        return (
          `<div class='cart-item'>
            <div class='row-img'>
              <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size: 15px;'>Rs. ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" + j++ + ")'></i></div>"
        );
      })
      .join('');
  }
}
