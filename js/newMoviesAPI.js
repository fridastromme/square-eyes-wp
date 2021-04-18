
// New titles-category:
const newUrl = "https://mageknip.no/wp-json/wc/store/products?category=17";

const newMovieContainer = document.querySelector(".new");

async function getNewMovies() {

    try {
        const response = await fetch(newUrl);
        const data = await response.json();
        console.log(data);

        newMovieContainer.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            const nameContainer = data[i].name;

            const imageContainer = data[i].images[0].src;

            if ((window.location.pathname === '/viewer-profile.html') || (window.location.pathname === '/producer-profile.html')  && (i === 3)) {
                break;
            }

            newMovieContainer.innerHTML +=
                `<a href="purchase-movie.html?id=${data[i].id}">
                <div class="new-films">
                <img src="${imageContainer}" alt="${nameContainer}" class="new-image"/>
			    <h3 class="title">${nameContainer}</h3>
                </div>
		        </div>
                </a>`;
        }

    } catch (error) {
        console.log("Something went wrong when calling the API.")
        newMovieContainer.innerHTML = `<h1 class="details-name">Can't load titles. Please try again later.</h1>`;
    }
}

getNewMovies()