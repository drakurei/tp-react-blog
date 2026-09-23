// Barre latérale avec la liste de tous les mots-clés (sans doublons)
// motsCles = la liste, actif = le mot-clé sélectionné, onClick = filtre les articles au clic
function MotsCles({ motsCles, actif, onClick }) {
  return (
    <div className="card shadow-sm sticky-lg-top" style={{ top: '1rem' }}>
      <div className="card-header bg-dark text-white">
        Mots-clés ({motsCles.length})
      </div>
      <div className="card-body d-flex flex-wrap gap-2">
        {motsCles.map((mot) => {
          // le mot-clé recherché est en noir, les autres en gris clair
          let classe = 'badge text-bg-light badge-filtre'
          if (mot === actif) {
            classe = 'badge text-bg-dark badge-filtre'
          }

          return (
            <button key={mot} type="button" className={classe} onClick={() => onClick(mot)}>
              #{mot}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MotsCles
