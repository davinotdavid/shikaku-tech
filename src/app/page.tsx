import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { fetchHeroSection } from "@/contentful/heroSection";
import { draftMode } from "next/headers";

export default async function Home() {
  const heroSection = await fetchHeroSection({
    preview: draftMode().isEnabled,
  });

  return (
    <>
      <section className={styles.staffSection}>
        <div className={`container ${styles.staffSectionContainer}`}>
          <div className={styles.textContainer}>
            <h1>{heroSection.title}</h1>
            <p>{heroSection.description}</p>
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
          <Image
            src={`https:${heroSection.image?.src}`}
            alt={heroSection.image?.alt || ""}
            fill
            style={{ objectFit: "cover", borderRadius: "10px" }}
          />
        </div>
      </section>
    </>
  );
}
