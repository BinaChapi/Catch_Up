import { useState, useEffect } from "react";

export function useTypewriter(text: string, speed = 100, pause = 1500) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (!deleting) {
        if (index < text.length) {
          setDisplayed(text.slice(0, index + 1));
          setIndex(index + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setDeleting(true);
          }, pause); 
        }
      } else {
        if (index > 0) {
          setDisplayed(text.slice(0, index - 1));
          setIndex(index - 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setDeleting(false);
          }, pause / 2); 
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearInterval(interval);
  }, [index, deleting, text, speed, pause, isPaused]);

  return displayed;
}
