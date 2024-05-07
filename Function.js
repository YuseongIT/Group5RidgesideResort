function toggleLocation(clickedLocation) {
    
    var allLocations = document.querySelectorAll('.location');
  
   
    allLocations.forEach(function(location) {
        if (location !== clickedLocation) {
            location.classList.toggle('hidden');
        }
    });
   
    clickedLocation.querySelector('.location-info').classList.toggle('hidden');
    clickedLocation.querySelector('.google-map').classList.toggle('hidden');

    clickedLocation.querySelector('.location-text').classList.toggle('moved');
    clickedLocation.querySelector('.location-info').classList.toggle('moved');
    clickedLocation.querySelector('.location-image').classList.toggle('moved'); // Add this line
}