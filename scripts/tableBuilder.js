//2017
getFishWinnerFile("../JSON/2017FishPrizeWinner.json", "2017FishPrizeWinner");
getFishWinnerFile("../JSON/2017RaffleWinner.json", "2017RaffleWinner");
getSpeciesWinnerFile("../JSON/2017SpeciesWinner.json", "2017SpeciesWinner");

//2016
getFishWinnerFile("../JSON/2016FishPrizeWinner.json", "2016FishPrizeWinner");
get2016RaffleFile("../JSON/2016RaffleWinner.json", "2016RaffleWinner");

//2015
//getFishWinnerFile("../JSON/2015FishPrizeWinner.json", "2015FishPrizeWinner");
//get2015RaffleFile("../JSON/2015RaffleWinner.json", "2015RaffleWinner");

//2014
//getFishWinnerFile("../JSON/2014FishPrizeWinner.json", "2014FishPrizeWinner");











function getFishWinnerFile(fileLocation, tableBodyName) {
  $.getJSON(fileLocation, function(data) {})
   .done(function(data) {
      for(i = 0; i < data.winners.length; i++) {
        var text = "<tr>"
        + "<td>" + data.winners[i].pos + "</td>"
        + "<td>" + data.winners[i].name + "</td>"
        + "<td>" + data.winners[i].weight + "</td>"
        + "<td>" + data.winners[i].species + "</td>"
        + "<td>" + data.winners[i].prize + "</td>"
        +"</tr>";
        $('#'+tableBodyName).append(text);
      }
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  });
}

function get2017RaffleFile(fileLocation, tableBodyName) {
  $.getJSON(fileLocation, function(data) {})
   .done(function(data) {
      for(i = 0; i < data.winners.length; i++) {
        var text = "<tr>"
        + "<td>" + data.winners[i].prize + "</td>"
        + "<td>" + data.winners[i].name + "</td>"
        +"</tr>";
        $('#'+tableBodyName).append(text);
      }
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  });
}

function getSpeciesWinnerFile(fileLocation, tableBodyName) {
  $.getJSON(fileLocation, function(data) {})
   .done(function(data) {
      for(i = 0; i < data.winners.length; i++) {
        var text = "<tr>"
        + "<td>" + data.winners[i].name + "</td>"
        + "<td>" + data.winners[i].weight + "</td>"
        + "<td>" + data.winners[i].species + "</td>"
        + "<td>" + data.winners[i].prize + "</td>"
        +"</tr>";
        $('#'+tableBodyName).append(text);
      }
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  });
}

function get2016RaffleFile(fileLocation, tableBodyName) {
  $.getJSON(fileLocation, function(data) {})
   .done(function(data) {
      for(i = 0; i < data.winners.length; i++) {
        var text = "<tr>"
        + "<td>" + data.winners[i].pos + "</td>"
        + "<td>" + data.winners[i].name + "</td>"
        + "<td>" + data.winners[i].prize + "</td>"
        + "<td>" + data.winners[i].sponsor + "</td>"
        +"</tr>";
        $('#'+tableBodyName).append(text);
      }
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  });
}

function get2015RaffleFile(fileLocation, tableBodyName) {
  $.getJSON(fileLocation, function(data) {})
   .done(function(data) {
      for(i = 0; i < data.winners.length; i++) {
        var text = "<tr>"
        + "<td>" + data.winners[i].pos + "</td>"
        + "<td>" + data.winners[i].name + "</td>"
        + "<td>" + data.winners[i].prize + "</td>"
        +"</tr>";
        $('#'+tableBodyName).append(text);
      }
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  });
}
