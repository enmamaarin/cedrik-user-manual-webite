import { cn } from "@/lib/utils";

type BlurTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
};

export default function BlurText({
  text,
  className,
  delay = 0,
  stagger = 0.15,
  duration = 1.6,
}: BlurTextProps) {
  const words = text.split(" ");

  return (
    <span className={cn("blur-text", className)} aria-label={text} role="text">
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span
            className="blur-text__word"
            aria-hidden="true"
            style={{
              animationDelay: `${delay + index * stagger}s`,
              animationDuration: `${duration}s`,
            }}
          >
            {word}
          </span>
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
