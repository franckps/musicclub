import json_albums from '../public/json_albums.json';
import json_artists from '../public/json_artists.json';
import json_musics from '../public/json_musics.json';

export default {
    index: async () => {
        return json_artists.map(artist => (
            {
                ...artist,
                musics: json_musics.filter(music => artist.id === music.artist_id)
            }
        ))
    }
}