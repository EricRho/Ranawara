var ready;

function ready() {
  handler = Gmaps.build('Google');
  handler.buildMap({
      provider: {
        mapTypeId: 'satellite',
        maxZoom: 20,
        zoom: 15

      },
      internal: {
        id: 'map'
      }
    },
    function(){
      markers = handler.addMarkers([
        {
          "lat": 6.072289,
          "lng": 80.916981,
          // "picture": {
          //   "url": "logos/icon.png",
          //   "width":  32,
          //   "height": 32
          // },
          "infowindow": "hello!"
        }
      ]);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
      handler.getMap().setZoom(15);
    }
  );
}

$(document).ready(ready);
