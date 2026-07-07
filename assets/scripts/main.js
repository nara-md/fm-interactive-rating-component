// Interactive Rating Component

const ratings = document.querySelectorAll('.rating');
const ratingContent = document.querySelector('.rating-content');
const submitButton = document.querySelector('#submit');

let selectedRating = 0;

ratings.forEach(rating => {
  rating.addEventListener('click', (event) => {
    selectedRating = Number(rating.dataset.value);

    console.log(selectedRating);
  });
});

submitButton.addEventListener('click', () => {
  if (selectedRating > 0) {
    ratingContent.innerHTML = `
      <div class="thank-you-content">
      <img src="assets/images/illustration-thank-you.svg" alt="Thank You Illustration" class="thank-you-image">
      <span class="selected-rating">You selected ${selectedRating} out of 5</span>
      <h2>Thank you!</h2>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
  </div>
    `;
  }
})