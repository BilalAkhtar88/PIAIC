//References: 
//1. https://bobbyhadz.com/blog/typescript-function-return-type-object
//2. https://bobbyhadz.com/blog/typescript-add-property-to-object

function make_album(artist_name: string, album_title, num_tracks: number = 0) {
    let music_album = {
        artist_name,
        album_title
    }

    if (num_tracks > 0){
        music_album ["num_tracks"] = num_tracks;
    }

    return music_album;
}

console.log(make_album("Taylor Swift", "Midnights"));
console.log(make_album("Nusrat Fateh Ali Khan", "Dhadkan"));
console.log(make_album("Junaid Jamshed", "Dil ki Baat", 11));
