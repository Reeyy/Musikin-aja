/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { SongTypes } from '../../../types';
import PlayPause from '../PlayPause';

interface TopChartCardProps {
  song: SongTypes;
  index: number;
  isPlaying: boolean;
  activeSong: SongTypes;
  handlePauseClick: (e: any) => void;
  handlePlayClick: (song: SongTypes, index: number) => void;
}
export default function TopChartCard(props: any) {
  const {
    song,
    index,
    isPlaying,
    activeSong,
    handlePauseClick,
    handlePlayClick,
  } = props;
  return (
    <div
      className={`w-full flex flex-row items-center hover:bg-[#4c426e] ${
        activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'
      } py-2 p-4 rounded-lg cursor-pointer mb-2`}
    >
      <h3 className="font-bold text-base text-white mr-3">{index + 1}.</h3>
      <div className="flex-1 flex flex-row justify-between items-center">
        <img
          className="w-20 h-20 rounded-lg"
          src={song?.images?.coverart}
          alt={song?.title}
        />
        <div className="flex-1 flex flex-col justify-center mx-3">
          <Link href={`/songs/${song.key}`}>
            <p className="text-xl font-bold text-white">{song?.title}</p>
          </Link>
          <Link href={`/artists/${song?.artists[0].adamid}`}>
            <p className="text-base text-gray-300 mt-1">{song?.subtitle}</p>
          </Link>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={handlePlayClick}
      />
    </div>
  );
}
