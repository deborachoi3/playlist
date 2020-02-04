let song = {
    songName: "Circles",
    songArtist: "Post Malone",
    songLength: 3.36,
    songImage: "https://i.ytimg.com/vi/pQV0WEdT_OE/maxresdefault.jpg",
    songLink: "https://www.youtube.com/watch?v=pQV0WEdT_OE"
};
let playlist = [song]

$('.addButton').click(function() {
  console.log(playlist)  
    let newSong = {
        songName: $(".songName").val(),
        songArtist: $(".songArtist").val(),
        songLength: $(".songLength").val(),
        songImage: $(".songImage").val(),
        songLink: $(".songLink").val()
    };

    playlist.push(newSong);
    $("#songNames").empty();
    $("#songArtist").empty();
    $("#songLength").empty();
    $("#songImage").empty();
    $("#songLink").empty();

  playlist.forEach(function(song){
    $("#songNames").append("<p> songName : "+song["songName"]+"</p>");
    $("#songArtist").append("<p> songArtist : "+song["songArtist"]+"</p>");
    $("#songLength").append("<p> songLength : "+song["songLength"]+"</p>");
    $("#songImage").append("<p> songImage : "+song["songImage"]+"</p>");
    $("#songLink").append("<p> songLink : "+song["songLink"]+"</p>");
})

    // let songName = $(".songName").val();
    // songNames.push(songName);
    // $("#songNames").empty();
    // songNames.forEach(function(song){
    //      $("#songNames").append(song);
    // });

    // let songArtist = $(".songArtist").val();
    // songArtist.push(songArtist);
    // $("#songArtist").empty();
    // songArtist.forEach(function(artist){
    //      $("#songArtist").append(artist);
    //  });

    // let songLength = $(".songLength").val();
    // songLength.push(songLength);
    // $("#songLength").empty();
    // songLength.forEach(function(length){
    //      $("#songLength").append(length);
    //  });

    // let songImage = $(".songImage").val();
    // songImage.push(songImage);
    // $("#songImage").empty();
    //  songImage.forEach(function(image){
    //      $("#songImage").append(image);
    //  });

    // let songLink = $(".songLink").val();
    // songLink.push(songLink);
    // $("#songLink").empty();
    //  songLink.forEach(function(link){
    //     $("#songLink").append(link);
    //  });
});