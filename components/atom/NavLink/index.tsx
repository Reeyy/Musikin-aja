import Link from 'next/link';
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineMenu,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from 'react-icons/hi';
interface NavlinkProps {
  handleClick?: () => void;
}
export default function NavLink({ handleClick }: NavlinkProps) {
  const links = [
    { name: 'Discover', to: '/', icon: HiOutlineHome },
    { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
    { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
    { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  ];
  return (
    <div className="mt-10">
      {links.map((item) => (
        <Link key={item.name} href={item.to}>
          <a
            onClick={() => handleClick && handleClick()}
            className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
          >
            <item.icon className="w-6 h-6 mr-2" />
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  );
}
