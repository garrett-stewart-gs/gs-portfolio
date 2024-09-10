"use client";

import { useState, useEffect } from "react";

export default function TypingText({ messageStr, headingType }) {

  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        const nextMessage = messageStr.slice(0, prev.length + 1);
        if (nextMessage === messageStr) {
          clearInterval(typingInterval);
        }
        return nextMessage;
      });
    }, 75);

    return () => clearInterval(typingInterval);
  }, [messageStr]);

  return (
    <>
      {headingType === 'h1' && <h1>{currentMessage}</h1>}
      {headingType === 'h2' && <h2>{currentMessage}</h2>}
      {headingType === 'h3' && <h3>{currentMessage}</h3>}
      {headingType === 'h4' && <h4>{currentMessage}</h4>}
      {headingType === 'h5' && <h5>{currentMessage}</h5>}
      {headingType === 'h6' && <h6>{currentMessage}</h6>}
    </>
  );
}