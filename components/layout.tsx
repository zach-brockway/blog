import type { ReactElement } from 'react'
import styles from '../styles/layout.module.scss'

export default function Layout(
	{ children, meta }:
	{
		children: ReactElement;
		meta: {
			title: string;
			date: string;
			excerpt: string;
		}
	}) {
	return (
		<article className={styles.article}>
			<h1>{meta.title}</h1>
			<em>{meta.excerpt}</em> &mdash; <time>{meta.date}</time>
			<hr/>
			<main>{children}</main>
		</article>
	)
}
