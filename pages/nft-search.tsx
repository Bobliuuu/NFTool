import { useEffect, useState } from 'react';
import SearchBar from '../components/UI/SearchBar';

export default function NFTSearch() {
  const [search, setSearch] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className='px-16 pt-24'>
      <h1 className='text-white font-bold text-4xl mb-8'>NFT Search</h1>
      <div className='relative'>
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => {
            setTimeout(() => {
              setIsOpen(false);
            }, 100);
          }}
          placeholder='Search for NFTs'
        />
        {isOpen && (
          <div className='absolute top-[calc(100%+24px)] w-full border border-blue2'></div>
        )}
      </div>
    </section>
  );
}
