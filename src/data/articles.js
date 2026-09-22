// Liste des articles du blog
// Chaque article a : id, titre, categorie, motsCles, image, date, texte
const articles = [
  {
    id: 1,
    titre: "Festival de l'été",
    categorie: "Festival",
    motsCles: ["été", "plein air", "live"],
    image: "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg",
    date: "12 juillet 2026",
    texte:
      "Trois jours de musique en plein air, une programmation éclectique et une ambiance incroyable. Retour sur le festival qui a marqué mon été, entre découvertes et gros coups de cœur sur la grande scène.",
  },
  {
    id: 2,
    titre: "Nuit du jazz à Paris",
    categorie: "Concert",
    motsCles: ["jazz", "saxophone", "Paris"],
    image: "https://loremflickr.com/800/500/jazz,saxophone?lock=21",
    date: "3 juillet 2026",
    texte:
      "Une soirée dans un petit club du 11e arrondissement, un quartet en pleine improvisation et un saxophoniste qui a mis tout le monde d'accord. Le jazz live, ça ne se raconte pas, ça se vit.",
  },
  {
    id: 3,
    titre: "Rock en Seine : le retour",
    categorie: "Festival",
    motsCles: ["rock", "Paris", "week-end"],
    image: "https://loremflickr.com/800/500/rock,concert?lock=22",
    date: "28 juin 2026",
    texte:
      "Le festival du domaine de Saint-Cloud est de retour avec une affiche qui donne envie. Je vous partage mes attentes, mes conseils pour s'organiser et les groupes à ne surtout pas manquer.",
  },
  {
    id: 4,
    titre: "La scène électro lyonnaise",
    categorie: "Musique",
    motsCles: ["électro", "Lyon", "DJ", "clubbing"],
    image: "https://loremflickr.com/800/500/dj,nightclub?lock=23",
    date: "20 juin 2026",
    texte:
      "Lyon bouillonne côté musique électronique. Entre collectifs indépendants et soirées dans des lieux insolites, petit tour d'horizon d'une scène qui monte et qui n'a rien à envier à la capitale.",
  },
  {
    id: 5,
    titre: "Le vinyle, un retour en force",
    categorie: "Musique",
    motsCles: ["vinyle", "collection", "albums"],
    image: "https://loremflickr.com/800/500/vinyl,records?lock=24",
    date: "14 juin 2026",
    texte:
      "Pourquoi tant de monde se remet à acheter des disques ? Son, pochettes, objet... Je vous explique ce qui m'a fait replonger et mes conseils pour débuter une collection sans se ruiner.",
  },
  {
    id: 6,
    titre: "Cinéma en plein air au parc",
    categorie: "Cinéma",
    motsCles: ["cinéma", "plein air", "été", "gratuit"],
    image: "https://loremflickr.com/800/500/cinema,outdoor?lock=25",
    date: "8 juin 2026",
    texte:
      "Une couverture, un pique-nique et un grand écran sous les étoiles. Les séances de cinéma en plein air reviennent tout l'été : voici les lieux et les films que je vous recommande.",
  },
  {
    id: 7,
    titre: "Les Vieilles Charrues, mode d'emploi",
    categorie: "Festival",
    motsCles: ["Bretagne", "camping", "conseils"],
    image: "https://loremflickr.com/800/500/festival,crowd?lock=26",
    date: "1 juin 2026",
    texte:
      "Le plus grand festival de France, ça se prépare ! Camping, transport, budget, programmation : tout ce qu'il faut savoir pour vivre l'expérience à fond sans galérer.",
  },
  {
    id: 8,
    titre: "Concert acoustique dans une église",
    categorie: "Concert",
    motsCles: ["acoustique", "guitare", "intimiste"],
    image: "https://loremflickr.com/800/500/acoustic,guitar?lock=27",
    date: "25 mai 2026",
    texte:
      "Loin des grandes salles, un concert acoustique dans une petite église de village. Une acoustique naturelle incroyable et un moment suspendu que je ne suis pas prêt d'oublier.",
  },
  {
    id: 9,
    titre: "Top 5 des salles de concert à Paris",
    categorie: "Concert",
    motsCles: ["Paris", "salles", "top"],
    image: "https://loremflickr.com/800/500/concert,stage?lock=28",
    date: "18 mai 2026",
    texte:
      "De la petite salle intimiste à la grande scène mythique, voici mes cinq salles préférées pour voir un concert à Paris. Ambiance, son, placement : je vous dis tout.",
  },
  {
    id: 10,
    titre: "Mes films préférés du Festival de Cannes",
    categorie: "Cinéma",
    motsCles: ["Cannes", "films", "palmarès"],
    image: "https://loremflickr.com/800/500/cinema,film?lock=29",
    date: "30 mai 2026",
    texte:
      "Le festival est terminé et le palmarès est tombé. Voici les films qui m'ont le plus marqué cette année, ceux que j'attends en salle et ma petite déception.",
  },
  {
    id: 11,
    titre: "Apprendre la guitare en 3 mois",
    categorie: "Musique",
    motsCles: ["guitare", "débutant", "apprentissage"],
    image: "https://loremflickr.com/800/500/guitar?lock=30",
    date: "10 mai 2026",
    texte:
      "J'ai décidé de me lancer dans la guitare avec un objectif : jouer mes premiers morceaux en trois mois. Méthode, applis, motivation... je vous raconte mon parcours de débutant.",
  },
  {
    id: 12,
    titre: "Street art et musique : balade à Berlin",
    categorie: "Culture",
    motsCles: ["Berlin", "street art", "voyage"],
    image: "https://loremflickr.com/800/500/streetart,berlin?lock=31",
    date: "2 mai 2026",
    texte:
      "Berlin, c'est des murs qui racontent des histoires et de la musique à chaque coin de rue. Retour sur trois jours entre fresques géantes, friches et clubs légendaires.",
  },
  {
    id: 13,
    titre: "Hip-hop : aux racines du mouvement",
    categorie: "Musique",
    motsCles: ["hip-hop", "rap", "histoire", "New York"],
    image: "https://loremflickr.com/800/500/hiphop,microphone?lock=32",
    date: "24 avril 2026",
    texte:
      "Du Bronx des années 70 aux scènes du monde entier, petite histoire du hip-hop et de ses quatre piliers. Un mouvement qui a changé la musique et la culture pour toujours.",
  },
]

export default articles
