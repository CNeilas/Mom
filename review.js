const reviewWrapper = document.querySelector('.review-wrapper');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showReview(index) {
  const reviews = document.querySelectorAll('.review');
  const reviewWidth = reviews[0].clientWidth + 20; // Including margin
  const totalWidth = reviewWrapper.scrollWidth;

  // Ensure index is within bounds
  index = Math.max(0, Math.min(index, reviews.length - 1));

  // Update the wrapper's transform property
  reviewWrapper.style.transform = `translateX(${-index * reviewWidth}px)`;
  currentIndex = index;
}

// Button event listeners
nextBtn.addEventListener('click', () => {
  showReview(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
  showReview(currentIndex - 1);
});

// Optional: Add swipe functionality for touch devices
let startX;

reviewWrapper.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

reviewWrapper.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX > endX + 50) showReview(currentIndex + 1); // Swipe left
  if (startX < endX - 50) showReview(currentIndex - 1); // Swipe right
});
