// Initialize the map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 },
    });

    // Add a listener for the form submission
    document.getElementById("sighting-form").addEventListener("submit", function (event) {
        event.preventDefault();
        const animalType = document.getElementById("animal-type").value;
        const location = document.getElementById("location").value;
        reportSighting(animalType, location, map);
    });
}

// Function to report a sighting
function reportSighting(animalType, location, map) {
    // Here you would typically send the data to your backend
    console.log(`Reported ${animalType} at ${location}`);
    
    // For demonstration, let's add a marker on the map
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: location }, function (results, status) {
        if (status === "OK") {
            const marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map,
                title: animalType,
            });
            map.setCenter(results[0].geometry.location);
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
    });
}