// Boutons pour filtrer par catégorie
// categories = la liste, active = celle sélectionnée, onChange = change la catégorie
function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-2 my-3">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`btn btn-sm rounded-pill ${cat === active ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
