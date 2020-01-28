let song = {
    songName: "Circles",
    songArtist: "Post Malone",
    songLength: 336,
    songImage: "https://i.ytimg.com/vi/pQV0WEdT_OE/maxresdefault.jpg",
    songLink: "https://www.youtube.com/watch?v=pQV0WEdT_OE"
};
let playlist = [song]


$('.addButton').click(function() {
  playlist.forEach(function(song){
    $("#songNames").append("<p> name : "+song["songName"]+"</p>");
    $("#songArtist").append("<p> name : "+song["songArtist"]+"</p>");
    $("#songLength").append("<p> name : "+song["songLength"]+"</p>");
    $("#songImage").append("<p> name : "+song["songImage"]+"</p>");
    $("#songLink").append("<p> name : "+song["songLink"]+"</p>");
  })
  
$('.addButton').click(function() {
    let songName = $(".songName").val();
    songNames.push(songName);
    $("#songNames").empty();
    songNames.forEach(function(song){
         $("#songNames").append(song);
    });
    console.log(songNames)

//     // songArtist.forEach(function(artist){
//         $("#songArtist").append(artist);
             
//     });

//     songLength.forEach(function(length){
//         $("#songLength").append(length);
//     });

//     songImage.forEach(function(image){
//         $("#songImage").append(image);
//     });

//     songLink.forEach(function(link){
//         $("#songLink").append(link);
//     });
});