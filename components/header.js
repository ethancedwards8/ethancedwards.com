import Link from 'next/link';

export default function Header() {
    return (
        <div>
          <nav>
            <div className="brand-logo navlink"><Link href="/" passHref><a>Ethan Carter Edwards</a></Link></div>
            <ul>
              <div className="navlink"><li><Link href="/" passHref><a>Home</a></Link></li></div>
              <div className="navlink"><li><Link href="/blog" passHref><a>Blog</a></Link></li></div>
              <div className="navlink"><li><Link href="/about" passHref><a>About/Contact</a></Link></li></div>
            </ul>
          </nav>
        </div>
    );
}
