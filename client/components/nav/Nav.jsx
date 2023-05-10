import styles from '../../styles/Header.module.css';
import Link from 'next/link';
import Hamburger from './Hamburger';
import { useState } from 'react';

function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  return (
    <>
      <nav className={styles.nav}>
        <li className='home'>
          <Link href="/">Home</Link>
        </li>
        <li className='about'>
          <Link href="/about">About Us</Link>
        </li>
        <li className='profile'>
          <Link href="/profile">Profile</Link>
        </li>
      </nav>
      <div className={styles.hamburgerWrapper} onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>
      <style jsx>{`
        nav {
          background-color: #222e;
          backdrop-filter: blur(8px);
          height: 100vh;
          width: 50vw;
          position: absolute;
          right: 0;
          top: 0;
          animation: ${hamburgerOpen ? 'appear .35s ease-in forwards' : 'disappear .5s ease-out forwards'};
        }
        .home, .about, .profile {
          justify-content: flex-end;
          margin-bottom: 1.5rem;
          margin-right: 1rem;
          border-right: 3px solid #ccdc;
          transform-origin: 1px;
          transition: all .05s linear;
          display: ${hamburgerOpen ? 'flex' : 'none'};
          animation: ${hamburgerOpen ? '.5s lift .35s ease-in forwards' : 'disappear .5s ease-out forwards'};          
        }
        nav > li:hover {
          background-color: #ccdc;
          padding-left: -20%;
          color: #111;
          border-right: 3px solid #111;
        }
        .home {
          margin-top: 6rem;
        }
        @keyframes appear {
          0% {
            opacity: 0;
            
          }
          100% {
            opacity: 1;
            
          }
        }
        @keyframes disappear {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes lift {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}

export default Nav