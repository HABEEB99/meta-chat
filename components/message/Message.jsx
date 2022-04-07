import React from 'react';
import { useMoralis } from 'react-moralis';
import TimeAgo from 'timeago-react';
import Avatar from '../user/Avatar';

const Message = ({ message }) => {
  const { user } = useMoralis();

  const messageSentByUser =
    message.get('ethAddress') === user.get('ethAddress');

  return (
    <div
      className={`z-[-11] flex items-end space-x-2 relative ${
        messageSentByUser ? 'justify-end' : 'justify-start'
      }`}
    >
      <TimeAgo
        className={`text-[11px] italic text-gray-500`}
        datetime={message.createdAt}
      />
      <div
        className={`flex space-x-4 p-3 rounded-xl ${
          messageSentByUser
            ? 'rounded-br-none bg-orange-300'
            : 'rounded-bl-none bg-green-300'
        }`}
      >
        <p>{message.get('message')}</p>
      </div>

      <div className="relative">
        <Avatar />
      </div>

      <p
        className={`absolute -bottom-4 text-xs ${
          messageSentByUser ? 'text-blue-900' : 'text-green-900'
        }`}
      >
        {message.get('username')}
      </p>
    </div>
  );
};

export default Message;
