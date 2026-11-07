import { siteName } from "@/lib/site"

export default function SiteFooter() {
	return (
		<footer className="border-t border-line">
			<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-6 text-sm text-muted sm:px-6">
				<p>
					© {new Date().getFullYear()} {siteName}
				</p>
				<a href="#top" className="transition-colors hover:text-fg">
					Back to top
				</a>
			</div>
		</footer>
	)
}
