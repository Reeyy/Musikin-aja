import { useDispatch, useSelector } from 'react-redux';
import Error from '../components/atom/Error';
import Loader from '../components/atom/Error/Loader';
import SongCard from '../components/molecules/SongCard';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { RootState } from '../redux/store';
import { SongTypes } from '../types';
export default function Discover() {
  const genres = [
    { title: 'Pop', value: 'POP' },
    { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
    { title: 'Dance', value: 'DANCE' },
    { title: 'Electronic', value: 'ELECTRONIC' },
    { title: 'Soul', value: 'SOUL_RNB' },
    { title: 'Alternative', value: 'ALTERNATIVE' },
    { title: 'Rock', value: 'ROCK' },
    { title: 'Latin', value: 'LATIN' },
    { title: 'Film', value: 'FILM_TV' },
    { title: 'Country', value: 'COUNTRY' },
    { title: 'Worldwide', value: 'WORLDWIDE' },
    { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
    { title: 'House', value: 'HOUSE' },
    { title: 'K-Pop', value: 'K_POP' },
  ];
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector(
    (state: RootState) => state.player
  );
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data);
  const genreTitle = 'Pop';
  if (isFetching) return <Loader title="Loading..." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <div
        className="w-full flex justify-between items-center sm:flex-row flex-col
      mt-4 mb-10"
      >
        <h2 className="font-bold  text-3xl text-white text-left">
          Disvocer {genreTitle}
        </h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none
        sm:mt-0 mt-5
        "
        >
          {genres.map((genre: any) => (
            <option value={genre.value} key={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song: SongTypes, i: number) => (
          <SongCard
            isPlaying={isPlaying}
            activeSong={activeSong}
            key={song.key}
            index={i}
            song={song}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}
