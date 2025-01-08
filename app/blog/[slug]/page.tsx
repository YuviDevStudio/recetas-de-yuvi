import dynamic from "next/dynamic";

export default async function Page({params}: {params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const { default: Post } = await import(`../../content/${slug}.mdx`)

  const BlogMarkdown = dynamic(() => import("../../content/" + slug + ".mdx"));
 
  return (
  <>
  
    <Post />
    <BlogMarkdown />
  </>)
}
 
export function generateStaticParams() {
  return [{ slug: 'new-post' }]
}
 
export const dynamicParams = true