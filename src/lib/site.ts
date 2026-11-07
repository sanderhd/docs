export const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Docs"
export const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || `Documentation for ${siteName}.`
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "")
