var map = L.map('worldMap').setView([25, 0], 1.5);

function onEachFeature(feature, layer) {
  if(feature.properties.description) {
    layer.bindPopup(feature.properties.description, {closeButton: false, offest: L.point(0, -20)});
    layer.on("mouseover", function() {
      layer.openPopup();
      layer.setStyle({fillColor: "red"});
    });
    layer.on("mouseout", function() {
      layer.closePopup();
      layer.setStyle({fillColor: "#00A18E"});
    });
  }
}

$.getJSON("world-110m.geojson", function(data) {
  L.geoJson(data, {
    style: function(feature) {
      var fillColor;
      if(feature.properties.description)
        fillColor = "#00A18E";
      else
        fillColor = "#000000";
      
      return {fillColor: fillColor, color: "#222222", weight: .5, fillOpacity: 1};
    },
    onEachFeature: onEachFeature
  }).addTo(map)
});