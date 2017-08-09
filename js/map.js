// When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 15,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(52.5045999,13.3436807), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#6600ff"},{"saturation":-11},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":"33"},{"hue":"#6600ff"},{"lightness":"2"},{"visibility":"simplified"}]},{"featureType":"poi.attraction","elementType":"all","stylers":[{"saturation":"-58"},{"lightness":"28"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"saturation":"-58"},{"lightness":"28"}]},{"featureType":"poi.government","elementType":"all","stylers":[{"saturation":"-58"},{"lightness":"28"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"saturation":"-58"},{"lightness":"28"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"},{"saturation":"-58"},{"lightness":"28"}]},{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"saturation":"-58"},{"lightness":"28"}]},{"featureType":"poi.school","elementType":"all","stylers":[{"saturation":"-58"},{"lightness":"28"}]},{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"saturation":"-58"},{"lightness":"28"}]},{"featureType":"road","elementType":"all","stylers":[{"hue":"#5e00ff"},{"saturation":-79}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":30},{"weight":1.3}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"},{"hue":"#5e00ff"},{"saturation":-16}]},{"featureType":"transit.line","elementType":"all","stylers":[{"saturation":-72}]},{"featureType":"water","elementType":"all","stylers":[{"saturation":-65},{"hue":"#1900ff"},{"lightness":8}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(52.504626, 13.3314498),
                    map: map,
                    title: 'DataFirst'
                });
            }