import Head from 'next/head';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import SearchBar from '../../atom/SearchBar';
import SideBar from '../../molecules/SideBar';
import TopPlay from '../../molecules/TopPlay';
import MusicPlayer from '../MusicPlayer';

interface LayoutProps {
  title?: string;
  content?: string;
  children?: React.ReactNode;
}
export default function Layout(props: Partial<LayoutProps>) {
  const { title, content, children } = props;
  const { activeSong } = useSelector((state: RootState) => state.player);
  return (
    <>
      <Head>
        <title>{title ? title + ' MusikinAja ' : ' MusikinAja'}</title>
        <meta name="description" content="Musik Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex">
        <SideBar />
        <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
          <SearchBar />

          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">{children}</div>
            <div className="xl:sticky relative top-0 h-fit">
              <TopPlay />
            </div>
          </div>
        </div>

        {activeSong?.title && (
          <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )}
      </div>
    </>
  );
}
