import React, { useRef, useEffect } from 'react';
import { SongTypes } from '../../../types';

interface PlayerProps {
  activeSong: SongTypes;
  isPlaying: boolean;
  volume: number;
  seekTime: number;
  onEnded: () => void;
  onTimeUpdate: (e: any) => void;
  onLoadedData: (e: any) => void;
  repeat: boolean;
  currentIndex: any;
}
export default function Player(props: PlayerProps) {
  const {
    activeSong,
    isPlaying,
    volume,
    seekTime,
    onEnded,
    onTimeUpdate,
    onLoadedData,
    repeat,
  } = props;

  const ref = React.useRef<HTMLAudioElement>(null);

  if (ref.current) {
    if (isPlaying) {
      ref?.current.play();
    } else {
      ref?.current.pause();
    }
  }
  useEffect(() => {
    ref.current!.volume = volume;
  }, [volume]);
  // updates audio element only on seekTime change (and not on each rerender):
  useEffect(() => {
    ref.current!.currentTime = seekTime;
  }, [seekTime]);
  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
}
