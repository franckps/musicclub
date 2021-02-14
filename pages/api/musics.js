import 'dotenv/config';
import music from '../../models/musics';

export default async (req, res) => {
  let musics = await music.index();
  res.status(200).json(
    musics.map(element => ({
      ...element,
      music_url: `${process.env.REACT_APP_MEDIA_SERVER}/media/musics/${element.music}`,
      album: {
          ...element.album,
            image_url: `${process.env.REACT_APP_MEDIA_SERVER}/media/images/${element.album.image}`
      },
      artist: {
        ...element.artist,
          image_url: `${process.env.REACT_APP_MEDIA_SERVER}/media/images/${element.artist.image}`
      }
    }))
  );
}
