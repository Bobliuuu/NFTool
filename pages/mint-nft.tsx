import { useFormik } from 'formik';
import TextInput from '../components/UI/TextInput';
import Button from '../components/UI/Button';

export default function MintNft() {
  const formik = useFormik({
    initialValues: {
      walletAddress: '',
      imageURL: '',
      functionality: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className='px-16 pt-24'>
      <h1 className='text-white font-bold text-4xl mb-8'>Mint NFT</h1>

      <form onSubmit={formik.handleSubmit}>
        <p className='text-white font-medium text-xl mb-4'>
          Enter your wallet address.
        </p>
        <TextInput
          id='walletAddress'
          name='walletAddress'
          type='text'
          placeholder='Wallet Address'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.walletAddress}
          classes='mb-12'
        />
        <p className='text-white font-medium text-xl mb-4'>
          Enter the image URL.
        </p>
        <TextInput
          id='imageURL'
          name='imageURL'
          type='text'
          placeholder='Image URL'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageURL}
          classes='mb-12'
        />
        <p className='text-white font-medium text-xl mb-4'>
          Enter the functionality of your NFT.
        </p>
        <TextInput
          id='functionality'
          name='functionality'
          type='text'
          placeholder='Functionality'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.functionality}
          classes='mb-20'
        />
        <Button type='submit' hierarchy='primary'>
          Submit
        </Button>
      </form>
    </section>
  );
}
