export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between gap-2">
        <span>© {new Date().getFullYear()} Alda Dwi Aprisagita</span>
        <span>Made with ♡ and a little bit of code.</span>
      </div>
    </footer>
  );
}
