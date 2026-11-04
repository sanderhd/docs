"use client"

export default function Search() {
	return (
		<form role="search" className="relative w-full max-w-72">
			<svg
				aria-hidden
				viewBox="0 0 16 16"
				className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
			>
				<circle cx="7" cy="7" r="4.5" />
				<path d="m10.5 10.5 3 3" />
			</svg>
			<input
				type="search"
				aria-label="Search the documentation"
				placeholder="Search..."
				className="peer h-9 w-full rounded-md border border-line bg-surface pr-14 pl-8.5 text-sm text-fg placeholder:text-muted transition-colors hover:border-muted/40 focus:border-accent focus:outline-none [&::-webkit-search-cancel-button]:hidden"
			/>
			<kbd className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 rounded border border-line bg-bg px-1.5 font-mono text-[11px] text-muted peer-focus:opacity-0 max-sm:hidden">
				Ctrl K
			</kbd>
		</form>
	)
}
