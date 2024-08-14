import TypingAnimation from "./TypingAnimation";

interface TextRevealProps {
  className: string;
  text: string;
}

export function TextReveal({ className, text }: TextRevealProps) {
  return <TypingAnimation className={className} text={text} />;
}
