import type { Metadata } from "next"
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader, { siteName } from "@/components/SiteHeader"
import "./globals.css"

const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-sans" })
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-plex-mono" })

export const metadata: Metadata = {
	title: siteName,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" id="top" className={`${sans.variable} ${mono.variable}`}>
			<body className="flex min-h-dvh flex-col bg-bg font-sans text-fg">
				<SiteHeader />
				<main className="flex-1">{children}</main>
				<SiteFooter />
			</body>
		</html>
	)
}
