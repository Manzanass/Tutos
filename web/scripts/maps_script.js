
$(document).ready(function () {
    
    show_amp();
    console.log("OK");

 });


function show_amp() {


	/***************************** MAPA 1 ********************************/

	var puebla_zocalo = {lat: 19.0440482, lng: -98.1978716};


	var map = new google.maps.Map(document.getElementById('map_one'), {
	    zoom: 16,
	    center: puebla_zocalo,
	    scrollwheel: false
	  });
	//19.030259,-97.9873396


	var marker3 = new google.maps.Marker({
	    position: puebla_zocalo, 
	    map: map,
	    title: 'Catedral Puebla!'
	  });

	var infowindow2 = new google.maps.InfoWindow({
        map: map,
        position: puebla_zocalo,
        content:
            '<h6>Estado: Puebla</h6>' +
            '<p>Zocalo Puebla</p>'
    });




	/***************************** MAPA 2 ********************************/

    var customMapType = new google.maps.StyledMapType([
    {
    	stylers: [
          {	hue: '#FF0004' },
          {	visibility: 'simplified'},
          {	gamma: 0.5	},
          {	weight: 0.5	}
        ]
    },
    {
    	elementType: 'labels',
        stylers: [{visibility: 'off'}]
    },
    {
        featureType: 'water',
        stylers: [{color: '#A801FB'}]
    }
    ],

    {
      name: 'Mi tema personal'
  	}
  	);

  	var customMapTypeId = 'my theme maps';

  	var myLatLng = {lat: 19.0440482, lng: -98.1978716};
    //18.938197, -97.874229

  var map2 = new google.maps.Map(document.getElementById('map_two'), {
  	zoom: 13,
    center: myLatLng,
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

map2.mapTypes.set(customMapTypeId, customMapType);
  map2.setMapTypeId(customMapTypeId);




}