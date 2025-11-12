// components/Header/Header.tsx
import Link from 'next/link';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" className={css.headerLink}>
        NoteHub
      </Link>
      <ul className={css.navigation}>
        <li className={css.navigationItem}>
          <Link href="/notes" className={css.navigationLink}>Notes</Link>
        </li>
        <li className={css.navigationItem}>
          <Link href="/about" className={css.navigationLink}>About</Link>
        </li>
        <li className={css.navigationItem}>
          <Link href="/profile" className={css.navigationLink}>Profile</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
