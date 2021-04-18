// Popular titles-category:
const popUrl = "https://mageknip.no/wp-json/wc/store/products?category=16";

const popMovieContainer = document.querySelector(".pop")

async function getPopMovies() {

    try {
        const response = await fetch(popUrl);
        const data = await response.json();
        console.log(data);

        popMovieContainer.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            const nameContainer = data[i].name;

            // imageContainer henter fra en array inni en array, så du trenger å legge til [0]:
            const imageContainer = data[i].images[0].src;


            popMovieContainer.innerHTML +=
                `<div class="new-films">
                <a href="#"><div class="film-container">
                <img src="${imageContainer}" alt="${nameContainer}" class="new-image"/>
			    <h2 class="title">${nameContainer}</h2>
                </div></a>
		        </div>
                </a>`;
        }

    } catch (error) {
        console.log("Something went wrong when calling the API.")
        popMovieContainer.innerHTML = `<h1 class="details-name">Ops, something went wrong.</h1>`;
    }
}

getPopMovies()