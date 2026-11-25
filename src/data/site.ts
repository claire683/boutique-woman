// Toutes les informations de la boutique au même endroit.
// Pour changer un horaire, un texte ou une photo : c'est ici.

/**
 * Photos : pour l'instant elles sont lues sur l'ancien site WordPress.
 * Avant de couper WordPress, lancer `npm run images` (copie tout dans public/images)
 * puis passer IMAGES_LOCALES à true.
 */
export const IMAGES_LOCALES = false || import.meta.env.PUBLIC_IMAGES_LOCALES === 'true';
const DISTANT = 'https://www.boutique-woman.fr/wp-content/uploads/';
/** Préfixe les liens internes avec le dossier du site (utile sur le site de dev) */
export const lien = (chemin: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + chemin;
export const img = (chemin: string) => (IMAGES_LOCALES ? lien('/images/') + chemin + '.webp' : DISTANT + chemin);

export const boutique = {
  nom: 'Woman',
  accroche: 'Votre boutique 100 % Liu Jo à Belfort',
  adresse: '36 Faubourg des Ancêtres',
  ville: '90000 Belfort',
  telephone: '09 53 12 61 74',
  telephoneLien: 'tel:+33953126174',
  email: 'contact@boutique-woman.fr',
  instagram: 'https://www.instagram.com/woman.belfort/',
  facebook: 'https://www.facebook.com/p/Boutique-Woman-61566639387705/',
  itineraire:
    'https://www.google.com/maps/dir/?api=1&destination=Woman+Liu+Jo+36+Faubourg+des+Anc%C3%AAtres+90000+Belfort',
  avisGoogle:
    'https://www.google.com/maps/search/?api=1&query=Woman+Liu+Jo+36+Faubourg+des+Anc%C3%AAtres+Belfort',
};

// Horaires officiels (bio Instagram, novembre 2026)
export const horaires = [
  { jour: 'Lundi', heures: '14 h à 19 h' },
  { jour: 'Mardi au samedi', heures: '10 h à 12 h 30 et 14 h à 19 h' },
  { jour: 'Dimanche', heures: 'Fermé' },
];

// Données structurées Google (jours au format schema.org)
export const horairesSchema = [
  { dayOfWeek: ['Monday'], opens: '14:00', closes: '19:00' },
  { dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '10:00', closes: '12:30' },
  { dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '14:00', closes: '19:00' },
];

export const hero = {
  photo: img('2026/07/F04A0625.jpeg'),
  alt: 'Des femmes de Belfort habillées en Liu Jo posent ensemble devant la boutique Woman',
};

// Série « Bonjour Woman » et femmes qui posent pour la boutique
export const bonjourWoman = [
  { src: img('2026/04/F04A6537-scaled-e1775482294684.jpg'), alt: 'Trois femmes en tenues claires Liu Jo, sourire aux lèvres' },
  { src: img('2026/10/DSC_2305-scaled.png'), alt: 'Cliente en tenue Liu Jo devant une porte en bois' },
  { src: img('2026/10/Emma-2.png'), alt: 'Emma en manteau sombre, assise sur un muret' },
  { src: img('2026/10/WhatsApp-Image-2026-09-28-at-06.21.54-5.jpeg'), alt: 'Deux amies en pull blanc et manteau noir' },
  { src: img('2026/11/WhatsApp-Image-2026-10-08-at-17.22.13.jpeg'), alt: 'Portrait en manteau de fausse fourrure sur fond rouge' },
  { src: img('2026/10/DSC_2303-scaled.png'), alt: 'Veste bleu marine et chemise blanche' },
  { src: img('2026/11/WhatsApp-Image-2026-11-02-at-14.43.05.jpeg'), alt: 'Photo en noir et blanc, jambes et escarpins sur une voiture ancienne' },
];

// Photos supplémentaires pour la mise en page magazine
export const magazine = {
  pleinePage: { src: img('2026/04/F04A6537-scaled-e1775482294684.jpg'), alt: 'Trois femmes en tenues claires Liu Jo, sourire aux lèvres' },
  noirEtBlanc: { src: img('2026/11/WhatsApp-Image-2026-11-02-at-14.43.04-2.jpeg'), alt: 'Portrait en noir et blanc à côté d’une voiture ancienne' },
  kiosque: { src: img('2026/11/kiosque_WOMAN_couvertures1.png'), alt: 'Les couvertures du kiosque Woman en vitrine' },
  vitrine: { src: img('2015/01/woman-14.jpg'), alt: 'La vitrine de la boutique Woman, Faubourg des Ancêtres' },
  emma: { src: img('2026/10/Emma-1.png'), alt: 'Emma en tenue Liu Jo dans la rue' },
  duo: { src: img('2026/10/DSC_2301-scaled.png'), alt: 'Escarpin Liu Jo bleu contre une porte en bois' },
};

// Le look de l'ouverture : une tenue réellement portée, et ses pièces
export const look = {
  // Photo locale (WebP) quand IMAGES_LOCALES, sinon l'originale
  photo: { src: img('2026/10/DSC_2303-scaled.png'), alt: 'Une femme de Belfort porte une veste courte marine, un pantalon flare, une pochette blanche et des escarpins bleus devant une porte en bois' },
  gros: { src: img('2026/10/DSC_2305-scaled.png'), alt: 'Gros plan sur la veste à surpiqûres et la pochette blanche' },
  detail: { src: img('2026/10/DSC_2301-scaled.png'), alt: 'Détail des escarpins bleus en daim' },
  // Positions en % de la photo (x de gauche à droite, y de haut en bas)
  // Positions en % de la photo (x de gauche à droite, y de haut en bas).
  pieces: [
    { id: 'veste', nom: 'Veste courte à surpiqûres', x: 68, y: 29 },
    { id: 'top', nom: 'Top blanc', x: 59, y: 34 },
    { id: 'pochette', nom: 'Pochette blanche', x: 63, y: 51 },
    { id: 'pantalon', nom: 'Pantalon flare marine', x: 71, y: 74 },
    { id: 'escarpins', nom: 'Escarpins en daim', x: 64, y: 96 },
  ],
};

export const collections = [
  { nom: 'Prêt-à-porter', photo: img('2026/11/tenue-grise-1.png'), alt: 'Tenue grise Liu Jo portée en ville' },
  { nom: 'Jeans', photo: img('2026/11/jeanfourrure2.png'), alt: 'Jean et pull jacquard Liu Jo' },
  { nom: 'Maroquinerie', photo: img('2026/11/1-1.png'), alt: 'Sac Liu Jo tenu à la main' },
  { nom: 'Chaussures', photo: img('2026/11/3-1.png'), alt: 'Bottine Liu Jo en cuir marron' },
  { nom: 'Couture', photo: img('2026/11/2.png'), alt: 'Tenue Liu Jo portée dans un escalier' },
  { nom: 'Accessoires', photo: img('2026/11/ceinture.png'), alt: 'Ceinture logo Liu Jo' },
];

export const avis = [
  { texte: 'La gérante est disponible, accueillante et de très bon conseil. On sent qu’elle prend le temps d’accompagner ses clientes pour trouver ce qui leur correspond vraiment.', auteur: 'Emilie C.' },
  { texte: 'Super accueil et conseils. Rare de nos jours et tellement agréable. La collection est superbe.', auteur: 'Jeanne P.' },
  { texte: 'Une boutique incontournable à Belfort où l’on revient avec plaisir.', auteur: 'Alexandra M.' },
  { texte: 'Accueillante et à l’écoute. Je vous conseille de pousser la porte pour vous faire plaisir 😉', auteur: 'Cel P.' },
];
