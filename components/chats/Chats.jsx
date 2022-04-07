import React from 'react';
import { useMoralisQuery } from 'react-moralis';
import MessageSender from '../message-sender/MessageSender';
import Message from '../message/Message';

const Duration_IN_MINS = 20;

const Chats = () => {
  const { data, error, loading } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * Duration_IN_MINS)
        ),
    [],
    { live: true }
  );
  return (
    <div className="w-screen  px-4 sm:px-6 md:px-12 lg:px-40 z-0">
      <div className="space-y-12 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <MessageSender />
    </div>
  );
};

export default Chats;
