import { useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CircleDot,
  Code2,
  Download,
  GraduationCap,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import {
  SiCisco,
  SiCloudflare,
  SiDocker,
  SiGrafana,
  SiGithub,
  SiLinux,
  SiLua,
  SiPrometheus,
  SiProxmox,
  SiPython,
} from "react-icons/si";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { GitHubCalendar } from "react-github-calendar";
import { DataGridHero } from "./components/DataGridHero";
import { InteractiveProjectFolder } from "./components/InteractiveProjectFolder";
import { OrbitingTechnologyGlobe } from "./components/OrbitingTechnologyGlobe";
import {
  experiences,
  navItems,
  personalProjects,
  qualities,
  skillGroups,
  studyProjects,
} from "./data";

const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <Reveal className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-title-row">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </Reveal>
  );
}

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <header className="site-header">
        <a href="#accueil" className="brand" aria-label="Retour à l’accueil">
          <span>R</span>
          <strong>Robin / DroGone</strong>
        </a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="mailto:drogoneia@gmail.com">
          Écrire <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      {menuOpen && (
        <motion.nav
          className="mobile-nav"
          aria-label="Navigation mobile"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label} <ArrowUpRight size={17} />
            </a>
          ))}
        </motion.nav>
      )}
    </>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="accueil" className="hero">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease }}
        >
          <div className="hero-status">
            <span className="status-dot" />
            Alternance · disponible maintenant
          </div>
          <p className="hero-intro">BUT Réseaux & Télécommunications · IUT Béziers</p>
          <h1>
            Réseaux.
            <span>Systèmes. Projets.</span>
          </h1>
          <p className="hero-lead">
            Linux · virtualisation · cloud · développement
          </p>
          <div className="hero-actions">
            <a className="action action-dark" href="#projets">
              Voir les projets <ArrowDownRight size={17} />
            </a>
            <a className="action action-light" href="mailto:drogoneia@gmail.com?subject=Demande%20de%20CV">
              Demander mon CV <Download size={16} />
            </a>
          </div>
        </motion.div>

        <motion.aside
          className="hero-card glass-panel"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, rotate: 1.5 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.16, ease }}
        >
          <DataGridHero
            rows={18}
            cols={14}
            spacing={4}
            duration={6.2}
            color="rgba(17, 17, 16, 0.68)"
            animationType="wave"
            pulseEffect
            mouseGlow
            opacityMin={0.035}
            opacityMax={0.3}
            className="hero-data-grid"
          >
            <div className="hero-card-top">
              <span>Profil</span>
              <span className="hero-card-live"><i />en ligne</span>
            </div>
            <div className="hero-card-monogram"><span>R</span><em>/D</em></div>
            <div className="hero-card-bottom">
              <div>
                <small>Formation</small>
                <strong>BUT R&T · année 3</strong>
              </div>
              <div>
                <small>Mobilité</small>
                <strong>Béziers · Montpellier · Toulouse</strong>
              </div>
            </div>
          </DataGridHero>
        </motion.aside>
      </div>
      <div className="hero-footnote">
        <span>Réseaux</span><span>Systèmes</span><span>Cloud</span><span>Développement</span><span>Nouvelles technologies</span>
      </div>
    </section>
  );
}

function Qualities() {
  return (
    <section id="profil" className="quality-section section-shell">
      <SectionTitle
        eyebrow="Ma manière de travailler"
        title="Ce qui me fait avancer."
      />
      <div className="quality-grid">
        {qualities.map((quality, index) => (
          <Reveal className="quality-card" key={quality.label} delay={index * 0.06}>
            <span>0{index + 1}</span>
            <h3>{quality.label}</h3>
            <p>{quality.proof}</p>
            <ArrowUpRight aria-hidden="true" />
          </Reveal>
        ))}
      </div>
      <Reveal className="about-strip">
        <div>
          <p className="eyebrow">À propos</p>
          <h3>BUT R&T · IUT de Béziers</h3>
        </div>
        <p>
          Année 3 · réseaux, systèmes, cloud et développement. Alternance recherchée à Béziers, Montpellier, Narbonne ou Toulouse.
        </p>
      </Reveal>
    </section>
  );
}

const orbitIcons = [
  { label: "Linux", Icon: SiLinux },
  { label: "Cisco", Icon: SiCisco },
  { label: "Proxmox", Icon: SiProxmox },
  { label: "Docker", Icon: SiDocker },
  { label: "Python", Icon: SiPython },
  { label: "Grafana", Icon: SiGrafana },
  { label: "Prometheus", Icon: SiPrometheus },
  { label: "Cloudflare", Icon: SiCloudflare },
  { label: "Lua", Icon: SiLua },
];

function Skills() {
  const [activeSkill, setActiveSkill] = useState(skillGroups[0].id);
  const selectedSkill = skillGroups.find((skill) => skill.id === activeSkill) ?? skillGroups[0];

  return (
    <section id="competences" className="skills-section">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Compétences"
          title="Domaines. Outils. Pratique."
        />
        <div className="skills-layout">
          <div className="skills-copy">
            <div className="skill-tabs" role="tablist" aria-label="Domaines de compétences">
              {skillGroups.map((skill) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSkill === skill.id}
                  className={activeSkill === skill.id ? "skill-tab active" : "skill-tab"}
                  key={skill.id}
                  onClick={() => setActiveSkill(skill.id)}
                >
                  {skill.shortLabel}
                </button>
              ))}
            </div>
            <motion.div
              key={selectedSkill.id}
              className="skill-detail"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="eyebrow">{selectedSkill.label}</p>
              <h3>{selectedSkill.summary}</h3>
              <div className="skill-actions">
                {selectedSkill.actions.map((action, index) => (
                  <span key={action}><i>0{index + 1}</i>{action}</span>
                ))}
              </div>
              <div className="technology-list">
                {selectedSkill.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </motion.div>
          </div>
          <Reveal className="orbit-frame">
            <OrbitingTechnologyGlobe technologies={orbitIcons} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PersonalProjects() {
  return (
    <div className="personal-projects">
      <div className="project-copy">
        <p className="eyebrow">Projets personnels</p>
        <h3>Perso. Hors cours.</h3>
        <p>Homelab, développement, expérimentation.</p>
        <div className="project-index">
          {personalProjects.map((item, index) => (
            <span key={item.title}><i>0{index + 1}</i>{item.title}</span>
          ))}
        </div>
      </div>
      <InteractiveProjectFolder projects={personalProjects} />
    </div>
  );
}

function StudyProjects() {
  return (
    <div className="study-projects">
      <div className="subsection-heading">
        <div>
          <p className="eyebrow">Projets d’études</p>
          <h3>Études. Mis en pratique.</h3>
        </div>
        <a href="https://github.com/DroGone0" target="_blank" rel="noreferrer">
          Voir GitHub <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="study-grid">
        {studyProjects.map((project, index) => (
          <Reveal className="study-card" key={project.title} delay={index * 0.05}>
            <div className="study-card-top">
              <span>{project.category}</span>
              <span>0{index + 1}</span>
            </div>
            <h4>{project.title}</h4>
            <p>{project.summary}</p>
            <strong>{project.highlight}</strong>
            <div className="technology-list">
              {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projets" className="projects-section section-shell">
      <SectionTitle
        eyebrow="Projets"
        title="Projets. En pratique."
      />
      <PersonalProjects />
      <StudyProjects />
    </section>
  );
}

function Experiences() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.45, 1], [8, 0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.45, 1], [0.94, 1, 0.97]);

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="section-shell">
        <SectionTitle
          eyebrow="Expériences"
          title="Sur le terrain."
        />
        <motion.div className="experience-window" style={{ rotateX, scale }}>
          <div className="window-bar">
            <span><i /><i /><i /></span>
            <span>Expériences terrain</span>
            <span>02 missions</span>
          </div>
          <div className="experience-grid">
            {experiences.map((experience, index) => (
              <article className={index === 0 ? "experience-card inverse" : "experience-card"} key={experience.company}>
                <div className="experience-card-top">
                  <span>0{index + 1}</span>
                  <BriefcaseBusiness size={18} />
                </div>
                <p className="eyebrow">Stage · {experience.company}</p>
                <h3>{experience.role}</h3>
                <p>{experience.summary}</p>
                <strong>{experience.highlight}</strong>
                <ul>
                  {experience.missions.map((mission) => <li key={mission}>{mission}</li>)}
                </ul>
                <div className="technology-list">
                  {experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function JourneyAndActivity() {
  return (
    <section className="journey-section section-shell">
      <div className="journey-grid">
        <Reveal className="journey-card">
          <p className="eyebrow">Parcours</p>
          <div className="journey-item current">
            <GraduationCap />
            <div>
              <span>Aujourd’hui</span>
              <h3>BUT Réseaux & Télécommunications</h3>
              <p>IUT de Béziers · Troisième année</p>
            </div>
          </div>
          <div className="journey-item">
            <Code2 />
            <div>
              <span>Fondations</span>
              <h3>BUT Informatique</h3>
              <p>Programmation, algorithmique, applications et bases de données.</p>
            </div>
          </div>
        </Reveal>
        <Reveal className="activity-card" delay={0.08}>
          <div className="activity-heading">
            <div>
              <p className="eyebrow">Activité GitHub</p>
              <h3>Au fil des projets.</h3>
            </div>
            <SiGithub />
          </div>
          <div className="github-calendar" aria-label="Calendrier réel des contributions GitHub de DroGone0">
            <GitHubCalendar
              username="DroGone0"
              colorScheme="dark"
              blockMargin={4}
              blockRadius={2}
              blockSize={10}
              fontSize={11}
              showWeekdayLabels
              theme={{ dark: ["#292927", "#5966a3", "#6977c7", "#8292ed", "#a8b4ff"] }}
              labels={{
                months: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"],
                weekdays: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                totalCount: "{{count}} contributions sur les 12 derniers mois",
                legend: { less: "Moins", more: "Plus" },
              }}
              errorMessage="Le calendrier GitHub est momentanément indisponible."
            />
          </div>
          <p>Activité publique · <strong>DroGone0</strong></p>
          <a href="https://github.com/DroGone0" target="_blank" rel="noreferrer">Ouvrir le profil <ArrowUpRight size={15} /></a>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2>Une alternance. Un projet. Parlons-en.</h2>
          <p>Disponible maintenant · Béziers, Montpellier, Narbonne, Toulouse.</p>
          <div className="contact-actions">
            <a href="mailto:drogoneia@gmail.com" className="action action-white"><Mail size={17} />drogoneia@gmail.com</a>
            <a href="https://github.com/DroGone0" target="_blank" rel="noreferrer" className="action action-outline"><SiGithub size={17} />GitHub</a>
          </div>
          <div className="contact-meta">
            <span><CircleDot size={14} />Discord · drogone_</span>
            <span><Sparkles size={14} />Alternance · disponible maintenant</span>
          </div>
        </Reveal>
      </div>
      <div className="contact-marquee" aria-hidden="true">
        <span>Réseau · Linux · Virtualisation · Développement · Cloud · Automatisation · </span>
        <span>Réseau · Linux · Virtualisation · Développement · Cloud · Automatisation · </span>
      </div>
    </section>
  );
}

export function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 28, restDelta: 0.001 });

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <Navigation />
      <main id="main">
        <Hero />
        <Qualities />
        <Skills />
        <Projects />
        <Experiences />
        <JourneyAndActivity />
        <Contact />
      </main>
      <footer>
        <span>© 2026 Robin / DroGone</span>
        <span>Portfolio personnel</span>
        <a href="#accueil">Retour en haut <ArrowRight size={14} /></a>
      </footer>
    </>
  );
}
