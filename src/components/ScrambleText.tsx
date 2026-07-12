import { useEffect, useRef, useState } from "react";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><";

function randChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

/**
 * ScrambleIn -- entrance reveal animation.
 * After `delay` ms it reveals characters left-to-right while unrevealed
 * characters flicker with random glyphs.
 */
export function ScrambleIn({
  text,
  delay = 0,
  triggered,
  className,
}: {
  text: string;
  delay?: number;
  triggered: boolean;
  className?: string;
}) {
  const [display, setDisplay] = useState<string>("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!triggered) return;
    const startTimer = window.setTimeout(() => setStarted(true), delay);
    return () => window.clearTimeout(startTimer);
  }, [triggered, delay]);

  useEffect(() => {
    if (!started) return;
    let revealed = 0; // fractional cursor
    const id = window.setInterval(() => {
      revealed += 0.5;
      const out = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (i < Math.floor(revealed)) return ch;
          if (i < Math.floor(revealed) + 3) return randChar();
          return "";
        })
        .join("");
      setDisplay(out);
      if (revealed >= text.length) {
        setDisplay(text);
        window.clearInterval(id);
      }
    }, 25);
    return () => window.clearInterval(id);
  }, [started, text]);

  return (
    <span className={className} aria-label={text}>
      {triggered ? display || " " : " "}
    </span>
  );
}

/**
 * ScrambleText -- hover-driven scramble.
 * On hover, scrambles then reveals left-to-right; on unhover resets instantly.
 */
export function ScrambleText({
  text,
  isHovered,
  className,
}: {
  text: string;
  isHovered: boolean;
  className?: string;
}) {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);

  useEffect(() => {
    if (!isHovered) {
      setDisplay(text);
      return;
    }
    frame.current = 0;
    const id = window.setInterval(() => {
      frame.current += 1;
      const revealCount = Math.floor(frame.current / 4);
      const out = text
        .split("")
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (i < revealCount) return ch;
          return randChar();
        })
        .join("");
      setDisplay(out);
      if (revealCount >= text.length) window.clearInterval(id);
    }, 25);
    return () => window.clearInterval(id);
  }, [isHovered, text]);

  return <span className={className}>{display}</span>;
}
