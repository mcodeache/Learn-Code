const apiKey = 'LCHUGEnWtOaukmWi08nWwAyMkGAu8i4LkmRPYm14IpdTgP2MeOUuZFrD';
const apiUrl = 'https://api.pexels.com/v1/search';


async function fetchData(query, perPage = 3) {
    const url = `${apiUrl}?query=${query}&per_page=${perPage}`;

    const response = await fetch(url, {
        headers: {
            'Authorization': apiKey,
        },
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
}

function processImages(photos) {
    const collageContainer = document.getElementById('collageContainer');

    photos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.src.large;
        imgElement.alt = photo.photographer;
        imgElement.classList.add('collageImage');
        collageContainer.appendChild(imgElement);
    });
}

async function createImageCollage(query, perPage) {
    try {
        const data = await fetchData(query, perPage);
        processImages(data.photos);
    } catch (error) {
        console.error('Error:', error);
    }
}

createImageCollage('cars', 4);
