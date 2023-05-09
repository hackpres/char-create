import Link from 'next/link';

function Nav() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
    </ul>
  )
}

export default Nav