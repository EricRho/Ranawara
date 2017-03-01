var ready;

function ready() {
  handler = Gmaps.build('Google');
  handler.buildMap({
      provider: {
        // disableDefaultUI: true
        maxZoom: 10
        // pass in other Google Maps API options here
      },
      internal: {
        id: 'map'
      }
    },
    function(){
      markers = handler.addMarkers([
        {
          "lat": 51.5,
          "lng": -0.12,
          // "picture": {
          //   "url": "http://people.mozilla.com/~faaborg/files/shiretoko/firefoxIcon/firefox-32.png",
          //   "width":  32,
          //   "height": 32
          // },
          "infowindow": "hello!"
        }
      ]);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
    }
  );
}

$(document).ready(ready);
