export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src="./Logo.png" alt="React logo" width="200px" />

        <ul className="navigation">
          <li className="item">Pricing</li>
          <li className="item">About</li>
          <li className="item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}