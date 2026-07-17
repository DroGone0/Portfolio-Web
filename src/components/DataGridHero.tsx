import { useMemo, useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";

type AnimationType = "pulse" | "wave" | "random";

type DataGridHeroProps = {
  rows: number;
  cols: number;
  spacing: number;
  duration: number;
  color: string;
  animationType: AnimationType;
  pulseEffect: boolean;
  mouseGlow: boolean;
  opacityMin: number;
  opacityMax: number;
  background?: string;
  className?: string;
  children?: ReactNode;
};

// Adapted from the provided 21st.dev component. The TypeScript version avoids
// imperative DOM writes and keeps the decorative grid hidden from screen readers.
export function DataGridHero({
  rows,
  cols,
  spacing,
  duration,
  color,
  animationType,
  pulseEffect,
  mouseGlow,
  opacityMin,
  opacityMax,
  background = "transparent",
  className = "",
  children,
}: DataGridHeroProps) {
  const reduceMotion = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const cells = useMemo(() => {
    const centerRow = Math.floor(rows / 2);
    const centerCol = Math.floor(cols / 2);

    return Array.from({ length: rows * cols }, (_, index) => {
      const row = Math.floor(index / cols);
      const column = index % cols;
      const delay = animationType === "wave"
        ? (row + column) * 0.07
        : animationType === "random"
          ? ((index * 17) % 23) / 5
          : Math.hypot(row - centerRow, column - centerCol) * 0.12;

      return { id: index, delay };
    });
  }, [animationType, cols, rows]);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!mouseGlow || !gridRef.current) return;
    const bounds = gridRef.current.getBoundingClientRect();
    gridRef.current.style.setProperty("--grid-mouse-x", `${event.clientX - bounds.left}px`);
    gridRef.current.style.setProperty("--grid-mouse-y", `${event.clientY - bounds.top}px`);
  };

  return (
    <div className={`data-grid-hero ${className}`} style={{ background }} onPointerMove={handlePointerMove}>
      <div
        ref={gridRef}
        className="data-grid-cells"
        aria-hidden="true"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          gap: `${spacing}px`,
          "--grid-color": color,
          "--grid-opacity-min": opacityMin,
          "--grid-opacity-max": opacityMax,
          "--grid-duration": `${duration}s`,
        } as CSSProperties}
      >
        {cells.map((cell) => (
          <span
            key={cell.id}
            className={pulseEffect && !reduceMotion ? "data-grid-cell is-animated" : "data-grid-cell"}
            style={{ animationDelay: `${cell.delay.toFixed(2)}s` }}
          />
        ))}
      </div>
      {children && <div className="data-grid-content">{children}</div>}
    </div>
  );
}
