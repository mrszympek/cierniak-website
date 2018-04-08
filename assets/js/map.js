function initMap() {
    const location = {lat: 49.717123, lng: 19.118946};

    let options = {
        zoom: 14,
        center: location
    };

    let map = new google.maps.Map(document.getElementById('map'), options);

    let marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Click to get directions'
    });
    
    marker.addListener('click', function () {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
    });
}