# Direction visuelle — Portfolio Robin / DroGone

## Promesse

Présenter en moins de dix secondes un étudiant en BUT Réseaux & Télécommunications qui construit aussi des projets concrets en systèmes, virtualisation et développement, disponible pour une alternance.

## Hiérarchie éditoriale

1. Identité, formation, disponibilité et actions principales.
2. Méthode de travail : curieux, autonome, rigoureux et persévérant, avec une preuve courte pour chaque qualité.
3. Compétences et outils, regroupés par usage et non en catalogue exhaustif.
4. Projets personnels : homelab Proxmox et serveur FiveM.
5. Projets d’études : BGP, supervision, Leaf–Spine et automatisation/PXE.
6. Expériences terrain : Thales puis Hemeria.
7. Parcours, activité GitHub et contact.

## Direction

Une interface éditoriale monochrome : fond blanc cassé, texte presque noir, surfaces translucides et détails gris froid. Le noir sert aux moments de contraste, pas à créer une ambiance « terminal ». Une seule teinte de signal, bleu froid très discret, peut indiquer le focus ou la disponibilité.

Le site doit évoquer un portfolio de designer-ingénieur : typographie assurée, beaucoup d’air, grille précise, contenu court et interactions tactiles. Aucun vocabulaire de console, aucun faux statut système, aucune décoration réseau gratuite.

## Composants 21st.dev retenus

- `Orbiting Circles` de Magic UI : adapté en carte de compétences avec logos techniques en orbite.
- `Interactive Folder Gallery` : adapté aux deux projets personnels, comme des dossiers de travail consultables.
- `Container Scroll Animation` d’Aceternity : mouvement réduit pour présenter les expériences sans créer une section démesurée.
- `Retro Space Shooter GitHub Calendar` : activité réelle de `DroGone0`, placée en second niveau et sans modifier les données.
- `Resizable Navbar` : comportement de navigation compact au scroll, restylé dans le système monochrome.

Chaque composant est intégré depuis le registre public 21st.dev puis réécrit visuellement pour le projet. Les références servent de comportement de départ, pas de thème à recopier.

## Système visuel

- Fond principal : `#f4f4f1`.
- Texte : `#111111`.
- Surface : blanc translucide avec bordure noire à 8–12 %.
- Surface inverse : `#111111`, texte blanc cassé.
- Accent d’interaction : `#5167f6`, utilisé avec parcimonie.
- Titres : sans-serif grotesque, très lisible, suivi serré.
- Texte courant : 15–18 px, lignes courtes.
- Rayons : 18–28 px pour les grandes surfaces, forme pilule pour les contrôles.

## Mouvement

- Apparition courte et douce au changement de section.
- Orbits lentes uniquement dans la carte de compétences.
- Inclinaison/échelle légère sur les conteneurs au scroll.
- Déploiement physique des dossiers uniquement à l’interaction.
- Aucun effet permanent derrière le texte.
- `prefers-reduced-motion` désactive les boucles et conserve tout le contenu.

## Règles de contenu

- Une idée principale par bloc.
- Une à deux phrases maximum par projet visible.
- Les technologies sont des indices secondaires.
- Les compétences sont formulées par action : configurer, administrer, déployer, diagnostiquer, automatiser.
- Les affirmations non confirmées restent génériques ; le stage Thales est présenté comme un développement C# et une interface graphique, sans framework inventé.

## Références

- 21st.dev / Magic UI — Orbiting Circles.
- 21st.dev / UI The Factory — Interactive Folder Gallery.
- 21st.dev / Aceternity — Container Scroll Animation et Resizable Navbar.
- 21st.dev / Jahirul Islam — GitHub Calendar.

## Accessibilité et responsive

- Navigation clavier et focus visible.
- Contraste AA sur les textes et contrôles.
- Taille tactile minimale de 44 px.
- Toutes les interactions disposent d’une lecture statique sur mobile.
- Pas de contenu essentiel dépendant du survol.
