function Footer() {
  // l'année se met à jour toute seule
  const annee = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <p className="text-center mb-0">Copyright &copy; {annee} - Mon Blog</p>
    </footer>
  )
}

export default Footer
