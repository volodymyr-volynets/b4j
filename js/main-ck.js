function initializeMap(){directionsDisplay=new google.maps.DirectionsRenderer;var e={zoom:7,mapTypeId:google.maps.MapTypeId.ROADMAP,center:new google.maps.LatLng(initCoords[0],initCoords[1])};map=new google.maps.Map($("#map-canvas")[0],e);directionsDisplay.setMap(map);directionsDisplay.setPanel($("#directions-panel")[0]);var t=document.getElementById("control");t.style.display="block";map.controls[google.maps.ControlPosition.TOP].push(t)}function caculateDrivingRoute(){var e=document.getElementById("start").value,t=document.getElementById("end").value,n={origin:e,destination:t,travelMode:google.maps.DirectionsTravelMode.DRIVING};directionsService.route(n,function(e,t){t==google.maps.DirectionsStatus.OK&&directionsDisplay.setDirections(e)})}var directionDisplay,directionsService=new google.maps.DirectionsService,initCoords=[41.850033,-87.6500523],map;$(function(){$tabContentDivs=$(".content-tabs-inner");$sideTabs=$("#side-tabs li");var e=["who","what","where","when","why"],t={};for(var n=0;n<e.length;n++)t["#"+e[n]]=!0;var r=function(e){if(!(e in t))return;$sideTabs.removeClass("active");$tabContentDivs.removeClass("active");$(e+"-tab").addClass("active");$(e+"-tab-link").addClass("active");map&&google.maps.event.trigger(map,"resize")},i=location.hash.trim();i.length&&r(location.hash);$sideTabs.click(function(){var e=$(this).find("a").attr("href");r(e)})});