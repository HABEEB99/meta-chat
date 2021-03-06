import React from 'react';
import Image from 'next/image';
import { useMoralis } from 'react-moralis';

const Login = () => {
  const { authenticate } = useMoralis();

  // const login = async () => {
  //   await authenticate({
  //     privateKey: 'web3Auth',
  //     clientId: process.env.NEXT_PUBLIC_WEB3_CLIENT_ID,
  //   });
  // };
  return (
    <div className="px-4 md:px-0 relative bg-body h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl mb-4 font-bold text-gray-600">
          Welcome to Meta-Chat
        </h1>
        <Image
          className="rounded-lg"
          src="/login-pic.jpg"
          alt="login picture"
          width={400}
          height={400}
        />
        <button
          onClick={authenticate}
          className="bg-btn text-2xl font-bold text-white p-4 rounded-lg w-full md:w-[400px] mt-4 hover:bg-cta"
        >
          Login with MetaMask
        </button>
      </div>
    </div>
  );
};

export default Login;
