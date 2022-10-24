import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from 'react-icons/bs';
import { SongTypes } from '../../../types';

interface ConctrolsProps {
  isPlaying: boolean;
  repeat: boolean;
  setRepeat: any;
  shuffle: any;
  setShuffle: any;
  currentSongs: string[] | null;
  isActive: any;
  handlePlayPause: (n: any) => void;
  handlePrevSong: (n: any) => void;
  handleNextSong: (n: any) => void;
}

export default function Controls(props: ConctrolsProps) {
  const {
    isActive,
    isPlaying,
    repeat,
    setRepeat,
    shuffle,
    setShuffle,
    currentSongs,
    handlePlayPause,
    handlePrevSong,
    handleNextSong,
  } = props;

  return (
    <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
      <BsArrowRepeat
        size={20}
        color={repeat ? 'red' : 'white'}
        onClick={() => setRepeat((prev: any) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
      {currentSongs?.length && (
        <MdSkipPrevious
          size={30}
          color="#FFF"
          className="cursor-pointer"
          onClick={handlePrevSong}
        />
      )}
      {isPlaying ? (
        <BsFillPauseFill
          size={45}
          color="#FFF"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      ) : (
        <BsFillPlayFill
          size={45}
          color="#FFF"
          onClick={handlePlayPause}
          className="cursor-pointer"
        />
      )}
      {currentSongs?.length && (
        <MdSkipNext
          size={30}
          color="#FFF"
          className="cursor-pointer"
          onClick={handleNextSong}
        />
      )}
      <BsShuffle
        size={20}
        color={shuffle ? 'red' : 'white'}
        onClick={() => setShuffle((prev: any) => !prev)}
        className="hidden sm:block cursor-pointer"
      />
    </div>
  );
}
