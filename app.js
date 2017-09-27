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
            $('#buscar').click(app.buscaVideo);



      },
      getVideoList: function (videos) {
            return videos.map((video, index) => {
  
                  const imageUrl = video.snippet.thumbnails.default.url;
                  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
                  return `<li>                                                            
                        
                        <img class="media-object miniaturas" src=${imageUrl} />\ 
                        <p>${video.snippet.title}<p><hr>
                      
           
               </li>`;
            });
      },
      // <p>${video.snippet.description}</p>
      

      buscaVideo: () => {
            let nombreVideoABuscar = $('#input-buscar').val();
            app.youtubeSearch(nombreVideoABuscar);
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

                  app.primerVideo(app.result.videos[0])

                  var list = app.getVideoList(app.result.videos);
                  console.log("lis: ", list);
                  $("#listaVideos").html(list);
                  $("#listaVideos").click(app.clikearVideo);
                  
            });
      },

      primerVideo:(video) =>{
            console.log(video)
                  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
                  $("#video").html(`<iframe class="embed-responsive-item" src=${url}> </iframe>`)

      },

      clikearVideo: (e) => {
            let img= e.target.src;
            console.log(img);
            let indice;
            app.result.videos.map((video, i) => {
                return (img == video.snippet.thumbnails.default.url)? indice = i: '';
            })
           // console.log(evento.target.src)
            app.primerVideo(app.result.videos[indice]);
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
                  $("#root").html(list);
            });
      }
};

      $(document).ready(app.init);
