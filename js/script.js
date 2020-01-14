let songNames = [];
let songArtist = [];
let songLength= [];
let songImage= [];
let songLink= [];
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