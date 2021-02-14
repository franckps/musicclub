import 'dotenv/config';
import artist from '../../models/artists';

export default async (req, res) => {
  let artists = await artist.index();
  res.status(200).json(
    artists.map(element => ({
      ...element,
      musics: element.musics.map(elm => ({
          ...elm,
          music_url: `${process.env.REACT_APP_MEDIA_SERVER}/media/musics/${element.music}`
      })),
      image_url: `${process.env.REACT_APP_MEDIA_SERVER}/media/images/${element.image}`
    }))
  );
}
