const detailsContainer = document.querySelector("#watchmovie");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const fetchUrl = "https://mageknip.no/wp-json/wc/store/products/" + id;

async function fetchMovie() {

    try {

        const response = await fetch(fetchUrl);
        const details = await response.json();

        console.log(details);

        detailsContainer.innerHTML =
            `<img src="${details.images[0].src}" alt="${details.name}"/ class="details-image">
            <div class="details-text">
            <h1 class="details-title">${details.name}</h1>
            <h2 class="details-name">${details.short_description}</h2>
            <p class="details-description">${details.description}</p>
            <h3 class="details-price">Price: $${details.prices.price}
            </div>`;

    } catch (error) {
        console.log("Something went wrong when calling the API.")
        detailsContainer.innerHTML = `<h1>We can't find the movie you're looking for.</h1>`;
    }
}

fetchMovie();
