//References: 
//1. https://bobbyhadz.com/blog/typescript-function-return-type-object
//2. https://bobbyhadz.com/blog/typescript-add-property-to-object
function make_album(artist_name, album_title, num_tracks) {
    if (num_tracks === void 0) { num_tracks = 0; }
    var music_album = {
        artist_name: artist_name,
        album_title: album_title
    };
    if (num_tracks > 0) {
        music_album["num_tracks"] = num_tracks;
    }
    return music_album;
}
console.log(make_album("Taylor Swift", "Midnights"));
console.log(make_album("Nusrat Fateh Ali Khan", "Dhadkan"));
console.log(make_album("Junaid Jamshed", "Dil ki Baat", 11));
