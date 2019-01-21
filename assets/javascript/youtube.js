$(document).ready(function () {
    //-------------------- This is the variable Key ---------------\\
    var key = "AIzaSyD-D_v3VA2ZyoLiCLSSsCO7q81FaSnRLHA";
    var url = 'https://www.googleapis.com/youtube/v3/search';
    var iframeURL = "https://www.youtube.com/iframe_api";

        function showResults(results) {
            var html = "";
            var entries = results.items;
    
            $.each(entries, function (index, value) {
                var title = value.snippet.title;
                var thumbnail = value.snippet.thumbnails.default.url;
                html += '<p>' + title + '</p>';
                html += '<img src="' + thumbnail + '">';
            });
    
            $('#search-results').html(html);
    
        }

        $('#search-term').submit(function (event) {
            event.preventDefault();
            var searchTerm = $('.ytBox').val();
            getRequest(searchTerm);
        });
    
        function getRequest(searchTerm) {

            var params = {
                // The part Param grabs the specific datas
                
                part: 'snippet',
                key: key,
                q: searchTerm,
                maxResults: '1',
            };
    
            $.ajax({
                url: url,
                dataType: 'json',
                data: params,
                success: showResults,
              }).then(function (response) {
                  console.log(response);

                  var player;

                player = new YT.Player('player', {
                  height: '390',
                  width: '640',
                  videoId: response.items.videoid,
                  events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                  }
                });
              console.log(player);
              });

              
        
        }

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
       
});


