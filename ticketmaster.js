$("button").on("click", function () {
  // This is the API Key for Ticketmaster
  var APIKey = "Tc6jpxusC72MZ5muDlqGCFE5pWeHUMAl"
  var searchTerm = $("#search").val().trim()
  // Call for Ticketmaster API (us only)
  var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?sort=date,asc&keyword=" + searchTerm + "&source=ticketmaster&countryCode=US&apikey=" + APIKey

  console.log("searching artist ", searchTerm)
  $("#TicketMaster").empty()
  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })

    .then(function (response) {
      console.log(response._embedded.events)


      // after i pull info from ticketmaster
      var events = response._embedded.events
      for (var i = 0; i < events.length; i++) {
        // console.log("tracking full events length")
        // console.log(queryURL);
        // console.log(events.length)
        console.log(events)


        //actual data pulled from console


        var date = events[i].dates.start.localDate; //use moment later;
        console.log(date)
        var convertedDate = moment(date).format("MM-DD-YYYY");
        // console.log(events[i].dates.start.localDate)
        console.log(convertedDate)
        var time = events[i].dates.start.localTime; //use moment later;
        var convertedTime = moment(time, "HH:mm").format("hh:mm a")
        // console.log(events[i].dates.start.localTime)
        var venue = events[i]._embedded.venues[0].name
        // console.log(events[i]._embedded.venues[0].name)


        var costMin;
        var costMax;


        if (events[i].hasOwnProperty('priceRanges')) {
          costMin = events[i].priceRanges[0].min;
          costMax = events[i].priceRanges[0].max;
        } else {
          costMin = "Check Venue";
          costMax = "Check Venue"
        }
        //display info pulled into hmtl via rows
        var tr = $("<tr>");

        tourDateTd = $("<td>").text(convertedDate);
        tourTimeTd = $("<td>").text(convertedTime);
        tourVenueTd = $("<td>").text(venue);
        ticketCostTd = $("<td>").text(" Minimum: $" + costMin + "    Maximum: $" + costMax + "+");

        tr.append(tourDateTd, tourTimeTd, tourVenueTd, ticketCostTd)

        $("#TicketMaster").append(tr);

      }
    });

});