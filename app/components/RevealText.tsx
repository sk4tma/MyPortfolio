import { useEffect, useMemo, useRef } from "react";

type RevealTextProps = {
  text: string;
  delayMs?: number;
  durationMs?: number;
  className?: string;
  onComplete?: () => void;
};

export default function RevealText({
  text,
  delayMs = 40,
  durationMs = 300,
  className,
  onComplete,
}: RevealTextProps) {

  const chars = useMemo(() => Array.from(text), [text]);
  const animCharCount = useMemo(
    () => chars.filter((ch) => ch !== "\n").length,
    [chars]
  );
  const finishedCount = useRef(0);
  const completedOnce = useRef(false);

  // reduce motion の場合はアニメが起きない＝animationendも来ないので即完了扱いにする
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduce && !completedOnce.current) {
      completedOnce.current = true;
      onComplete?.();
      console.log("completed")
    }
  }, [onComplete]);

  const handleOneCharEnd = () => {
    if (completedOnce.current) return;

    finishedCount.current += 1;
    if (finishedCount.current >= animCharCount) {
      completedOnce.current = true;
      onComplete?.();
    }
  };

  // delay は「改行を除いた表示文字」の順番で増えるようにする
  let visibleCharIndex = 0;

  return (
    <span className={className} aria-label={text}>
      {chars.map((ch, i) => {
        // 改行は <br /> に変換（アニメ対象外）
        console.log(ch);
        if (ch === "\n") {
          return <br key={`br-${i}`} />;
        }

        const delay = visibleCharIndex * delayMs;
        visibleCharIndex += 1;

        return (
          <span
            key={i}
            aria-hidden="true"
            onAnimationEnd={handleOneCharEnd}
            className={className}
            style={{
              display: "inline-block",
              opacity: 0,
              transform: "translateY(0.15em)",
              animation: `char-in ${durationMs}ms ease forwards`,
              animationDelay: `${delay}ms`,
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </span>
        );
      })}
    </span>
  );
}