import nextMDX from '@next/mdx'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};


const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [
      [rehypeKatex, {macros: {"\\f": "#1f(#2)"}}]
    ],
    remarkPlugins: [
      remarkMath
    ],
    providerImportSource: "@mdx-js/react",
  },
});


export default withMDX(nextConfig);
