import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, className }) => {
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeEffect = setInterval(() => {
      if (isTyping) {
        if (charIndex < texts[textIndex].length) {
          setCurrentText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsTyping(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 150);

    return () => clearInterval(typeEffect);
  }, [isTyping, charIndex, textIndex, texts]);

  return <span className={className}>{currentText}</span>;
};

export default TypingEffect;
