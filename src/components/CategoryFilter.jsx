// Boutons pour filtrer par catégorie
// categories = la liste, active = celle sélectionnée, onChange = change la catégorie
function CategoryFilter({ categories, active, onChange }) {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-2 my-3">
      {categories.map((cat) => {
        // la catégorie active est en noir plein, les autres juste avec le contour
        let classe = 'btn btn-sm rounded-pill btn-outline-dark'
        if (cat === active) {
          classe = 'btn btn-sm rounded-pill btn-dark'
        }

        return (
          <button key={cat} type="button" className={classe} onClick={() => onChange(cat)}>
            {cat}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
