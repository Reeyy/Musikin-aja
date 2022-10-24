import Image from 'next/image';
interface Loader {
  title: string;
}
export default function Loader(props: Loader) {
  const { title } = props;
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Image
        src="/assets/svg/loader.svg"
        objectFit="contain"
        alt="loader"
        width={32}
        height={32}
      />
      <h1 className="font-bold text-2xl text-white mt-2">
        {title || 'loading....'}
      </h1>
    </div>
  );
}
