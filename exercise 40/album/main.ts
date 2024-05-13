//making function
function makeAlbum(artistName : string, albumTittle : string , tracks?: number){
    let album: {artist : string , tittle : string , tracks?: number} = {
        artist : artistName,
        tittle : albumTittle,
    };


    if (tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}

//calling three function with different value
let album1 = makeAlbum("Safa", "albumTittle1")
// number 2
let album2 = makeAlbum("Marwa" , "albumTittle2")
//number 3  caling third parameter
let album3 = makeAlbum("Marwa" , "albumTittle3" , 9)

console.log(album1);
console.log(album2)
console.log(album3)