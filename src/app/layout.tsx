import type { Metadata, Viewport } from "next"
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"
import { siteDescription, siteName, siteUrl } from "@/lib/site"
import "./globals.css"

const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-sans" })
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400"], variable: "--font-plex-mono" })

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: { default: siteName, template: `%s · ${siteName}` },
	description: siteDescription,
	applicationName: siteName,
	alternates: { canonical: "/" },
	openGraph: {
		type: "website",
		siteName,
		title: siteName,
		description: siteDescription,
		url: "/",
		locale: "en_US",
	},
	twitter: { card: "summary", title: siteName, description: siteDescription },
	robots: { index: true, follow: true },
}

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#fbfcfd" },
		{ media: "(prefers-color-scheme: dark)", color: "#101317" },
	],
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
