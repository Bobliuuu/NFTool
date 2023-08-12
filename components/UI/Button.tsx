import Link from 'next/link';

type ButtonProps = {
  type: 'button' | 'submit' | 'route' | 'link';
  href?: string;
  onClick?: () => void;
  hierarchy: 'primary' | 'secondary';
  text?: string;
  font?: string;
  border?: string;
  rounded?: string;
  padding?: string;
  classes?: string;
  children: React.ReactNode;
};

export default function Button({
  type,
  href,
  onClick,
  hierarchy,
  text,
  font,
  border,
  rounded,
  padding = 'py-3 px-5',
  classes,
  children,
}: ButtonProps) {
  classes = `text-white inline-block text-center border border-white bg-blue2 rounded-lg ${text} ${font} ${border} ${rounded} ${padding} ${classes}`;

  switch (type) {
    case 'button':
      return (
        <button type='button' onClick={onClick} className={`${classes}`}>
          {children}
        </button>
      );
    case 'submit':
      return (
        <button type='submit' onClick={onClick} className={`${classes}`}>
          {children}
        </button>
      );
    case 'route':
      return (
        <Link href={href as string} className={`${classes}`}>
          {children}
        </Link>
      );
    case 'link':
      return (
        <a
          href={href}
          target='_blank'
          rel='noreferrer'
          className={`${classes}`}
        >
          {children}
        </a>
      );
    default:
      return <></>;
  }
}
