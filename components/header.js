// import './Navbar.css';
import Link from 'next/link';

function Header() {
    return (
        <div>
          <nav>
            <Link className="brand-logo navlink" href="/"><a>Ethan Carter Edwards</a></Link>
            <ul>
              <li><Link className="navlink" href="/"><a>Home</a></Link></li>
              <li><Link className="navlink" href="/about"><a>About/Contact</a></Link></li>
            </ul>
          </nav>
        </div>
    );
}

export default Header;
