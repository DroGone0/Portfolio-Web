export type Quality = {
  label: string;
  proof: string;
};

export type SkillGroup = {
  id: string;
  label: string;
  shortLabel: string;
  summary: string;
  actions: string[];
  technologies: string[];
};

export type PortfolioProject = {
  title: string;
  category: string;
  summary: string;
  highlight: string;
  technologies: string[];
};

export type Experience = {
  company: string;
  role: string;
  summary: string;
  highlight: string;
  missions: string[];
  technologies: string[];
};

export const qualities: Quality[] = [
  {
    label: "Curieux",
    proof: "Veille, essais, nouveaux outils.",
  },
  {
    label: "Autonome",
    proof: "Homelab, services et projets perso.",
  },
  {
    label: "Rigoureux",
    proof: "Diagnostic, vérification, documentation.",
  },
  {
    label: "Persévérant",
    proof: "Chercher, tester, corriger.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "network",
    label: "Réseaux",
    shortLabel: "Réseau",
    summary: "Faire circuler, segmenter, diagnostiquer.",
    actions: ["Routage", "Commutation", "Services réseau", "Analyse trafic"],
    technologies: ["Cisco", "VLAN", "STP", "OSPF", "BGP", "MPLS", "DNS", "DHCP", "Wireshark"],
  },
  {
    id: "systems",
    label: "Systèmes Linux",
    shortLabel: "Linux",
    summary: "Administrer, déployer, dépanner.",
    actions: ["Serveurs Linux", "Accès & droits", "Services", "Dépannage"],
    technologies: ["Debian", "Ubuntu", "Bash", "SSH", "Apache", "NFS", "Windows Server"],
  },
  {
    id: "virtualization",
    label: "Virtualisation & cloud",
    shortLabel: "Cloud",
    summary: "Isoler, héberger, reproduire.",
    actions: ["Machines virtuelles", "Conteneurs", "Réseaux virtuels", "Services"],
    technologies: ["Proxmox", "Docker", "Compose", "LXC", "LXD", "Incus", "KVM", "Cloudflare"],
  },
  {
    id: "observability",
    label: "Supervision & automatisation",
    shortLabel: "Observe",
    summary: "Mesurer, visualiser, automatiser.",
    actions: ["Métriques", "Dashboards", "Journaux", "Déploiement"],
    technologies: ["Prometheus", "Grafana", "Loki", "SNMP", "Python", "Bash", "YAML", "PXE"],
  },
  {
    id: "development",
    label: "Développement",
    shortLabel: "Dev",
    summary: "Scripter, outiller, développer.",
    actions: ["Python", "Applications", "Web", "Lua"],
    technologies: ["Python", "C#", "HTML", "CSS", "Lua", "SQL", "Git", "GitHub"],
  },
];

export const personalProjects: PortfolioProject[] = [
  {
    title: "Homelab Proxmox",
    category: "Projet personnel · Infrastructure",
    summary: "Un serveur personnel pour héberger des machines virtuelles, des conteneurs et différents services auto-hébergés.",
    highlight: "Un laboratoire disponible pour tester, casser et reconstruire.",
    technologies: ["Proxmox", "Linux", "Docker", "Nextcloud", "Cloudflare Tunnel"],
  },
  {
    title: "Serveur FiveM",
    category: "Projet personnel · Développement",
    summary: "Développement et administration d’un serveur multijoueur avec des fonctionnalités personnalisées et une communauté à gérer.",
    highlight: "Code, performance serveur, base de données et travail en équipe.",
    technologies: ["FiveM", "QBCore", "Lua", "SQL", "Git"],
  },
];

export const studyProjects: PortfolioProject[] = [
  {
    title: "Infrastructure BGP",
    category: "Routage",
    summary: "Quatre systèmes autonomes, des sessions eBGP/iBGP et l’analyse de la sélection des routes.",
    highlight: "4 systèmes autonomes",
    technologies: ["BGP", "OSPF", "Cisco", "Wireshark"],
  },
  {
    title: "Plateforme de supervision",
    category: "Observabilité",
    summary: "Collecte et visualisation des métriques CPU, mémoire, stockage, réseau et disponibilité des services.",
    highlight: "Métriques centralisées",
    technologies: ["Prometheus", "Grafana", "Node Exporter", "Glances"],
  },
  {
    title: "Datacenter Leaf–Spine",
    category: "Architecture",
    summary: "Une topologie de datacenter reproductible réunissant routage, services et télémétrie réseau.",
    highlight: "Notions VXLAN et MP-BGP mises en pratique",
    technologies: ["Containerlab", "BGP", "VXLAN", "Linux", "Grafana"],
  },
  {
    title: "Déploiement & automatisation",
    category: "Systèmes",
    summary: "Préparation d’environnements et déploiement de services à l’aide de scripts et de fichiers de configuration.",
    highlight: "Des opérations rendues reproductibles",
    technologies: ["Python", "Bash", "YAML", "PXE", "Git"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Thales",
    role: "Développement C#",
    summary: "Développement d’un prototype de lunette de visée et de son interface graphique.",
    highlight: "Du besoin fonctionnel à un prototype manipulable",
    missions: ["Développement en C#", "Conception de l’interface graphique", "Itérations sur le comportement du prototype"],
    technologies: ["C#", "Interface graphique", "Prototypage"],
  },
  {
    company: "Hemeria",
    role: "Technicien informatique stagiaire",
    summary: "Participation à la migration du parc Windows 10 vers Windows 11 et assistance aux utilisateurs.",
    highlight: "Environ 150 postes concernés",
    missions: ["Compatibilité matérielle, TPM et Secure Boot", "Installation et vérifications après migration", "Diagnostic Outlook, Exchange, DNS et HTTPS"],
    technologies: ["Windows 11", "Lansweeper", "Rufus", "Outlook", "Exchange"],
  },
];

export const navItems = [
  ["profil", "Profil"],
  ["competences", "Compétences"],
  ["projets", "Projets"],
  ["experience", "Expériences"],
  ["contact", "Contact"],
] as const;
