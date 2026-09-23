import { useState } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Article from './components/Article'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import MotsCles from './components/MotsCles'
import IconFrown from './components/IconFrown'
import articles from './data/articles'
import './App.css'

// les catégories du blog, "Toutes" en premier
const categories = ['Toutes', 'Festival', 'Concert', 'Musique', 'Cinéma', 'Culture']

// la liste de tous les mots-clés des articles, sans doublons
const motsCles = []
articles.forEach((article) => {
  article.motsCles.forEach((mot) => {
    if (!motsCles.includes(mot)) {
      motsCles.push(mot)
    }
  })
})
// tri alphabétique (localeCompare pour bien gérer les accents)
motsCles.sort((a, b) => a.localeCompare(b))

function App() {
  // ce que l'utilisateur tape dans la barre de recherche
  const [recherche, setRecherche] = useState('')
  // la catégorie sélectionnée
  const [categorie, setCategorie] = useState('Toutes')

  const texteRecherche = recherche.trim().toLowerCase()

  // on garde les articles de la bonne catégorie ET qui correspondent à la recherche
  const articlesFiltres = articles.filter((article) => {
    const bonneCategorie = categorie === 'Toutes' || article.categorie === categorie

    // on met les mots-clés bout à bout pour pouvoir chercher dedans
    const motsClesArticle = article.motsCles.join(' ').toLowerCase()

    const correspond =
      article.titre.toLowerCase().includes(texteRecherche) ||
      article.categorie.toLowerCase().includes(texteRecherche) ||
      article.texte.toLowerCase().includes(texteRecherche) ||
      motsClesArticle.includes(texteRecherche)

    return bonneCategorie && correspond
  })

  // petit texte au-dessus des articles, ex : "3 articles pour « jazz » dans Concert"
  let message = articlesFiltres.length + ' article'
  if (articlesFiltres.length > 1) {
    message += 's'
  }
  if (recherche) {
    message += ' pour « ' + recherche + ' »'
  }
  if (categorie !== 'Toutes') {
    message += ' dans ' + categorie
  }

  // remet la recherche et la catégorie à zéro
  function reinitialiser() {
    setRecherche('')
    setCategorie('Toutes')
  }

  return (
    <>
      <Nav />
      <Header />

      <main className="container">
        <div className="row g-4">
          {/* la barre latérale passe sous les articles sur mobile (order-2) */}
          <aside className="col-lg-3 order-2 order-lg-1">
            <MotsCles motsCles={motsCles} actif={recherche} onClick={setRecherche} />
          </aside>

          <div className="col-lg-9 order-1 order-lg-2">
            <section className="mb-4">
              <SearchBar valeur={recherche} onChange={setRecherche} />
              <CategoryFilter categories={categories} active={categorie} onChange={setCategorie} />
              <p className="text-muted mb-0">{message}</p>
            </section>

            {articlesFiltres.length === 0 ? (
              <div className="alert alert-light text-center py-5">
                <IconFrown />
                <p className="mt-2">Aucun article ne correspond à ta recherche.</p>
                <button type="button" className="btn btn-outline-dark btn-sm" onClick={reinitialiser}>
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                {articlesFiltres.map((article) => (
                  <Article
                    key={article.id}
                    article={article}
                    onCategorie={setCategorie}
                    onMotCle={setRecherche}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
