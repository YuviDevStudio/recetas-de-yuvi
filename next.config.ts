import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  experimental: {
    webpackBuildWorker: true,
    mdxRs: true,
  },
  future: { webpack5: true },
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx?$/,
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)