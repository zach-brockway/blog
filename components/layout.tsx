import type { ReactElement } from 'react'

export default function Layout({ children }: { children: ReactElement }) {
	return (
		<>
			<h1>layout</h1>
			<main>{children}</main>
		</>
	)
}
