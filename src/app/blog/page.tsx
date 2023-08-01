import { draftMode } from "next/headers";
import { fetchBlogPosts } from "@/contentful/blogPosts";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

export default async function Blog() {
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled });

  return (
    <section className={`container ${styles.section}`}>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map(({ slug, title, shortDescription, image }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>
              <div className={styles.imageContainer}>
                {image && (
                  <Image
                    src={`https:${image.src}`}
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                )}
              </div>
              <h2>{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
