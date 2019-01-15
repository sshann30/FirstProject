$("button").on("click", function() {

    var query = $("#search").val().trim()
    $("#myVid").empty()
    
    
    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?maxResults=50&part=snippet&q=${query}&key=AIzaSyCiUmwKl8Ufw2mH16uY8PQ5vu_6rRTSc4g`,
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

    


   
