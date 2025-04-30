const filpBt = document.querySelector('.flip-button');
const card = document.querySelector('.card');
filpBt.addEventListener('click', () => {
  card.classList.toggle("is-flipped");
});
