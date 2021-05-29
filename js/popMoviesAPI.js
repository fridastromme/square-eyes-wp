// Popular titles-category:
const popUrl = 'https://mageknip.no/wp-json/wc/store/products?category=16';

const popMovieContainer = document.querySelector ('.pop');

async function getPopMovies () {
  try {
    const response = await fetch (popUrl);
    const data = await response.json ();
    console.log (data);

    popMovieContainer.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
      const nameContainer = data[i].name;

      const imageContainer = data[i].images[0].src;

      if (window.location.pathname === '/viewer-profile.html' && i === 3) {
        break;
      }

      popMovieContainer.innerHTML += `<a href="purchase-movie.html?id=${data[i].id}">
                <div class="new-films">
                <img src="${imageContainer}" alt="${nameContainer}" class="new-image"/>
			    <h3 class="title">${nameContainer}</h3>
		        </div>
                </a>`;
    }
  } catch (error) {
    console.log ('Something went wrong when calling the API.');
    popMovieContainer.innerHTML = `<h1 class="details-name">Can't load titles. Please try again later.</h1>`;
  }
}

getPopMovies ();
