import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.staffSection}>
        <div className={`container ${styles.staffSectionContainer}`}>
          <div className={styles.textContainer}>
            <h1>Staff</h1>
            <p>
              Staff management tools to help simplify payroll, easily communicate, manage your team, and empower them — all in one place.
            </p>
          </div>
          <div className={styles.staffSectionLinksContainer}>
            <Link href="#">Payroll →</Link>
            <Link href="#">Shifts →</Link>
            <Link href="#">Team Communication →</Link>
            <Link href="#">Team Management →</Link>
          </div>
        </div>
      </section>

      <section className={`container ${styles.heroImageSectionContainer}`}>
        <div>
          <Image src="https://images.ctfassets.net/2d5q1td6cyxq/7uivzDqxnw7aGJvUbL0v9W/34b18fe5a8bff1c520425b86065684ab/PD04326_-_staff_hero_cafe.png?w=3096&h=1722&fm=webp&q=85&fit=scale" alt="" fill />
        </div>
      </section>
    </>
  )
}
