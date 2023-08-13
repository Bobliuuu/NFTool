import { useEffect, useState, useRef } from 'react';
import { useFormik } from 'formik';
import { ethers } from 'ethers';
import { StripeSession, StripePack } from '@safe-global/onramp-kit';
import TextInput from '../components/UI/TextInput';
import Button from '../components/UI/Button';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const isSessionValid = (sessionId: string) => sessionId.length === 28;

export default function PurchaseTokens() {
  const [stripePack, setStripePack] = useState<StripePack>();
  const stripeRootRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<Boolean>(false);
  const [portalLoaded, setPortalLoaded] = useState<Boolean>(false);

  const formik = useFormik({
    initialValues: {
      walletAddress: '',
      sessionId: '',
    },
    onSubmit: (values) => {
      handleCreateSession(values);
    },
  });

  const handleCreateSession = async (values: any) => {
    setLoading(true);
    if (
      isSessionValid(values.sessionId) &&
      !ethers.utils.isAddress(values.walletAddress)
    )
      return;

    if (stripeRootRef.current) {
      stripeRootRef.current.innerHTML = '';
    }

    const sessionData = (await stripePack?.open({
      element: '#stripe-root',
      sessionId: values.sessionId,
      theme: 'dark',
      defaultOptions: {
        transaction_details: {
          wallet_address: values.walletAddress,
          supported_destination_networks: ['ethereum', 'polygon'],
          supported_destination_currencies: ['usdc', 'eth'],
          lock_wallet_address: false,
        },
      },
    })) as StripeSession;

    setLoading(false);

    stripePack?.subscribe('onramp_ui_loaded', () => {
      setPortalLoaded(true);
    });

    //for debugging
    //stripePack?.subscribe("onramp_session_updated", (e) => {
    //  console.log("Session Updated", e.payload);
    //});
  };

  useEffect(() => {
    const createSession = async () => {
      const pack = new StripePack({
        stripePublicKey:
          'pk_test_51MZbmZKSn9ArdBimSyl5i8DqfcnlhyhJHD8bF2wKrGkpvNWyPvBAYtE211oHda0X3Ea1n4e9J9nh2JkpC7Sxm5a200Ug9ijfoO',
        onRampBackendUrl: 'https://aa-stripe.safe.global',
      });
      await pack.init();

      setStripePack(pack);
    };
    createSession();
  }, []);

  return (
    <section className='px-16 pt-24'>
      <h1 className='text-white font-bold text-4xl mb-2'>
        Purchase Tokens with Fiat
      </h1>
      <p className='text-white opacity-50 text-lg mb-8'>
        All payments are handled securely with Stripe.
      </p>
      <div className='flex flex-row'>
        <div className='basis-1/2 text-white'>
          <form onSubmit={formik.handleSubmit}>
            <p className='text-white font-medium text-xl mb-4'>
              Enter Receiving Wallet Address.
            </p>
            <TextInput
              id='walletAddress'
              name='walletAddress'
              type='text'
              placeholder='Wallet Address'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.walletAddress}
              classes='mb-5'
            />
            <p className='text-white font-medium text-xl mb-4'>
              Existing Session ID.
            </p>
            <TextInput
              id='sessionId'
              name='sessionId'
              type='text'
              placeholder='Enter a session ID if you have one (optional)'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.sessionId}
              classes='mb-5'
            />
            {!portalLoaded && (
              <Button type='submit' hierarchy='primary'>
                Generate Stripe Session
              </Button>
            )}
          </form>
        </div>
        <div className='basis-1/2 text-white'>
          <div id='stripe-root' className='ml-10'>
            {loading && <LoadingSpinner />}
          </div>
        </div>
      </div>
    </section>
  );
}
