import Head from 'next/head';
import Link from 'next/link';
import Logo from './logo';

function MainNavigation() {
  return (
    <header className="flex justify-between bg-white p-6 place-items-center"
    style={{ 
        backgroundColor: "#222b64",
        paddingLeft: "140px",
        paddingRight: "140px",
  
      }}
    >
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul className='flex'>
          <li className='p-4 text-white'
          style={{
            fontSize: "20px",
          }}
          >
            <Link href="/news"
            >News</Link>
          </li>
          <li className='p-4 text-white'
          style={{
            fontSize: "20px",
          }}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;