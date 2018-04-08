function initMap() {
    const location = {lat: 49.717022, lng: 19.119010};
    let options = {
        zoom: 14,
        center: location
    };

    let map = new google.maps.Map(document.getElementById('map'), options);

    let marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Click to get directions',
    });
    
    marker.addListener('click', function () {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
        marker.setAnimation(google.maps.Animation.BOUNCE);
    });
}