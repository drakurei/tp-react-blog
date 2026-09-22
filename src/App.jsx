import { useState } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Article from './components/Article'
import SearchBar from './components/SearchBar'
import articles from './data/articles'
import './App.css'

function App() {
  // ce que l'utilisateur tape dans la barre de recherche
  const [recherche, setRecherche] = useState('')

  // on filtre les articles sur le titre, la catégorie, les mots-clés et le texte
  const texteRecherche = recherche.trim().toLowerCase()
  const articlesFiltres = articles.filter((article) => {
    return (
      article.titre.toLowerCase().includes(texteRecherche) ||
      article.categorie.toLowerCase().includes(texteRecherche) ||
      article.texte.toLowerCase().includes(texteRecherche) ||
      article.motsCles.some((mot) => mot.toLowerCase().includes(texteRecherche))
    )
  })

  return (
    <>
      <Nav />
      <Header />

      <main className="container" id="articles">
        <section className="mb-4">
          <SearchBar valeur={recherche} onChange={setRecherche} />
          <p className="text-muted mt-2 mb-0">
            {articlesFiltres.length} article{articlesFiltres.length > 1 ? 's' : ''}
            {recherche && <> pour « {recherche} »</>}
          </p>
        </section>

        {articlesFiltres.length === 0 ? (
          <div className="alert alert-light text-center py-5">
            Aucun article ne correspond à « {recherche} » 😕
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {articlesFiltres.map((article) => (
              <Article key={article.id} article={article} onFiltre={setRecherche} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}

export default App
