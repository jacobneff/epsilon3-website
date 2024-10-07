// Sample data array (this could be replaced with your actual data)
const pages = [
    { title: "Features", link: "features.html" },
    { title: "Standard Edition", link: "options.html#standard" },
    { title: "Travel Edition", link: "options.html#travel" },
    { title: "Premium Edition", link: "options.html#premium" },
    { title: "Prices", link: "prices.html" },
    { title: "Contact Us", link: "contact.html" }
];

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsContainer = document.getElementById('search-results');
    
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Filter pages based on the search query
    const filteredPages = pages.filter(page => page.title.toLowerCase().includes(query));

    if (filteredPages.length > 0) {
        filteredPages.forEach(page => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `<a href="${page.link}">${page.title}</a>`;
            resultsContainer.appendChild(resultElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
});
