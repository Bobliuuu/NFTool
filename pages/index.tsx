import axios from 'axios';
import { useEffect, useState } from 'react';

export default function IndexPage() {
  const [testData, setTestData] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await axios.get('/api/nft/balance', {
  //       params: { chainName: "eth-mainnet", walletAddress: "0x0C3C8C5e113992E4C3Edf7C4980aE96e8880c0EE" },
  //     });
  //     setTestData(data);
  //   };
  //   fetchData();
  // }, [])

  console.log(testData);

  return <div className=''></div>;
}
