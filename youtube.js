$("button").on("click", function() {

    var query = $("#search").val().trim()
    $("#myVid").empty()
    
    
    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?maxResults=50&part=snippet&q=${query}&key=AIzaSyBq3lFS9D0bsQwVfUc0w80A7LzQj1ut9rw`,
        method: "GET"
    })
    .then(function (response) {
        // A music video pops up on the screen
        console.log(response)
        var videoCounter = 0;
        for (var i = 0; i < response.items.length; i++) {
            if (response.items[i].id.kind === "youtube#video" && videoCounter < 8){
                    var videoplayer = $(`<iframe src=https://www.youtube.com/embed/${response.items[i].id.videoId}>`)
                    $('#myVid').append(videoplayer)
                    videoCounter++;
            } 
        }
    })
});

    


   
