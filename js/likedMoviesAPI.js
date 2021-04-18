// Popular titles-category:
const likedUrl = "https://mageknip.no/wp-json/wc/store/products?category=16";

const likedMovieContainer = document.querySelector(".liked");

async function getLikedMovies() {

    try {
        const response = await fetch(likedUrl);
        const data = await response.json();
        console.log(data);

        likedMovieContainer.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            const nameContainer = data[i].name;
            const imageContainer = data[i].images[0].src;

            if (i === 1) {
                break
            }

            likedMovieContainer.innerHTML +=
                `<div class="new-films">
                <a href="#"><div class="film-container">
                <img src="${imageContainer}" alt="${nameContainer}" class="new-image"/>
			    <h3 class="title">${nameContainer}</h3>
                </div></a>
		        </div>
                </a>`;
        }

    } catch (error) {
        console.log("Something went wrong when calling the API.")
        likedMovieContainer.innerHTML = `<h1 class="details-name">Ops, something went wrong.</h1>`;
    }
}

getLikedMovies()