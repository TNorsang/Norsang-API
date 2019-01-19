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
    
            $.ajax({
                url: url,
                dataType: 'json',
                data: params,
                success: showResults,
                maxResults: '2',
              }).then(function (response) {
                  console.log(response);
              });
           
        
        }

       
});


