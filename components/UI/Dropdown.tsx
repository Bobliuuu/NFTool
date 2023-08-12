import { useEffect, useState } from 'react';
import { ChevronDown } from 'react-feather';

type DropdownProps = {
  id: string;
  name: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  classes?: string;
};

export default function Dropdown({
  id,
  name,
  placeholder,
  options,
  value,
  onChange,
  classes,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        isOpen &&
        !e
          .composedPath()
          .includes(document.querySelector(`#dropdown-${id}`) as HTMLElement)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [id, isOpen]);

  return (
    <div className={`relative ${classes}`}>
      <div
        id={`dropdown-${id}`}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`transition-300 relative cursor-pointer rounded-md border px-4.5 py-3.5 xl:rounded-lg xl:px-6 xl:py-4.5 border-white`}
      >
        <p className={`transition-300 text-white`}>
          {value ? value : placeholder}
        </p>
        <ChevronDown
          className={`transition-300 absolute right-4 top-1/2 -translate-y-1/2 text-white ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>
      <div
        className={`transition-300 absolute inset-x-0 top-[calc(100%+16px)] rounded-lg border border-blue2 bg-blue4 px-2 py-2 ${
          isOpen ? '' : 'pointer-events-none opacity-0'
        }`}
      >
        {options.map((option, i) => (
          <p
            onClick={() => {
              onChange({
                target: {
                  id,
                  name,
                  value: option,
                },
              } as React.ChangeEvent<HTMLSelectElement>);
              setIsOpen(false);
            }}
            className={`transition-300 cursor-pointer rounded-sm px-3 py-3.5 hover:bg-white xl:px-4 xl:py-4 text-white`}
            key={`option-${i}`}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
}
