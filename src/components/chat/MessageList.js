import React from 'react';
import PropTypes from 'prop-types';

const MessageList = ({ messages }) => (
  <ul className="message-list">
    {messages.map((message) => (
      <li className="message" key={message.id}>
        <div>
          {message.senderId}

        </div>
        <div>
          {message.text}
        </div>
      </li>
    ))}
  </ul>
);

MessageList.defaultProps = {
  messages: [],
};
MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};

export default MessageList;
