import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';
import { useMoralis } from 'react-moralis';

const MessageSender = () => {
  const { user, Moralis } = useMoralis();

  const [message, setMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend('Messages');
    const messages = new Messages();
    messages
      .save({
        message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (message) => {
          console.log(message);
        },
        (error) => {
          console.log(error);
        }
      );

    setMessage('');
  };

  return (
    <div className="flex items-center justify-center  ">
      <form className="shadow-2xl w-11/12 bg-gray-200 flex items-center fixed max-w-2xl bottom-10 border-4 border-btn rounded-full p-2">
        <input
          className="px-3 bg-transparent flex-grow outline-none "
          type="text"
          placeholder="Send a message...."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>
          <MdSend className="text-4xl font-bold text-green-400 hover:text-green-600" />
        </button>
      </form>
    </div>
  );
};

export default MessageSender;
