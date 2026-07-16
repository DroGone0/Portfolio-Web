import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Cloud,
  Code2,
  Cpu,
  Download,
  GraduationCap,
  Mail,
  Menu,
  Network,
  Radio,
  Route,
  Server,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  X,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { navItems, primaryTechnologies, projects, skillDomains } from "./data";

const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ index, eyebrow, title, copy }: { index: string; eyebrow: string; title: string; copy?: string }) {
  return (
    <Reveal className="section-heading">
      <div className="section-index">{index}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
    </Reveal>
  );
}

function NetworkField() {
  const reduce = useReducedMotion();
  const points = [
    [82, 104], [220, 62], [365, 148], [510, 74], [668, 182], [820, 108], [980, 198], [1120, 82], [1248, 146],
  ];
  const links = [[0,1],[1,2],[2,3],[2,4],[3,5],[4,5],[4,6],[5,7],[6,8],[7,8]];
  return (
    <div className="network-field" aria-hidden="true">
      <svg viewBox="0 0 1330 260" preserveAspectRatio="none">
        <defs>
          <linearGradient id="signal" x1="0" x2="1">
            <stop offset="0" stopColor="#5cc8ff" stopOpacity="0.08" />
            <stop offset="0.5" stopColor="#5cc8ff" stopOpacity="0.7" />
            <stop offset="1" stopColor="#5cc8ff" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        {links.map(([a,b], i) => (
          <motion.line key={i} x1={points[a][0]} y1={points[a][1]} x2={points[b][0]} y2={points[b][1]} stroke="url(#signal)" strokeWidth="1"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }} animate={reduce ? undefined : { pathLength: 1, opacity: 1 }} transition={{ delay: .3 + i * .06, duration: 1.2, ease }} />
        ))}
        {points.map(([x,y], i) => (
          <g key={i}>
            <motion.circle cx={x} cy={y} r="9" fill="#070b10" stroke="#5cc8ff" strokeOpacity=".32" initial={reduce ? false : { scale: 0 }} animate={reduce ? undefined : { scale: 1 }} transition={{ delay: .55 + i * .07, ease }} />
            <motion.circle cx={x} cy={y} r="2.4" fill="#8dddff" animate={reduce ? undefined : { opacity: [.3, 1, .3] }} transition={{ duration: 2.2 + i * .12, repeat: Infinity }} />
          </g>
        ))}
        {!reduce && <motion.circle r="3.5" fill="#ffb35c" filter="drop-shadow(0 0 7px #ffb35c)" animate={{ cx: [82,220,365,668,820,1120,1248], cy: [104,62,148,182,108,82,146] }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} />}
      </svg>
    </div>
  );
}

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">Aller au contenu</a>
      <header className="site-header">
        <a href="#accueil" className="brand" aria-label="Retour à l’accueil"><span className="brand-mark">D</span><span>DroGone</span></a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map(([id,label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="availability" href="#contact"><span></span> Disponible dès maintenant</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>{open ? <X/> : <Menu/>}</button>
      </header>
      {open && (
        <motion.nav className="mobile-nav" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} aria-label="Navigation mobile">
          {navItems.map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={17}/></a>)}
        </motion.nav>
      )}
    </>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="accueil" className="hero">
      <NetworkField />
      <div className="hero-grid">
        <motion.div className="hero-copy" initial={reduce ? false : { opacity: 0 }} animate={reduce ? undefined : { opacity: 1 }} transition={{ duration: .8 }}>
          <div className="hero-kicker"><span>RTR-03</span><span>Béziers · France</span><span>Signal stable</span></div>
          <h1><span>Robin</span><span className="hero-alias">/ DroGone</span></h1>
          <p className="hero-role">Étudiant en <strong>Réseaux & Télécommunications</strong></p>
          <p className="hero-lead">Je développe des infrastructures réseau, des services Linux et des projets autour de la virtualisation, du cloud et de l’automatisation.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projets">Voir mes projets <ArrowDown size={17}/></a>
            <a className="button button-secondary" href="mailto:drogoneia@gmail.com?subject=Demande%20de%20CV">CV sur demande <Download size={17}/></a>
          </div>
        </motion.div>
        <motion.aside className="hero-console" initial={reduce ? false : { opacity: 0, x: 34 }} animate={reduce ? undefined : { opacity: 1, x: 0 }} transition={{ duration: .9, delay: .25, ease }}>
          <div className="console-top"><span>profile.status</span><span className="console-lights"><i></i><i></i><i></i></span></div>
          <div className="console-body">
            <div className="identity-orbit"><div className="orbit orbit-a"></div><div className="orbit orbit-b"></div><div className="core"><Network size={32}/><span>RT</span></div><i className="satellite one"></i><i className="satellite two"></i></div>
            <dl className="console-data">
              <div><dt>Formation</dt><dd>BUT R&T · 3e année</dd></div>
              <div><dt>Orientation</dt><dd>Réseau · Cloud · Cyber · Dev</dd></div>
              <div><dt>Objectif</dt><dd>Alternance</dd></div>
              <div><dt>Mobilité</dt><dd>Béziers · Montpellier · Narbonne · Toulouse</dd></div>
            </dl>
          </div>
          <div className="console-footer"><span><Radio size={13}/> En recherche active</span><span>uptime 03Y</span></div>
        </motion.aside>
      </div>
      <div className="tech-marquee" aria-label="Technologies principales"><div>{[...primaryTechnologies, ...primaryTechnologies].map((tech,i) => <span key={`${tech}-${i}`}><i></i>{tech}</span>)}</div></div>
    </section>
  );
}

function Profile() {
  const facts = [
    { value: "150", label: "postes concernés", sub: "Migration Windows 11" },
    { value: "4", label: "systèmes autonomes", sub: "Infrastructure BGP" },
    { value: "1", label: "homelab Proxmox", sub: "En évolution continue" },
  ];
  return (
    <section id="profil" className="section profile-section">
      <SectionHeading index="01" eyebrow="Profil" title="Du réseau jusqu’au service." copy="Mon fil conducteur : comprendre l’infrastructure, la construire, l’observer et résoudre ce qui ne fonctionne pas." />
      <div className="profile-layout">
        <Reveal className="profile-manifesto">
          <p>Étudiant en troisième année de BUT Réseaux & Télécommunications à l’IUT de Béziers, je travaille sur des projets d’administration système, de virtualisation, de cloud et de développement.</p>
          <p>J’apprends surtout par la pratique : créer une topologie, déployer un service, mesurer son état puis documenter les choix techniques.</p>
          <div className="profile-objective"><ShieldCheck/><div><span>Objectif 2026</span><strong>Une alternance en réseau, développement, cloud ou administration informatique.</strong></div></div>
        </Reveal>
        <div className="stat-stack">{facts.map((fact,i)=><Reveal key={fact.label} className="stat-card" delay={i*.08}><span className="stat-value">{fact.value}</span><div><strong>{fact.label}</strong><small>{fact.sub}</small></div><span className="stat-pulse"></span></Reveal>)}</div>
      </div>
    </section>
  );
}

function Skills() {
  const [active, setActive] = useState(skillDomains[0].id);
  const selected = skillDomains.find((item) => item.id === active)!;
  return (
    <section id="competences" className="section skills-section">
      <SectionHeading index="02" eyebrow="Domaines de compétences" title="Une topologie, cinq zones de pratique." copy="Sélectionnez un nœud pour explorer les compétences et technologies associées." />
      <div className="skills-system">
        <div className="skill-nodes" role="tablist" aria-label="Domaines de compétences">
          {skillDomains.map((domain,i)=><button key={domain.id} role="tab" aria-selected={active===domain.id} onClick={()=>setActive(domain.id)} className={active===domain.id ? "skill-node active" : "skill-node"}><span>{domain.code}</span><strong>{domain.label}</strong><i>{String(i+1).padStart(2,"0")}</i></button>)}
        </div>
        <motion.div className="skill-panel" key={selected.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35, ease }}>
          <div className="skill-panel-head"><span>{selected.code}</span><div className="signal-bars"><i></i><i></i><i></i><i></i></div></div>
          <h3>{selected.label}</h3><p>{selected.summary}</p>
          <div className="capability-grid">{selected.capabilities.map(item=><span key={item}><Check size={14}/>{item}</span>)}</div>
          <div className="technology-cloud">{selected.technologies.map(item=><span key={item}>{item}</span>)}</div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projets" className="section projects-section">
      <SectionHeading index="03" eyebrow="Projets sélectionnés" title="Des environnements construits pour apprendre." copy="Cinq projets qui montrent le passage de la théorie à une infrastructure ou un service concret." />
      <div className="project-list">
        {projects.map((project,i)=><Reveal key={project.number} className="project-card" delay={i*.04}>
          <div className="project-number">{project.number}</div>
          <div className="project-main"><div className="project-meta"><span>{project.type}</span><span className={`status status-${project.status.toLowerCase().replace(" ","-")}`}><i></i>{project.status}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="project-tech">{project.technologies.map(tech=><span key={tech}>{tech}</span>)}</div></div>
          <div className="project-details"><strong>{project.result}</strong><ul>{project.details.map(item=><li key={item}>{item}</li>)}</ul></div>
          <div className="project-route"><Route size={24}/><span></span></div>
        </Reveal>)}
      </div>
      <Reveal><a className="inline-link" href="https://github.com/DroGone0" target="_blank" rel="noreferrer">Explorer mes dépôts GitHub <ArrowUpRight size={17}/></a></Reveal>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <SectionHeading index="04" eyebrow="Expérience" title="Une migration à l’échelle réelle." />
      <div className="experience-grid">
        <Reveal className="experience-identity"><div className="experience-icon"><BriefcaseBusiness/></div><p className="eyebrow">Stage · Hemeria</p><h3>Technicien informatique stagiaire</h3><p>Participation à la migration du parc Windows 10 vers Windows 11, de la préparation jusqu’à l’assistance utilisateur.</p><div className="experience-tools">{["Lansweeper","PC Health Check","Rufus","Windows 11","Outlook","Exchange"].map(x=><span key={x}>{x}</span>)}</div></Reveal>
        <Reveal className="experience-meter"><div className="meter-value"><strong>≈150</strong><span>postes concernés</span></div><div className="meter-track"><motion.div initial={{width:0}} whileInView={{width:"92%"}} viewport={{once:true}} transition={{duration:1.4,ease}} /></div><div className="meter-labels"><span>Audit</span><span>Migration</span><span>Validation</span></div></Reveal>
        <Reveal className="mission-list"><h3>Interventions réalisées</h3>{["Compatibilité matérielle, TPM et Secure Boot","Création des supports et installation Windows 11","Contrôles après migration et assistance utilisateurs","Diagnostic Outlook, Exchange, DNS et HTTPS","Documentation des incidents et solutions"].map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p></div>)}</Reveal>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="parcours" className="section journey-section">
      <SectionHeading index="05" eyebrow="Parcours" title="Un profil réseau enrichi par le développement." />
      <div className="journey-line">
        <Reveal className="journey-item active"><span className="journey-year">Aujourd’hui</span><div className="journey-node"><GraduationCap/></div><div><p className="eyebrow">Formation principale</p><h3>BUT Réseaux & Télécommunications</h3><p>IUT de Béziers · Troisième année</p><div className="journey-tags"><span>Réseaux</span><span>Systèmes</span><span>Cloud</span><span>Cybersécurité</span><span>Supervision</span><span>Automatisation</span></div></div></Reveal>
        <Reveal className="journey-item"><span className="journey-year">Fondations</span><div className="journey-node"><Code2/></div><div><p className="eyebrow">Parcours complémentaire</p><h3>BUT Informatique</h3><p>Bases en programmation, algorithmique, développement d’applications et bases de données.</p></div></Reveal>
      </div>
      <Reveal className="qualities"><p className="eyebrow">Méthode de travail</p>{["Curieux","Autonome","Rigoureux","Polyvalent","Persévérant","Esprit d’équipe"].map((q,i)=><span key={q}><i>{i+1}</i>{q}</span>)}</Reveal>
    </section>
  );
}

function Personal() {
  const interests = [{icon:Server,label:"Auto-hébergement"},{icon:Cpu,label:"IA & technologies"},{icon:TerminalSquare,label:"Open source"},{icon:Sparkles,label:"Jeu vidéo & esport"},{icon:Cloud,label:"Voyages"}];
  return (
    <section className="section personal-section">
      <SectionHeading index="06" eyebrow="En dehors de l’informatique… ou presque" title="Toujours un projet à tester." />
      <div className="personal-grid"><Reveal className="personal-copy"><p>Je développe aussi des projets personnels autour des serveurs, de l’intelligence artificielle et du jeu vidéo. J’aime découvrir de nouveaux outils, expérimenter et suivre l’évolution des technologies.</p><p className="personal-quote">« Comprendre en construisant. »</p></Reveal><div className="interest-grid">{interests.map(({icon:Icon,label},i)=><Reveal key={label} className="interest-card" delay={i*.06}><Icon/><span>{label}</span><i>0{i+1}</i></Reveal>)}</div></div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <NetworkField />
      <Reveal className="contact-inner"><p className="eyebrow">Connexion ouverte</p><h2>Un projet, une alternance<br/>ou une question&nbsp;?</h2><p>Je suis disponible dès maintenant sur Béziers, Montpellier, Narbonne et Toulouse.</p><div className="contact-actions"><a className="button button-primary" href="mailto:drogoneia@gmail.com">Écrire un e-mail <Mail size={17}/></a><a className="button button-secondary" href="https://www.linkedin.com/in/robin-britelle/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17}/></a></div><div className="contact-channels"><a href="mailto:drogoneia@gmail.com"><Mail/>drogoneia@gmail.com</a><span><Radio/>Discord · drogone_</span><a href="https://github.com/DroGone0" target="_blank" rel="noreferrer"><Code2/>github.com/DroGone0</a></div></Reveal>
    </section>
  );
}

export function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 24, restDelta: .001 });
  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Navigation />
      <main id="main"><Hero/><Profile/><Skills/><Projects/><Experience/><Journey/><Personal/><Contact/></main>
      <footer><span>© 2026 DroGone</span><span>Conçu comme une infrastructure vivante.</span><a href="#accueil">Retour en haut <ArrowUpRight size={14}/></a></footer>
    </>
  );
}
