"use client";

import { useState, useEffect } from "react";

export default function TypingText({ messageStr, headingTypeStr, startDelayInt, typingSpeedInt=125 }) {

  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {

    setTimeout(() => { 

      const typingInterval = setInterval(() => {

        setCurrentMessage((prev) => {
          const nextMessage = messageStr.slice(0, prev.length + 1);
          if (nextMessage === messageStr) {
            clearInterval(typingInterval);
          }
          return nextMessage;
        });
      }, typingSpeedInt);

      return () => clearInterval(typingInterval);

    }, startDelayInt);

  }, [messageStr]);

  return (
    <>
      {headingTypeStr === 'h1' && <h1>{currentMessage}</h1>}
      {headingTypeStr === 'h2' && <h2>{currentMessage}</h2>}
      {headingTypeStr === 'h3' && <h3>{currentMessage}</h3>}
      {headingTypeStr === 'h4' && <h4>{currentMessage}</h4>}
      {headingTypeStr === 'h5' && <h5>{currentMessage}</h5>}
      {headingTypeStr === 'h6' && <h6>{currentMessage}</h6>}
    </>
  );
}