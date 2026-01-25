import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
};

export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.35,
  duration = 1.8,
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <span className={cn("split-text", className)} aria-label={text} role="text">
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span
            className="split-text__word"
            aria-hidden="true"
            style={{
              animationDelay: `${delay + index * stagger}s`,
              animationDuration: `${duration}s`,
              animationFillMode: "both",
              animationName: "splitTextReveal",
              animationTimingFunction: "cubic-bezier(0.18, 1, 0.22, 1)",
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
