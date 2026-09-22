// Carte d'un article
// Reçoit l'article en props + une fonction onFiltre pour filtrer en cliquant sur un badge
function Article({ article, onFiltre }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm card-article">
        <img src={article.image} className="card-img-top" alt={article.titre} />

        <div className="card-body">
          <button
            type="button"
            className="badge text-bg-dark badge-filtre mb-2"
            onClick={() => onFiltre(article.categorie)}
          >
            {article.categorie}
          </button>

          <h2 className="card-title h5">{article.titre}</h2>
          <p className="small text-muted mb-2">{article.date}</p>
          <p className="card-text texte-article">{article.texte}</p>
        </div>

        <div className="card-footer bg-transparent border-0 pb-3">
          {article.motsCles.map((mot) => (
            <button
              key={mot}
              type="button"
              className="badge text-bg-light badge-filtre me-1"
              onClick={() => onFiltre(mot)}
            >
              #{mot}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Article
