mapboxgl.accessToken = 'pk.eyJ1IjoidGFiZWFsZWFybnMiLCJhIjoiY2xoeGJ4Y2k2MHM5cDNmcGNkN25lc3I2eCJ9.jHvF9P_AYloh53ToqqUuKg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [10.4515, 51.1657],
    zoom: 6
});

map.addControl(new mapboxgl.ScaleControl());

map.addControl(new mapboxgl.NavigationControl());

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        routePadding: 10,
        interactive: true,
        alternatives: true,
        controls: {
            instructions: true,
        },
        lineColor: 'red'
    }),
    'top-left'
);

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}


// Element für das Styling auswählen und Hintergrundfarbe ändern
var directionsControlContainer = document.querySelector('.mapboxgl-ctrl-directions.mapboxgl-ctrl');
if (directionsControlContainer) {
    directionsControlContainer.style.backgroundColor = 'white';
}


// GeolocateControl zur Karte hinzufügen
var geolocateControl = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    position: ''
});
map.addControl(geolocateControl);

// Daten aus der Bowling-GeoJSON-Datei hinzufügen
map.on('load', function() {
    map.loadImage('bowling.png', function(error, image) {
        if (error) throw error;
        map.addImage('bowling_marker', image);

        map.addSource('bowling_data', {
            type: 'geojson',
            data: 'bowling.geojson'
        });

        map.addLayer({
            id: 'bowling_layer',
            type: 'symbol',
            source: 'bowling_data',
            layout: {
                'icon-image': 'bowling_marker',
                'icon-size': [
                    'interpolate', ['linear'],
                    ['zoom'],
                    0.1,
                    0.15
                ],
                'icon-allow-overlap': true,
                visibility: 'none'
            }
        });
    });
});

// PopUp Bowling
const popup_bowling = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mouseenter', 'bowling_layer', (e) => {
    map.getCanvas().style.cursor = 'pointer';

    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.name;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    popup_bowling.setLngLat(coordinates).setHTML(description).addTo(map);
});

map.on('mouseleave', 'bowling_layer', () => {
    map.getCanvas().style.cursor = '';
    popup_bowling.remove();
});

// Daten aus der Eislaufen-GeoJSON-Datei hinzufügen
map.on('load', function() {
    map.loadImage('iceskating.png', function(error, image) {
        if (error) throw error;
        map.addImage('iceskating_marker', image);

        map.addSource('iceskating_data', {
            type: 'geojson',
            data: 'iceskating.geojson'
        });

        map.addLayer({
            id: 'iceskating_layer',
            type: 'symbol',
            source: 'iceskating_data',
            layout: {
                'icon-image': 'iceskating_marker',
                'icon-size': [
                    'interpolate', ['linear'],
                    ['zoom'],
                    0.1,
                    0.15
                ],
                'icon-allow-overlap': true,
                visibility: 'none'
            }
        });
    });
});

// PopUp Eislaufen
const popup_iceskating = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mouseenter', 'iceskating_layer', (e) => {
    map.getCanvas().style.cursor = 'pointer';

    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.name;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    popup_iceskating.setLngLat(coordinates).setHTML(description).addTo(map);
});

map.on('mouseleave', 'iceskating_layer', () => {
    map.getCanvas().style.cursor = '';
    popup_iceskating.remove();
});


// Daten aus der Golf-GeoJSON-Datei hinzufügen
map.on('load', function() {
    map.loadImage('golf.png', function(error, image) {
        if (error) throw error;
        map.addImage('golf_marker', image);

        map.addSource('golf_data', {
            type: 'geojson',
            data: 'golf.geojson'
        });

        map.addLayer({
            id: 'golf_layer',
            type: 'symbol',
            source: 'golf_data',
            layout: {
                'icon-image': 'golf_marker',
                'icon-size': [
                    'interpolate', ['linear'],
                    ['zoom'],
                    0.1,
                    0.15
                ],
                'icon-allow-overlap': true,
                visibility: 'none'
            }
        });
    });
});

// PopUp Golf
const popup_golf = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mouseenter', 'golf_layer', (e) => {
    map.getCanvas().style.cursor = 'pointer';

    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.name;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    popup_golf.setLngLat(coordinates).setHTML(description).addTo(map);
});

map.on('mouseleave', 'golf_layer', () => {
    map.getCanvas().style.cursor = '';
    popup_golf.remove();
});


// Daten aus der Museum-GeoJSON-Datei hinzufügen
map.on('load', function() {
    map.loadImage('museum.png', function(error, image) {
        if (error) throw error;
        map.addImage('museum_marker', image);

        map.addSource('museum_data', {
            type: 'geojson',
            data: 'museum.geojson'
        });

        map.addLayer({
            id: 'museum_layer',
            type: 'symbol',
            source: 'museum_data',
            layout: {
                'icon-image': 'museum_marker',
                'icon-size': [
                    'interpolate', ['linear'],
                    ['zoom'],
                    0.1,
                    0.15
                ],
                'icon-allow-overlap': true,
                visibility: 'none'
            }
        });
    });
});

// PopUp Museum
const popup_museum = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mouseenter', 'museum_layer', (e) => {
    map.getCanvas().style.cursor = 'pointer';

    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.name;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    popup_museum.setLngLat(coordinates).setHTML(description).addTo(map);
});

map.on('mouseleave', 'museum_layer', () => {
    map.getCanvas().style.cursor = '';
    popup_museum.remove();
});


// Daten aus der Theater-GeoJSON-Datei hinzufügen
map.on('load', function() {
    map.loadImage('theater.png', function(error, image) {
        if (error) throw error;
        map.addImage('theater_marker', image);

        map.addSource('theater_data', {
            type: 'geojson',
            data: 'theater.geojson'
        });

        map.addLayer({
            id: 'theater_layer',
            type: 'symbol',
            source: 'theater_data',
            layout: {
                'icon-image': 'theater_marker',
                'icon-size': [
                    'interpolate', ['linear'],
                    ['zoom'],
                    0.1,
                    0.15
                ],
                'icon-allow-overlap': true,
                visibility: 'none'
            }
        });
    });
});

// PopUp Theater
const popup_theater = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

map.on('mouseenter', 'theater_layer', (e) => {
    map.getCanvas().style.cursor = 'pointer';

    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.name;

    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    popup_theater.setLngLat(coordinates).setHTML(description).addTo(map);
});

map.on('mouseleave', 'theater_layer', () => {
    map.getCanvas().style.cursor = '';
    popup_theater.remove();
});


// Funktion zum Ein- und Ausschalten des Layers und Aktualisieren des Buttons
function toggleLayer(layerId, buttonId) {
    var visibility = map.getLayoutProperty(layerId, 'visibility');
    var button = document.getElementById(buttonId);

    if (visibility === 'visible') {
        map.setLayoutProperty(layerId, 'visibility', 'none');
        button.classList.remove('active'); // Entfernt die 'active'-Klasse
    } else {
        map.setLayoutProperty(layerId, 'visibility', 'visible');
        button.classList.add('active'); // Fügt die 'active'-Klasse hinzu
    }
}