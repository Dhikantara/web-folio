function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -8.640459, lng: 115.268306};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Bali, INA' // Title Location
    });
}