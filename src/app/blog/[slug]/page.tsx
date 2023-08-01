import { Metadata } from "next";
import { fetchBlogPost, fetchBlogPosts } from "@/contentful/blogPosts";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import RichText from "@/contentful/RichText";
import styles from "./styles.module.css";

interface BlogPostPageParams {
  slug: string;
}

interface BlogPostPageProps {
  params: BlogPostPageParams;
}

export async function generateStaticParams(): Promise<BlogPostPageParams[]> {
  const blogPosts = await fetchBlogPosts({ preview: false });

  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const blogPost = await fetchBlogPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!blogPost) {
    return notFound();
  }

  return {
    title: blogPost.title,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blogPost = await fetchBlogPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!blogPost) {
    return notFound();
  }

  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.imageContainer}>
        {blogPost.image && (
          // Using Contentful Images API with srcSet
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={blogPost.image.src}
            srcSet={`${blogPost.image.src}?w=550 1x, ${blogPost.image.src} 2x`}
            width={550}
            height={300}
            alt={blogPost.image.alt}
          />
        )}
      </div>

      <div className={styles.textContainer}>
        <h1>{blogPost.title}</h1>

        <RichText document={blogPost.body} />
      </div>
    </section>
  );
}
