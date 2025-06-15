"use client";

import { useEffect, useState } from "react";

interface BlinkTextProps {
  text: string;
  onComplete?: () => void;
}

const BlinkText = ({ text, onComplete }: BlinkTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      if (onComplete) onComplete();
    }
  }, [index, text, onComplete]);

  return <h1 className="text-lg font-bold mb-4">{displayedText}</h1>;
};

export default BlinkText;
