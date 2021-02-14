import json_albums from '../public/json_albums.json';
import json_artists from '../public/json_artists.json';
import json_musics from '../public/json_musics.json';

export default {
    index: async () => {
        return json_musics.map(music => (
            {
                ...music,
                artist: [...json_artists.filter(artist => artist.id === music.artist_id), {}][0],
                album: [...json_albums.filter(album => album.id === music.album_id), {}][0]
            }
        ))
    }
}