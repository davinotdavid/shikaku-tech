import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

const navLinksLeft = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const navLinksRight = [
  { href: "/sign-in", label: "Sign In" },
  { href: "/shop", label: "Shop" },
  { href: "/cart", label: "", icon: "TODO" },
];

export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <Link href="/">
        <Image src="./shikaku-logo.svg" alt="Shikaku Logo" width={110} height={32} />
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinksLeft.map(({ href, label }) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        <ul className={styles.navList}>
          {navLinksRight.map(({ href, label, icon }) => (
            !icon &&
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
