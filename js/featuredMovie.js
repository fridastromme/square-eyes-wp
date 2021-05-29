const featuredUrl = 'https://mageknip.no/wp-json/wc/store/products?category=24';

const featuredMovie = document.querySelector ('.container__featured');
const movieInfoContainer = document.querySelector ('.movie-info__container');
const infoModal = document.querySelector ('.info__modal');
const modal = document.querySelector ('.modal');
var close = document.querySelector ('.close');

async function getFeatured () {
  try {
    const response = await fetch (featuredUrl);
    const data = await response.json ();
    console.log (data);

    featuredMovie.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
      const titleContainer = data[i].name;
      const creatorContainer = data[i].short_description;
      const descriptionContainer = data[i].description;
      const priceContainer = data[i].prices.price;

      const featuredImgContainer = data[i].images[0].src;

      featuredMovie.innerHTML += `<img src="${featuredImgContainer}" alt="${titleContainer}" class="featured__container-image"/>
       <div class="featured__headings">
       <h2>Featured: </h2> + <h3>${titleContainer}</h3>
       <h4>${creatorContainer}</h4>
       </div>`;

      infoModal.innerHTML += `
      <img src="${featuredImgContainer}" alt="${titleContainer}" class="modal__image"/>
      <div class="info__modal-content">
      <h2 class="modal__title">${titleContainer}</h2>
      <h3 class="modal__creator">${creatorContainer}</h3>
      <hr class="modal__line"/>
      ${descriptionContainer}
      <h4 class="modal__price">Price: $${priceContainer}</h4>
      <a class="signup__link light-red" href="purchase-movie.html?id=${data[i].id}">Watch now</a>
      </div>`;
    }
  } catch (error) {
    console.log ('Something went wrong when calling the API.');
    featuredMovie.innerHTML = `<h1 class="details-name">Can't load titles. Please try again later.</h1>`;
  }
}

getFeatured ();

featuredMovie.onclick = function () {
  modal.style.display = 'block';
};

close.onclick = function () {
  modal.style.display = 'none';
  console.log ('Close is clicked');
};

featuredMovie.addEventListener ('mouseenter', function (event) {
  this.getElementsByTagName ('h2')[0].style.color = '#ffa987';
  this.getElementsByTagName ('h3')[0].style.color = '#ffa987';
  this.getElementsByTagName ('p')[0].style.color = '#ffa987';
});

featuredMovie.addEventListener ('mouseleave', function (event) {
  this.getElementsByTagName ('h2')[0].style.color = 'white';
  this.getElementsByTagName ('h3')[0].style.color = 'white';
  this.getElementsByTagName ('p')[0].style.color = 'white';
});
