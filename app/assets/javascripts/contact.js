var initMap;

function initMap() {
  var uluru = {
    lat: 6.072289,
    lng: 80.916981
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: uluru,
    mapTypeId: 'satellite'
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
