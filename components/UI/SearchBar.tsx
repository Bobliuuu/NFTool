import { Search } from 'react-feather';

type SearchBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder: string;
  classes?: string;
};

export default function SearchBar({
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  classes,
}: SearchBarProps) {
  return (
    <div className={`relative ${classes}`}>
      <Search
        size={20}
        className='absolute left-4 top-1/2 -translate-y-1/2 text-white'
      />
      <input
        type='text'
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        className='transition-300 w-full rounded-full border border-blue2 bg-blue4 py-3.5 pl-12 pr-5 text-white outline-none placeholder:text-white placeholder:opacity-50'
      />
    </div>
  );
}
