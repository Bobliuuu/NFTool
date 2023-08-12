import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  MessageSquare,
  Image as ImageIcon,
  Code,
  Search,
  Upload,
} from 'react-feather';

const MENU_ITEMS = [
  {
    id: 'chat',
    label: 'Chat',
    route: '/',
    icon: <MessageSquare className='w-4.5 text-white' />,
  },
  {
    id: 'mint-nft',
    label: 'Mint NFT',
    route: '/mint-nft',
    icon: <ImageIcon className='w-4.5 text-white' />,
  },
  {
    id: 'smart-contracts',
    label: 'Smart Contracts',
    route: '/smart-contracts',
    icon: <Code className='w-4.5 text-white' />,
  },
  {
    id: 'nft-search',
    label: 'NFT Search',
    route: '/nft-search',
    icon: <Search className='w-4.5 text-white' />,
  },
  {
    id: 'deploy-contract',
    label: 'Deploy Contract',
    route: '/deploy-contract',
    icon: <Upload className='w-4.5 text-white' />,
  },
];

export default function Menu() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className='fixed inset-y-0 px-9 py-6 w-72'>
      <Link href='/' className='font-bold mb-12 text-2xl inline-block'>
        <span className='gradient-text bg-gradient-to-tr from-blue1 to-white'>
          NFTool
        </span>
      </Link>
      <nav className='grid gap-2'>
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.id}
            href={item.route}
            className={`flex items-center gap-2 px-4 py-3.5 rounded-xl bg-blue3 ${
              pathname === item.route ? 'bg-opacity-100' : 'bg-opacity-0'
            }`}
          >
            {item.icon}
            <span className='text-white font-font'>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className='absolute right-0 inset-y-0 w-0.25 bg-blue2' />
    </div>
  );
}
