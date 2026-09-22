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
      "Trois jours de musique en plein air, une programmation éclectique et une ambiance incroyable. Retour sur le festival qui a marqué mon été, entre découvertes et gros coups de cœur sur la grande scène. Le premier soir, un groupe de rock local a ouvert le bal avant une tête d'affiche électro qui a fait danser tout le monde jusqu'à deux heures du matin. Mention spéciale aux food trucks et à la scène acoustique cachée derrière les arbres, mon vrai coup de cœur du week-end.",
  },
  {
    id: 2,
    titre: "Nuit du jazz à Paris",
    categorie: "Concert",
    motsCles: ["jazz", "saxophone", "Paris"],
    image: "https://loremflickr.com/800/500/jazz,saxophone?lock=21",
    date: "3 juillet 2026",
    texte:
      "Une soirée dans un petit club du 11e arrondissement, un quartet en pleine improvisation et un saxophoniste qui a mis tout le monde d'accord. Le jazz live, ça ne se raconte pas, ça se vit. On était une cinquantaine dans la salle, à deux mètres des musiciens, et chaque solo était applaudi comme un but en finale. Si vous voulez découvrir le jazz sans vous ruiner, ces petits clubs sont la meilleure porte d'entrée : l'entrée coûte le prix d'un ciné et l'ambiance est unique.",
  },
  {
    id: 3,
    titre: "Rock en Seine : le retour",
    categorie: "Festival",
    motsCles: ["rock", "Paris", "week-end"],
    image: "https://loremflickr.com/800/500/rock,concert?lock=22",
    date: "28 juin 2026",
    texte:
      "Le festival du domaine de Saint-Cloud est de retour avec une affiche qui donne envie. Je vous partage mes attentes, mes conseils pour s'organiser et les groupes à ne surtout pas manquer. Côté pratique : venez tôt, le métro est saturé en fin de journée, et prévoyez de la crème solaire, les pelouses sont en plein soleil. Côté musique, j'ai coché trois groupes de rock indé que je suis depuis des années et une découverte que je vous raconterai après le week-end.",
  },
  {
    id: 4,
    titre: "La scène électro lyonnaise",
    categorie: "Musique",
    motsCles: ["électro", "Lyon", "DJ", "clubbing"],
    image: "https://loremflickr.com/800/500/dj,nightclub?lock=23",
    date: "20 juin 2026",
    texte:
      "Lyon bouillonne côté musique électronique. Entre collectifs indépendants et soirées dans des lieux insolites, petit tour d'horizon d'une scène qui monte et qui n'a rien à envier à la capitale. J'ai passé un week-end à enchaîner une soirée techno dans une ancienne usine, un set house sur une péniche et un after dans un bar de la Croix-Rousse. Trois ambiances, trois publics, mais partout la même énergie et des DJ qui prennent des risques.",
  },
  {
    id: 5,
    titre: "Le vinyle, un retour en force",
    categorie: "Musique",
    motsCles: ["vinyle", "collection", "albums"],
    image: "https://loremflickr.com/800/500/vinyl,records?lock=24",
    date: "14 juin 2026",
    texte:
      "Pourquoi tant de monde se remet à acheter des disques ? Son, pochettes, objet... Je vous explique ce qui m'a fait replonger et mes conseils pour débuter une collection sans se ruiner. Tout a commencé avec la platine de mon grand-père retrouvée dans un grenier. Depuis, je passe mes samedis chez les disquaires d'occasion à fouiller les bacs à cinq euros. Le rituel de poser le disque et de retourner la face B change complètement la façon d'écouter un album.",
  },
  {
    id: 6,
    titre: "Cinéma en plein air au parc",
    categorie: "Cinéma",
    motsCles: ["cinéma", "plein air", "été", "gratuit"],
    image: "https://loremflickr.com/800/500/cinema,outdoor?lock=25",
    date: "8 juin 2026",
    texte:
      "Une couverture, un pique-nique et un grand écran sous les étoiles. Les séances de cinéma en plein air reviennent tout l'été : voici les lieux et les films que je vous recommande. La Villette propose sa programmation gratuite tous les soirs de juillet, et plusieurs parcs de banlieue s'y mettent aussi avec des classiques et des films récents. Mon conseil : arrivez une heure avant pour avoir une bonne place, et n'oubliez pas un pull, les nuits sont fraîches même en été.",
  },
  {
    id: 7,
    titre: "Les Vieilles Charrues, mode d'emploi",
    categorie: "Festival",
    motsCles: ["Bretagne", "camping", "conseils"],
    image: "https://loremflickr.com/800/500/festival,crowd?lock=26",
    date: "1 juin 2026",
    texte:
      "Le plus grand festival de France, ça se prépare ! Camping, transport, budget, programmation : tout ce qu'il faut savoir pour vivre l'expérience à fond sans galérer. Quatre jours à Carhaix, c'est près de 300 000 festivaliers et plus de 70 concerts. J'y suis allé trois fois, et j'ai appris à mes dépens qu'une tente sans double toit sous la pluie bretonne, c'est une mauvaise idée. Je vous donne ma checklist complète et mes astuces pour manger correctement sur place.",
  },
  {
    id: 8,
    titre: "Concert acoustique dans une église",
    categorie: "Concert",
    motsCles: ["acoustique", "guitare", "intimiste"],
    image: "https://loremflickr.com/800/500/acoustic,guitar?lock=27",
    date: "25 mai 2026",
    texte:
      "Loin des grandes salles, un concert acoustique dans une petite église de village. Une acoustique naturelle incroyable et un moment suspendu que je ne suis pas prêt d'oublier. Pas d'amplification, juste une guitare, une voix et la réverbération des vieilles pierres. Le public retenait son souffle entre chaque morceau. Ce genre de concert rappelle que la musique n'a pas besoin de gros moyens pour toucher les gens.",
  },
  {
    id: 9,
    titre: "Top 5 des salles de concert à Paris",
    categorie: "Concert",
    motsCles: ["Paris", "salles", "top"],
    image: "https://loremflickr.com/800/500/concert,stage?lock=28",
    date: "18 mai 2026",
    texte:
      "De la petite salle intimiste à la grande scène mythique, voici mes cinq salles préférées pour voir un concert à Paris. Ambiance, son, placement : je vous dis tout. En numéro un, une salle du 20e où le son est parfait où que vous soyez placé. Suivent une ancienne salle de cinéma reconvertie, un lieu mythique de Pigalle, une péniche, et pour finir la grande salle où j'ai vu mon tout premier concert à quinze ans.",
  },
  {
    id: 10,
    titre: "Mes films préférés du Festival de Cannes",
    categorie: "Cinéma",
    motsCles: ["Cannes", "films", "palmarès"],
    image: "https://loremflickr.com/800/500/cinema,film?lock=29",
    date: "30 mai 2026",
    texte:
      "Le festival est terminé et le palmarès est tombé. Voici les films qui m'ont le plus marqué cette année, ceux que j'attends en salle et ma petite déception. Le film qui a remporté la Palme mérite largement sa récompense : deux heures intenses sur une famille qui se déchire, filmées avec une justesse rare. J'ai aussi adoré un premier film d'animation présenté hors compétition. Ma déception, c'est le thriller dont tout le monde parlait et qui m'a laissé de marbre.",
  },
  {
    id: 11,
    titre: "Apprendre la guitare en 3 mois",
    categorie: "Musique",
    motsCles: ["guitare", "débutant", "apprentissage"],
    image: "https://loremflickr.com/800/500/guitar?lock=30",
    date: "10 mai 2026",
    texte:
      "J'ai décidé de me lancer dans la guitare avec un objectif : jouer mes premiers morceaux en trois mois. Méthode, applis, motivation... je vous raconte mon parcours de débutant. Le premier mois a été le plus dur : les doigts qui font mal, les accords qui sonnent faux, l'envie d'abandonner. Puis un jour, l'enchaînement Sol, Ré, Mi mineur est sorti tout seul. Aujourd'hui, je joue trois morceaux en entier et je m'attaque à mon premier solo.",
  },
  {
    id: 12,
    titre: "Street art et musique : balade à Berlin",
    categorie: "Culture",
    motsCles: ["Berlin", "street art", "voyage"],
    image: "https://loremflickr.com/800/500/streetart,berlin?lock=31",
    date: "2 mai 2026",
    texte:
      "Berlin, c'est des murs qui racontent des histoires et de la musique à chaque coin de rue. Retour sur trois jours entre fresques géantes, friches et clubs légendaires. Le matin, balade le long de l'East Side Gallery et dans les cours cachées de Kreuzberg. L'après-midi, marchés aux puces où les vendeurs de disques côtoient les artistes. Et la nuit, la légendaire scène techno berlinoise, dans des lieux où la fête ne s'arrête jamais vraiment.",
  },
  {
    id: 13,
    titre: "Hip-hop : aux racines du mouvement",
    categorie: "Musique",
    motsCles: ["hip-hop", "rap", "histoire", "New York"],
    image: "https://loremflickr.com/800/500/hiphop,microphone?lock=32",
    date: "24 avril 2026",
    texte:
      "Du Bronx des années 70 aux scènes du monde entier, petite histoire du hip-hop et de ses quatre piliers. Un mouvement qui a changé la musique et la culture pour toujours. Le rap, le DJing, le graffiti et le breakdance sont nés dans les block parties de New York, portés par des jeunes qui n'avaient rien d'autre que leur créativité. Cinquante ans plus tard, le hip-hop est la musique la plus écoutée au monde, et son influence dépasse largement la musique : mode, langage, cinéma.",
  },
]

export default articles
