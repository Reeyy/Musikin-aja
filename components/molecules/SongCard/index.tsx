import { SongTypes } from '../../../types';
import { useDispatch } from 'react-redux';
interface SongCardProps {
  song: SongTypes;
}
export default function SongCard(props: SongCardProps) {
  const song = { props };
  return <div>SongCard</div>;
}
