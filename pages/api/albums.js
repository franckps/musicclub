import 'dotenv/config';
import album from '../../models/albums';

export default async (req, res) => {
  let albums = await album.index();
  res.status(200).json(
    albums.map(element => ({
      ...element,
      artist: {
        ...element.artist,
        image_url: `${process.env.REACT_APP_MEDIA_SERVER}/media/images/${element.artist.image}`
      },
      musics: element.musics.map( elm => ({
        ...elm,
        music_url: `${process.env.REACT_APP_MEDIA_SERVER}/media/musics/${elm.music}`,
      })),
      image_url: `${process.env.REACT_APP_MEDIA_SERVER}/media/images/${element.image}`
    }))
  );
}
