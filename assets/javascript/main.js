$(document).ready(function () {
    //-------------------- This is the variable Key ---------------\\
    var key = "AIzaSyD-D_v3VA2ZyoLiCLSSsCO7q81FaSnRLHA";
    var url = 'http://www.googleapis.com/youtube/v3/search';

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
            var url = 'https://www.googleapis.com/youtube/v3/search';
            var params = {
                part: 'snippet',
                key: key,
                q: searchTerm
            };
    
            // $.getJSON(url, params, showResults);
            $.ajax({
                url: url,
                dataType: 'json',
                data: params,
                success: showResults
              }).then(function (response) {
                  console.log(response);
              });
            // console.log($.getJSON(url, params, showResults));
        
        }

       
});




   











        // $.ajax({
            //         // crossOrigin: true,
            //         url: url,
            //         method: "GET",
            //         params: params
            //      }).then(function (results) {
            //          console.log(results);
            //         showResults(results);
            //      });
             
            
            //     function showResults(results) {
            //     var html = "";
            //     var entries = results.items;
            
            //     for (i=0; i < entries.length; i++) {
            //         var title = entries[i].snippet.title;
            //         var thumbnail = entries[i].snippet.thumbnails.default.url;
            //         html += '<p>' + title + '</p>';
            //         html += '<img src="' + thumbnail + '">';
            //     }
            
            //     $('#search-results').html(html);
            
            //     $('#search-term').submit(function (event) {
            //         event.preventDefault();
                    
            //         getRequest(searchTerm);
            //     });
            
            // };