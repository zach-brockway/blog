import nextMDX from '@next/mdx'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import remarkMath from 'remark-math'
import remarkToc from 'remark-toc'


/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	output: 'standalone',
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}


const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		rehypePlugins: [
			[rehypeSlug, {}],
			[rehypeAutolinkHeadings, {}],
			[rehypeHighlight, {}],
			[rehypeKatex, {}],
		],
		remarkPlugins: [
			remarkToc,
			remarkMath,
		],
		providerImportSource: "@mdx-js/react",
	},
})


export default withMDX(nextConfig)
