getJSONFile("JSON/2017FishPrizeWinner.json");



function getJSONFile(fileLocation) {
  $.getJSON(fileLocation, function(data) {})
   .done(function(data) {
      // document.write( "JSON Data: " + JSON.stringify(json, undefined, 2) );
      //alert(JSON.stringify(data, undefined, 2));

      for(i = 0; i < data.winners.length; i++) {
        var text = "<tr>"
        + "<td>" + data.winners[i].pos + "</td>"
        + "<td>" + data.winners[i].name + "</td>"
        + "<td>" + data.winners[i].weight + "</td>"
        + "<td>" + data.winners[i].species + "</td>"
        + "<td>" + data.winners[i].prize + "</td>"
        +"</tr>";
        $('#tbody').append(text);
      }
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  });

}
