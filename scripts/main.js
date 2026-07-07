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
      <h2>Thank you!</h2>
      <p>You selected ${selectedRating} out of 5</p>
    `;
  }
})