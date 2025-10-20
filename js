// Show a welcome message when the page loads
window.addEventListener('load', () => {
    console.log("Museum of Apartheid site loaded successfully!");
});

//Button interactivity
const exploreButton = document.getElementById('explore-btn');

if (exploreButton) {
    exploreButton.addEventListener('click', () => {
        alert("Welcome! Explore the exhibits and stories of South Africa's struggle for freedom.");
    });
}