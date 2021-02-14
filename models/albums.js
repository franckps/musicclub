import json_albums from '../public/json_albums.json';
import json_artists from '../public/json_artists.json';
import json_musics from '../public/json_musics.json';

export default {
    index: async () => {
        return json_albums.map(album => (
            {
                ...album,
                artist: [...json_artists.filter(artist => artist.id === album.artist_id),{}][0],
                musics: json_musics.filter(music => album.id === music.album_id)
            }
        ))
    }
}