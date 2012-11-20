
var directionDisplay,
    directionsService = new google.maps.DirectionsService(),
    initCoords = [41.850033, -87.6500523],
    map;

function initializeMap() {
    
    directionsDisplay = new google.maps.DirectionsRenderer();
    
    var mapOptions = {
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(initCoords[0], initCoords[1])
    };
    
    map = new google.maps.Map($('#map-canvas')[0], mapOptions);

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel($('#directions-panel')[0]);

    var control = document.getElementById('control');
    control.style.display = 'block';
    map.controls[google.maps.ControlPosition.TOP].push(control);
}

function caculateDrivingRoute() {

    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}

$(function() {

    // cache selectors
    $tabContentDivs = $(".content-tabs-inner");
    $sideTabs = $("#side-tabs li");

    // expects #who, #what, #where, etc...
    var setActiveTab = function(tabName) {

        $sideTabs.removeClass("active");
        $tabContentDivs.removeClass("active");

        $(tabName + "-tab").addClass("active");
        $(tabName + "-tab-link").addClass("active");

        // make sure the map resizes
        map && google.maps.event.trigger(map, 'resize');
    };

    // set the appropriate tab based on the hash
    var hash = location.hash.trim();
    hash.length && setActiveTab(location.hash);

    $sideTabs.click(function() {
        // grab the href from the child link
        var tabName = $(this).find("a").attr("href");
        setActiveTab(tabName);
    }); 

    // initialize the map
    initializeMap();
});
