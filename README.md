# Mon Blog

Petit blog réalisé en React dans le cadre du cours. Les articles sont stockés dans un fichier JS et affichés dynamiquement, avec une barre de recherche pour les filtrer.

## Fonctionnalités

- Affichage des articles à partir d'un fichier de données (`src/data/articles.js`)
- Barre de recherche qui filtre en direct sur le titre, la catégorie, les mots-clés et le texte
- Filtre rapide en cliquant sur la catégorie ou un mot-clé d'un article
- Compteur de résultats et message quand aucun article ne correspond
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

## Structure

```
src/
├── components/
│   ├── Nav.jsx         # barre de navigation
│   ├── Header.jsx      # en-tête du blog
│   ├── SearchBar.jsx   # barre de recherche
│   ├── Article.jsx     # carte d'un article
│   └── Footer.jsx      # pied de page
├── data/
│   └── articles.js     # les articles du blog
├── App.jsx             # assemble tout + gère la recherche
├── App.css             # styles perso
└── main.jsx            # point d'entrée
```
