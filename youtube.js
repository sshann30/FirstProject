<<<<<<< HEAD
<!DOCTYPE html>
<html>
  <body>
    <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
    <div id="player"></div>

    <script>
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
    </script>
  </body>
</html>
=======
$("button").on("click", function() {

    var query = $("#search").val().trim()
    
    
    $.ajax({
        url: `https://www.googleapis.com/youtube/v3/search?maxResults=15&part=snippet&q=${query}&key=AIzaSyBq3lFS9D0bsQwVfUc0w80A7LzQj1ut9rw`,
        method: "GET"
    })
    .then(function (response) {
        // A music video pops up on the screen
        console.log(response)
        
        for (var i = 0; i < response.items.length; i++) {
            if (response.items[i].id.kind === "youtube#video"){
                var videoplayer = $(`<iframe src=https://www.youtube.com/embed/${response.items[i].id.videoId}>`)
                $('#myVid').append(videoplayer)
            } 
        }
    })
});

    


   
>>>>>>> 7f1e16eefe3bb9d9358edf3f148cc30718b38fcf
