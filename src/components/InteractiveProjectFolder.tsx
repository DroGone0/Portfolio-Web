import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Code2, Server, X } from "lucide-react";
import { personalProjects } from "../data";

type Project = (typeof personalProjects)[number];

type InteractiveProjectFolderProps = {
  projects: readonly Project[];
};

// Interaction adapted from the 21st.dev “Interactive Folder Gallery” component
// by Alex Perez Cedeno. Photo cards become compact project records.
export function InteractiveProjectFolder({ projects }: InteractiveProjectFolderProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <div className="interactive-project-folder">
      <div className="folder-stage">
        <div className="folder-back" aria-hidden="true"><span /></div>

        <div className="folder-records" aria-live="polite">
          {projects.map((project, index) => {
            const offset = index - (projects.length - 1) / 2;
            return (
              <motion.button
                type="button"
                key={project.title}
                className={`project-record ${activeIndex === index ? "active" : ""}`}
                onClick={() => { setActiveIndex(index); setOpen(true); }}
                drag={open && !reduceMotion}
                dragSnapToOrigin
                onDragEnd={(_, info) => {
                  if (info.offset.y > 90) setOpen(false);
                }}
                animate={open ? {
                  x: offset * 218,
                  y: -105,
                  rotate: offset * 2,
                  scale: activeIndex === index ? 1.04 : 0.96,
                  zIndex: activeIndex === index ? 40 : 20 + index,
                } : {
                  x: offset * 16,
                  y: offset * -8,
                  rotate: offset * 4,
                  scale: 1 - Math.abs(offset) * 0.035,
                  zIndex: 10 + index,
                }}
                whileHover={open ? { y: -116, scale: 1.04 } : { y: offset * -12 - 8 }}
                transition={{ type: "spring", stiffness: 330, damping: 31 }}
                aria-label={`Ouvrir le projet ${project.title}`}
              >
                <span className="record-number">0{index + 1}</span>
                <span className="record-icon">{index === 0 ? <Server /> : <Code2 />}</span>
                <span className="record-category">{project.category}</span>
                <strong>{project.title}</strong>
                <span className="record-summary">{project.summary}</span>
                <span className="record-highlight">{project.highlight}</span>
                <span className="record-technologies">
                  {project.technologies.map((technology) => <i key={technology}>{technology}</i>)}
                </span>
              </motion.button>
            );
          })}
        </div>

        <motion.button
          type="button"
          className="folder-front-control"
          onClick={() => setOpen((value) => !value)}
          style={{ x: "-50%" }}
          animate={{ opacity: open ? 0.18 : 1, rotateX: open ? -22 : 0, y: open ? 18 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          aria-expanded={open}
        >
          <span className="folder-sheen" />
          <span className="folder-title">projets_perso</span>
          <span className="folder-hint">{open ? "Cliquer pour refermer" : "Cliquer pour explorer"}</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="folder-controls"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
          >
            <span>Sélectionnez une fiche · glissez-la vers le bas pour fermer</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Fermer les projets"><X /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
