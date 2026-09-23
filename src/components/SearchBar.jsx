import IconSearch from './IconSearch'

// Barre de recherche
// valeur = le texte tapé, onChange = la fonction qui met à jour la recherche
function SearchBar({ valeur, onChange }) {
  return (
    <div className="input-group input-group-lg shadow-sm">
      <span className="input-group-text">
        <IconSearch />
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Rechercher un article (titre, mot-clé, catégorie...)"
        value={valeur}
        onChange={(e) => onChange(e.target.value)}
      />
      {valeur && (
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => onChange("")}
        >
          Effacer
        </button>
      )}
    </div>
  )
}

export default SearchBar
