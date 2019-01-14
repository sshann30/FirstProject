$("button").on("click", function() {
// This is the API Key for Ticketmaster
var APIKey = "Tc6jpxusC72MZ5muDlqGCFE5pWeHUMAl"
var searchTerm = $("#search").val().trim()
// Call for Ticketmaster API (us only)
var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?sort=date,asc&keyword=" + searchTerm + "&source=ticketmaster&countryCode=US&apikey=" + APIKey

console.log ("searching artist ", searchTerm)
// Performing an AJAX request with the queryURL
$.ajax({
  url: queryURL,
  method: "GET"
})

  .then(function (response) {
    console.log(response._embedded.events)

  $("#TicketMaster").empty()
  $("#myVid").empty()


    // after i pull info from ticketmaster
    var events = response._embedded.events
    for (var i = 0; i < events.length; i++) {
      // console.log("tracking full events length")
      // console.log(queryURL);
      // console.log(events.length)
      // console.log(i)


      //actual data pulled from console


      var date = events[i].dates.start.localDate ; //use moment later;
      var convertedDate = moment(date, "MM-DD-YYYY");
      console.log(events[i].dates.start.localDate)
      console.log(convertedDate)
      var time = events[i].dates.start.localTime; //use moment later;
      // console.log(events[i].dates.start.localTime)
      var venue = events[i]._embedded.venues[0].name
      // console.log(events[i]._embedded.venues[0].name)

      if (events[i].priceRanges) {
        var costMin = events[i].priceRanges[0].min;
        // console.log(events[i].priceRanges[0].min)
        var costMax = events[i].priceRanges[0].max;
        // console.log(events[i].priceRanges[0].max)

      }

      //display info pulled into hmtl via rows
      var tr = $("<tr>");

      tourDateTd = $("<td>").text(convertedDate);
      tourTimeTd = $("<td>").text(time);
      tourVenueTd = $("<td>").text(venue);
      ticketCostTd = $("<td>").text(" Minimum: $" + costMin + "    Maximum: $" + costMax + "+");

      tr.append(tourDateTd, tourTimeTd, tourVenueTd, ticketCostTd)

      $("#TicketMaster").append(tr);

    }
  });

});
