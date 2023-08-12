import { Oval } from 'react-loader-spinner';

type LoadingSpinnerProps = {
  size?: number;
  classes?: string;
};

export default function LoadingSpinner({
  size = 60,
  classes,
}: LoadingSpinnerProps) {
  return (
    <div className={`grid place-content-center ${classes}`}>
      <Oval
        width={size}
        height={size}
        color='#00BFFF'
        secondaryColor='#fff'
        ariaLabel='oval-loading'
        strokeWidth={6}
        strokeWidthSecondary={7}
      />
    </div>
  );
}
