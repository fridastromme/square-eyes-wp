const url = "http://mageknip.no/wp-json/wc/store/products";

const newsContainer = document.querySelector(".new");

async function getMovies() {

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        newsContainer.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            const nameContainer = data[i].name;

            // imageContainer henter fra en array inni en array, så du trenger å legge til [0]:
            const imageContainer = data[i].images[0].src;


            newsContainer.innerHTML +=
                `<div class="new-films">
                <div class="film-container">
                <img src="${imageContainer}" alt="${nameContainer}" class="new-image"/>
			    <h2 class="title">${nameContainer}</h2>
                </div>
		        </div>
                </a>`;
        }

    } catch (error) {
        console.log("Something went wrong when calling the API.")
        productContainer.innerHTML = `<h1 class="details-name">Ops, something went wrong.</h1>`;
    }
}

getMovies()