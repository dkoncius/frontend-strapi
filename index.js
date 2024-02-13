document.addEventListener('DOMContentLoaded', () => {
    fetch('https://backend-strapi-production-e7c0.up.railway.app/api/about?populate=*')
        .then(response => response.json())
        .then(data => {
            const attributes = data.data.attributes;
            
            // Set title and description
            document.getElementById('title').textContent = attributes.Title;
            document.getElementById('description').textContent = attributes.description;
            
            // Handle images
            const imagesContainer = document.getElementById('images');
            attributes.images.data.forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = `https://backend-strapi-production-e7c0.up.railway.app${image.attributes.url}`; // Adjust if using a different base URL
                imgElement.alt = image.attributes.alternativeText || 'Image';
                imagesContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
