import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { debounce } from 'lodash';
import SearchBar from '../components/UI/SearchBar';
import LoadingSpinner from '../components/UI/LoadingSpinner';

type Entity = {
  name: string;
  description: string;
  image: {
    size: string;
    url: string;
    mimeType: string;
  };
  mintInfo: {
    price: {
      usdcPrice: {
        decimal: number;
      };
    };
  };
  tokenId: string;
};

type SearchResult = {
  collectionAddress: string;
  entity: Entity;
};

export default function NFTSearch() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const lastSearch = useRef(search);
  const cancelTokenSource =
    useRef<ReturnType<typeof axios.CancelToken.source>>();

  const getSearchResults = useCallback(
    debounce(async () => {
      if (cancelTokenSource.current) {
        cancelTokenSource.current.cancel();
      }

      cancelTokenSource.current = axios.CancelToken.source();

      try {
        const { data } = await axios.get('/api/nft/search', {
          params: {
            query: search,
            type: 'TOKEN',
          },
          cancelToken: cancelTokenSource.current.token,
        });
        setSearchResults(data);
        setLoading(false);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.log(error);
        }
      }
    }, 500),
    [search]
  );

  useEffect(() => {
    if (search.trim() && search.trim() !== lastSearch.current.trim()) {
      lastSearch.current = search;
      setLoading(true);
      getSearchResults();
    } else if (!search.trim()) {
      setSearchResults([]);
      setLoading(false);
    }
  }, [search, getSearchResults]);

  return (
    <section className='px-16 pt-24'>
      <h1 className='text-white font-bold text-4xl mb-8'>NFT Search</h1>
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search for NFTs'
        classes='mb-12'
      />
      {loading ? (
        <LoadingSpinner size={48} />
      ) : (
        <div className='grid grid-cols-3 gap-6'>
          {searchResults.map((result, i) => (
            <div className='bg-white rounded-lg p-4' key={i}>
              <p className=''>{result.entity.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
