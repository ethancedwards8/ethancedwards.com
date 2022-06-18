import Link from 'next/link';

export default function Header() {
    return (
        <div>
          <nav>
            <div className="brand-logo navlink"><Link href="/"><a>Ethan Carter Edwards</a></Link></div>
            <ul>
              <div className="navlink"><li><Link href="/"><a>Home</a></Link></li></div>
              <div className="navlink"><li><Link href="/blog"><a>Blog</a></Link></li></div>
              <div className="navlink"><li><Link href="/about"><a>About/Contact</a></Link></li></div>
            </ul>
          </nav>
        </div>
    );
}
