import { MetadataRoute } from 'next'

const baseUrl = 'https://www.versotechsolutions.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/services', '/products', '/portfolio', '/careers', '/contact']

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
