function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {new Date().getFullYear()} Zakaria Saidi</p>
        <p className="footer__tagline">
          Built with JavaScript &amp; Python
        </p>
      </div>
    </footer>
  )
}

export default Footer