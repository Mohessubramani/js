const song ={
    "name":"song.1",
    "duration": 5.0,
    "artist":["artist-1","artist-2"],
    "getsonginfo":()=>"song details"
}

console.log(song);
// To access value from object
console.log(song.name);

// To add value to object
song['category']= 'Melody'
console.log(song);

//To update
song.name ="song-1"
console.log(song.name);
console.log(song);