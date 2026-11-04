import Link from "next/link"
import Search from "./Search"

export const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Docs"

export function Logo() {
	return (
		<svg aria-hidden viewBox="0 0 20 20" className="size-5 text-accent" fill="none">
			<rect x="3" y="2.5" width="14" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
			<path d="M6.5 7h7M6.5 10h7M6.5 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
		</svg>
	)
}

export default function SiteHeader() {
	return (
		<header className="sticky top-0 z-10 border-b border-line bg-bg/85 backdrop-blur-sm">
			<div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
				<Link href="/" className="flex shrink-0 items-center gap-2 font-semibold tracking-tight">
					<Logo />
					{siteName}
				</Link>
				<Search />
			</div>
		</header>
	)
}
