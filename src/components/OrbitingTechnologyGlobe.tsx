import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { useReducedMotion } from "motion/react";

export type OrbitTechnology = {
  label: string;
  Icon: IconType;
};

type OrbitingTechnologyGlobeProps = {
  technologies: OrbitTechnology[];
};

// Interaction adapted from the 21st.dev “Orbiting Circles with Globe” component
// by shadcnspace. The remote demo assets were replaced with local React icons.
export function OrbitingTechnologyGlobe({ technologies }: OrbitingTechnologyGlobeProps) {
  const reduceMotion = useReducedMotion();
  const rings = [technologies.slice(0, 4), technologies.slice(4)];

  return (
    <div className="technology-orbits" aria-label="Technologies principales en orbite">
      <div className="technology-globe" aria-hidden="true">
        <svg viewBox="0 0 220 140" role="presentation">
          {Array.from({ length: 14 }).flatMap((_, row) =>
            Array.from({ length: 21 }).map((__, column) => {
              const x = 10 + column * 10;
              const y = 8 + row * 10;
              const dx = (x - 110) / 102;
              const dy = (y - 138) / 130;
              return dx * dx + dy * dy < 1 ? (
                <circle key={`${row}-${column}`} cx={x} cy={y} r={1.25} />
              ) : null;
            }),
          )}
        </svg>
        <div className="globe-label"><span>R&T</span></div>
      </div>

      {rings.map((icons, ringIndex) => (
        <div className={`technology-ring ring-${ringIndex + 1}`} key={ringIndex}>
          {icons.map(({ label, Icon }, iconIndex) => {
            const angle = (360 / icons.length) * iconIndex + ringIndex * 28;
            const duration = ringIndex === 0 ? 28 : 36;
            return (
              <div
                className="orbit-rail"
                key={label}
                style={{
                  "--start-angle": `${angle}deg`,
                  "--orbit-duration": `${duration}s`,
                  animationPlayState: reduceMotion ? "paused" : "running",
                } as CSSProperties}
              >
                <div
                  className="technology-chip"
                  title={label}
                  style={{
                    "--counter-angle": `${-angle}deg`,
                    "--orbit-duration": `${duration}s`,
                    animationPlayState: reduceMotion ? "paused" : "running",
                  } as CSSProperties}
                >
                  <Icon aria-hidden="true" />
                  <span>{label}</span>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
