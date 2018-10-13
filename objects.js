var playlist = {
  "Phil Ochs": "songTitle"
}

Object.assign({playlist}, { artistName: ['songTitle'] })

function updatePlaylist(playlist, artistName, songTitle) {

  return Object.assign({}, playlist, { [artistName]: songTitle })
}
<<<<<<< HEAD

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}
=======
>>>>>>> 37e748bd9a23cbeb208527cb1acc812f883ab56b
