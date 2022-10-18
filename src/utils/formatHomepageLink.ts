export function formatHomepageLink(homepage: string | null) {
  if (!homepage) {
    return homepage
  }

  if (homepage.includes('https://') || homepage.includes('http://')) {
    return homepage
  }

  return `https://${homepage}`
}
