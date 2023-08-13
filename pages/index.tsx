import axios from 'axios';
import { useEffect, useState } from 'react';
import { Send } from 'react-feather';
import Layout from '../components/layout';
import Header from '../components/header';
import { Chat } from '../components/Chat';

const CHATS = [
  {
    id: '1',
    role: 'chatbot',
    message: 'Hello, how can I help you?',
  },
  {
    id: '2',
    role: 'user',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '3',
    role: 'chatbot',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '4',
    role: 'user',
    message: 'I want to mint an NFT.',
  },
  {
    id: '5',
    role: 'chatbot',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '6',
    role: 'user',
    message: 'I want to mint an NFT.',
  },
  {
    id: '7',
    role: 'chatbot',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '8',
    role: 'user',
    message: 'I want to mint an NFT.',
  },
  {
    id: '9',
    role: 'chatbot',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '10',
    role: 'user',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '11',
    role: 'chatbot',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '12',
    role: 'user',
    message: 'I want to mint an NFT.',
  },
  {
    id: '13',
    role: 'chatbot',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: '14',
    role: 'user',
    message: 'I want to mint an NFT.',
  },
  {
    id: '15',
    role: 'chatbot',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

export default function Home() {
  const [testData, setTestData] = useState();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(CHATS);

  // api route testing purposes
  /*
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/nft/search', {
        params: {
          query: 'ape',
          type: 'COLLECTION',
          collectionsFilter: ['0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D'],
        },
      });
      setTestData(data);
    };
    fetchData();
  }, []);

  console.log(testData);
  */
 /*
 <div className='fixed bg-blue4 z-50 w-[calc(100%-289px)] right-0'>
        <Header />
      </div>
      <div className='h-[100dvh] relative overflow-y-scroll'>
        <div className='h-[100dvh] overflow-y-scroll pt-16 pb-40'>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex p-16 ${
                message.role === 'chatbot'
                  ? 'justify-start'
                  : 'justify-end bg-blue3'
              }`}
            >
              <div className='text-white leading-loose rounded-lg max-w-[80%]'>
                {message.message}
              </div>
            </div>
          ))}
        </div>

        <div className='absolute inset-x-0 bottom-0 bg-blue4 h-40'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // message sent here
            }}
            className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[720px]'
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              className='w-full rounded-md bg-blue4 border border-blue2 py-5 pl-5 pr-11 text-white outline-none placeholder:text-white placeholder:opacity-60'
              placeholder='Type your message here...'
            />
            <div
              onClick={() => {
                // message sent here
              }}
              className='transition-300 absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 cursor-pointer place-content-center rounded-sm hover:bg-white hover:bg-opacity-10'
            >
              <Send className='opacity-60 text-white w-5' />
            </div>
          </form>
        </div>
      </div>
      */

  return (
    <Layout>
      <Chat />
    </Layout>
  );
}
