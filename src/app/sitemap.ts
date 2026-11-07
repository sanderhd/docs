import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

const routes = ["/"]

export default function sitemap(): MetadataRoute.Sitemap {
	return routes.map((route) => ({
		url: `${siteUrl}${route === "/" ? "" : route}`,
		lastModified: new Date(),
	}))
}
