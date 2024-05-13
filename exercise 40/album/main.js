//making function
function makeAlbum(artistName, albumTittle, tracks) {
    var album = {
        artist: artistName,
        tittle: albumTittle,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three function with different value
var album1 = makeAlbum("Safa", "albumTittle1");
// number 2
var album2 = makeAlbum("Marwa", "albumTittle2");
//number 3  caling third parameter
var album3 = makeAlbum("Marwa", "albumTittle3", 9);
console.log(album1);
console.log(album2);
console.log(album3);
