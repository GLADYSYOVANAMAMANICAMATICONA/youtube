"use strict";

const API_KEY = "AIzaSyB6RQPxv-X6aojxx9IKh0Nc4twyqlMnitI";


let app = {
      result: {
            videos: [],
            selectedVideo: null,
            searchTerm: "iPhone X"
      },

      init: function () {
            // app.videoSearch("iPhone");
            app.youtubeSearch("iPhone X")

      },



      getVideoList: function (videos) {
            return videos.map((video, index) => {
                  const imageUrl = video.snippet.thumbnails.default.url;
                  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
                  return `<li> 
          
                     <div class="col-md-9">
                        <iframe class="embed-responsive-item" width=100% src=${url}> </iframe>
                     </div>
                       
                      <div class="col-md-3">                                                              
                        
                        <img class="media-object miniaturas" src=${imageUrl} />\ 
                        <p>${video.snippet.title}<p><hr><p>${video.snippet.description}</p>
                      </div>
           
               </li>`;
            });
      },



      youtubeSearch: function (searchTerm) {
            console.log(searchTerm);
            YTSearch({ key: API_KEY, term: searchTerm }, data => {
                  console.log("result", data);
                  app.result = {
                        videos: data,
                        selectedVideo: data[0],
                        searchTerm: searchTerm
                  };
                  var list = app.getVideoList(app.result.videos);
                  console.log("lis: ", list);
                  $("#root").append(list[0]);
            });

      },

      videoSearch: function (searchTerm) {
            jQuery.getJSON("list.json", data => {
                  console.log("result", data.items);
                  app.result = {
                        videos: data.items,
                        selectedVideo: data.items[0],
                        searchTerm: searchTerm
                  };
                  var list = app.getVideoList(app.result.videos);
                  console.log("lis: ", list);
                  $("#root").append(list);
            });
      }
};
$('#buscar').click(function() {
      let nombreVideoABuscar = $('#input-buscar').val();
      app.youtubeSearch(nombreVideoABuscar);
});

      $(document).ready(app.init);
