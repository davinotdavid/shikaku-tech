import { draftMode } from 'next/headers'
import { fetchBlogPosts } from '@/contentful/blogPosts'
import Link from 'next/link'

export default async function Blog() {
  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled })

  return (
    <section>
      <ul>
        {blogPosts.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
