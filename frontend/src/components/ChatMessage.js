import React from 'react';
import { User, Bot, AlertCircle } from 'lucide-react';

const ChatMessage = ({ message }) => {
  const { role, content, timestamp } = message;
  
  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getMessageIcon = () => {
    switch (role) {
      case 'user':
        return <User className="h-5 w-5 text-white" />;
      case 'assistant':
        return <Bot className="h-5 w-5 text-blue-600" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Bot className="h-5 w-5 text-gray-600" />;
    }
  };

  const getMessageStyles = () => {
    switch (role) {
      case 'user':
        return 'chat-bubble chat-bubble-user';
      case 'assistant':
        return 'chat-bubble chat-bubble-ai';
      case 'error':
        return 'chat-bubble bg-red-100 text-red-800 border-red-300';
      default:
        return 'chat-bubble chat-bubble-ai';
    }
  };

  const getContainerStyles = () => {
    return role === 'user' ? 'flex justify-end' : 'flex justify-start';
  };

  return (
    <div className={getContainerStyles()}>
      <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
        {role !== 'user' && (
          <div className="flex-shrink-0 mt-1">
            {getMessageIcon()}
          </div>
        )}
        
        <div className="flex flex-col">
          <div className={getMessageStyles()}>
            <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
              {content}
            </p>
          </div>
          <span className="text-xs text-gray-500 mt-1 ml-1">
            {formatTime(timestamp)}
          </span>
        </div>
        
        {role === 'user' && (
          <div className="flex-shrink-0 mt-1">
            {getMessageIcon()}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
