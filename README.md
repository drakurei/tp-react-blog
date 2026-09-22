# Mon Blog

Petit blog réalisé en React dans le cadre du cours. Les articles sont stockés dans un fichier JS et affichés dynamiquement, avec une barre de recherche pour les filtrer.

**Démo en ligne :** https://drakurei.github.io/tp-react-blog/

## Fonctionnalités

- Affichage des articles à partir d'un fichier de données (`src/data/articles.js`)
- Barre de recherche qui filtre en direct sur le titre, la catégorie, les mots-clés et le texte
- Filtres par catégorie (Toutes / Musique / Festival / Concert / Cinéma / Culture), combinables avec la recherche
- Filtre rapide en cliquant sur la catégorie ou un mot-clé d'un article
- Bouton « Lire la suite » pour déplier le texte complet d'un article
- Compteur de résultats, message quand aucun article ne correspond et bouton pour réinitialiser les filtres
- Mise en page responsive avec Bootstrap (1, 2 ou 3 colonnes selon l'écran)

## Technos

- React 19 + Vite
- Bootstrap 5 (installé avec npm)
- Un peu de CSS perso dans `src/App.css`

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173

## Déployer sur GitHub Pages

```bash
npm run deploy
```

Le script construit le site puis le publie sur la branche `gh-pages`. Il est ensuite accessible sur https://drakurei.github.io/tp-react-blog/

## Structure

```
src/
├── components/
│   ├── Nav.jsx            # barre de navigation
│   ├── Header.jsx         # en-tête du blog
│   ├── SearchBar.jsx      # barre de recherche
│   ├── CategoryFilter.jsx # boutons de filtre par catégorie
│   ├── Article.jsx        # carte d'un article (avec "Lire la suite")
│   ├── Icons.jsx          # icônes SVG
│   └── Footer.jsx         # pied de page
├── data/
│   └── articles.js        # les articles du blog
├── App.jsx                # assemble tout + gère la recherche et les filtres
├── App.css                # styles perso
└── main.jsx               # point d'entrée
```
