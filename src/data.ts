export type SkillDomain = {
  id: string;
  label: string;
  code: string;
  summary: string;
  capabilities: string[];
  technologies: string[];
};

export type Project = {
  number: string;
  title: string;
  type: string;
  summary: string;
  result: string;
  details: string[];
  technologies: string[];
  status: "Déployé" | "Documenté" | "En évolution";
};

export const skillDomains: SkillDomain[] = [
  {
    id: "network",
    label: "Réseaux",
    code: "NET.01",
    summary: "Concevoir, configurer et diagnostiquer des architectures réseau cohérentes.",
    capabilities: ["Routage & commutation", "Architecture d’entreprise", "Analyse de trafic", "Services réseau"],
    technologies: ["VLAN", "STP", "OSPF", "BGP", "MPLS", "NAT", "DNS", "DHCP"],
  },
  {
    id: "systems",
    label: "Linux & systèmes",
    code: "SYS.02",
    summary: "Administrer des serveurs, déployer des services et diagnostiquer les incidents.",
    capabilities: ["Administration Linux", "Gestion des accès", "Déploiement de services", "Scripts Bash"],
    technologies: ["Debian", "Ubuntu", "Bash", "SSH", "Apache", "NFS"],
  },
  {
    id: "virtualization",
    label: "Virtualisation",
    code: "VRT.03",
    summary: "Créer des environnements isolés, reproductibles et adaptés aux ressources disponibles.",
    capabilities: ["Machines virtuelles", "Conteneurs", "Réseaux virtuels", "Gestion des ressources"],
    technologies: ["Proxmox", "Docker", "Compose", "LXC / LXD", "Incus", "KVM"],
  },
  {
    id: "observability",
    label: "Supervision",
    code: "OBS.04",
    summary: "Collecter, visualiser et interpréter les métriques utiles à la disponibilité d’un service.",
    capabilities: ["Collecte de métriques", "Dashboards", "Journaux centralisés", "Détection de problèmes"],
    technologies: ["Prometheus", "Grafana", "Node Exporter", "Loki", "Promtail", "SNMP"],
  },
  {
    id: "development",
    label: "Développement",
    code: "DEV.05",
    summary: "Développer des outils, automatisations, interfaces et fonctionnalités orientées usage.",
    capabilities: ["Python", "Automatisation", "Applications web", "Fonctionnalités serveur"],
    technologies: ["Python", "TypeScript", "HTML / CSS", "Lua", "SQL", "Git"],
  },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Homelab Proxmox",
    type: "Infrastructure personnelle",
    summary: "Un environnement personnel pour héberger, isoler et expérimenter avec plusieurs services.",
    result: "1 homelab actif",
    details: ["Machines virtuelles et conteneurs", "Stockage et réseau virtualisés", "Accès distant sécurisé", "Services auto-hébergés et IA locale"],
    technologies: ["Proxmox", "Linux", "Docker", "Nextcloud", "Cloudflare Tunnel"],
    status: "En évolution",
  },
  {
    number: "02",
    title: "Infrastructure BGP",
    type: "Routage inter-AS",
    summary: "Une topologie multi-opérateurs pour observer la propagation des routes et le choix du meilleur chemin.",
    result: "4 systèmes autonomes",
    details: ["Sessions eBGP et iBGP", "Annonce et filtrage de réseaux", "Weight et Local Preference", "Tests et analyse Wireshark"],
    technologies: ["BGP", "OSPF", "Cisco", "Wireshark"],
    status: "Documenté",
  },
  {
    number: "03",
    title: "Plateforme de supervision",
    type: "Observabilité",
    summary: "Une chaîne de collecte et de visualisation pour suivre l’état de plusieurs serveurs.",
    result: "Métriques centralisées",
    details: ["CPU, RAM, stockage et réseau", "Dashboards dédiés", "Disponibilité des services", "Alertes et diagnostic"],
    technologies: ["Prometheus", "Grafana", "Node Exporter", "Glances"],
    status: "Déployé",
  },
  {
    number: "04",
    title: "Datacenter Leaf–Spine",
    type: "Architecture réseau",
    summary: "Une architecture de datacenter conteneurisée qui réunit routage, services et télémétrie.",
    result: "Topologie reproductible",
    details: ["Fabric Leaf–Spine", "Redondance et routage", "DNS et stockage", "Notions VXLAN et MP-BGP mises en pratique"],
    technologies: ["Containerlab", "BGP", "VXLAN", "Linux", "Grafana"],
    status: "En évolution",
  },
  {
    number: "05",
    title: "Serveur FiveM",
    type: "Développement de jeu",
    summary: "Développement et administration d’un serveur multijoueur avec des fonctionnalités personnalisées.",
    result: "Produit communautaire",
    details: ["Scripts et fonctionnalités", "Gestion SQL", "Performance serveur", "Collaboration et communauté"],
    technologies: ["FiveM", "QBCore", "Lua", "SQL", "Git"],
    status: "En évolution",
  },
];

export const primaryTechnologies = ["Linux", "Cisco", "Proxmox", "Docker", "Python", "GitHub", "Prometheus", "Grafana", "Wireshark", "Containerlab", "Cloudflare", "Windows Server"];

export const navItems = [
  ["profil", "Profil"],
  ["competences", "Compétences"],
  ["projets", "Projets"],
  ["experience", "Expérience"],
  ["parcours", "Parcours"],
  ["contact", "Contact"],
] as const;
