var contactReady;

function contactReady() {
  console.log('CONTACT');
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
          "infowindow": "hello!"
        }
      ]);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
      handler.getMap().setZoom(15);
    }
  );
}
$(document).on('turbolinks:load', contactReady);
// $(document).on('page:change', ready);
// $(document).ready(contactReady);
