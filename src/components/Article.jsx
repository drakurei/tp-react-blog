import { useState } from 'react'
import IconHeart from './IconHeart'

// Carte d'un article
// onCategorie / onMotCle = fonctions appelées quand on clique sur un badge
function Article({ article, onCategorie, onMotCle }) {
  // est-ce que le texte complet est affiché ?
  const [ouvert, setOuvert] = useState(false)
  // est-ce que l'utilisateur a aimé l'article ?
  const [aime, setAime] = useState(false)

  return (
    <div className="col">
      <div className="card h-100 shadow-sm card-article">
        <img src={article.image} className="card-img-top" alt={article.titre} />

        <div className="card-body">
          <button
            type="button"
            className="badge text-bg-dark badge-filtre mb-2"
            onClick={() => onCategorie(article.categorie)}
          >
            {article.categorie}
          </button>

          <h2 className="card-title h5">{article.titre}</h2>
          <p className="small text-muted mb-2">{article.date}</p>

          {/* le texte est coupé à 3 lignes tant qu'il n'est pas ouvert */}
          <p className={ouvert ? 'card-text' : 'card-text texte-article'}>{article.texte}</p>

          <button
            type="button"
            className="btn btn-link btn-sm p-0 text-decoration-none"
            onClick={() => setOuvert(!ouvert)}
          >
            {ouvert ? 'Réduire' : 'Lire la suite'}
          </button>
        </div>

        <div className="card-footer bg-transparent border-0 pb-3 d-flex justify-content-between align-items-center gap-2">
          <div className="d-flex flex-wrap gap-1">
            {article.motsCles.map((mot) => (
              <button
                key={mot}
                type="button"
                className="badge text-bg-light badge-filtre"
                onClick={() => onMotCle(mot)}
              >
                #{mot}
              </button>
            ))}
          </div>

          {/* le bouton change de couleur et d'icône quand on aime l'article */}
          <button
            type="button"
            className={aime ? 'btn btn-sm btn-danger' : 'btn btn-sm btn-outline-danger'}
            onClick={() => setAime(!aime)}
          >
            <IconHeart plein={aime} /> {aime ? 'Aimé' : "J'aime"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Article
