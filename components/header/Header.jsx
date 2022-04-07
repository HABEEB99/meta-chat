import React, { useState } from 'react';
import { IoMdChatboxes } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import Avatar from '../user/Avatar';
import { useMoralis } from 'react-moralis';
import Settings from '../user/Settings';

const Header = () => {
  const [settings, setSettings] = useState(false);
  const { user } = useMoralis();
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-40 sticky top-0 w-screen h-[10vh] bg-header flex items-center justify-between">
      <div className="flex items-center">
        <IoMdChatboxes className="text-4xl text-cta" />
        <h1 className="text-white font-bold text-3xl hidden md:block">
          Meta-Chat
        </h1>
      </div>

      <div className="flex items-center">
        <Avatar />

        <h2 className="text-xs sm:text-base lg:text-lg ml-2 text-gray-200 truncate">
          Welcome! {user.getUsername()}
        </h2>
      </div>

      <div
        onClick={() => setSettings(!settings)}
        className="flex items-center justify-center cursor-pointer"
      >
        <AiFillSetting className="text-4xl text-gray-400 hover:text-btn" />
      </div>

      {settings && <Settings setSettings={setSettings} />}
    </div>
  );
};

export default Header;
