import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
interface PlayPauseProps {
  isPlaying: any;
  activeSong: any;
  song: any;
  handlePause: any;
  handlePlay: any;
}
export default function PlayPause(props: PlayPauseProps) {
  const { isPlaying, activeSong, song, handlePause, handlePlay } = props;
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );
}
