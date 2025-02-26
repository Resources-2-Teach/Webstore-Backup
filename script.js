// Placeholder script for managing the cart functionality
document.addEventListener('DOMContentLoaded', function() {
  const cartCount = document.querySelector('.cart-count');

  // Logic for adding items to cart
  let cartItems = 0;

  // Example of how to handle cart updates
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
      cartItems++;
      cartCount.textContent = cartItems;
    });
  });
});

let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    const offset = currentIndex * -100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    changeSlide(1);
}, 5000);
