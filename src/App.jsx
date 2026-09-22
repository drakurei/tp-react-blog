import { useState } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Article from './components/Article'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import { IconFrown } from './components/Icons'
import articles from './data/articles'
import './App.css'

// liste des catégories (sans doublons) avec "Toutes" en premier
const categories = ['Toutes', ...new Set(articles.map((article) => article.categorie))]

function App() {
  // ce que l'utilisateur tape dans la barre de recherche
  const [recherche, setRecherche] = useState('')
  // la catégorie sélectionnée
  const [categorie, setCategorie] = useState('Toutes')

  const texteRecherche = recherche.trim().toLowerCase()

  // on garde les articles de la bonne catégorie ET qui correspondent à la recherche
  const articlesFiltres = articles.filter((article) => {
    const bonneCategorie = categorie === 'Toutes' || article.categorie === categorie

    const correspond =
      article.titre.toLowerCase().includes(texteRecherche) ||
      article.categorie.toLowerCase().includes(texteRecherche) ||
      article.texte.toLowerCase().includes(texteRecherche) ||
      article.motsCles.some((mot) => mot.toLowerCase().includes(texteRecherche))

    return bonneCategorie && correspond
  })

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
        <section className="mb-4">
          <SearchBar valeur={recherche} onChange={setRecherche} />
          <CategoryFilter categories={categories} active={categorie} onChange={setCategorie} />
          <p className="text-muted mb-0">
            {articlesFiltres.length} article{articlesFiltres.length > 1 ? 's' : ''}
            {recherche && <> pour « {recherche} »</>}
            {categorie !== 'Toutes' && <> dans {categorie}</>}
          </p>
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
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
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
      </main>

      <Footer />
    </>
  )
}

export default App
