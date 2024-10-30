import { i18n } from "../i18n"
import { FullSlug, joinSegments, pathToRoot } from "../util/path"
import { JSResourceToScriptElement } from "../util/resources"
import { googleFontHref } from "../util/theme"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Head: QuartzComponent = ({ cfg, fileData, externalResources }: QuartzComponentProps) => {
    const titleSuffix = cfg.pageTitleSuffix ?? ""
    const title =
      (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix
    const description =
      fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description
    const { css, js } = externalResources

    const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
    const path = url.pathname as FullSlug
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)

    const iconPath = joinSegments(baseDir, "static/icon.png")
    const ogImagePath = `https://${cfg.baseUrl}/static/og-image.png`

    return (
<head>
  <title>{title}</title>
  <meta charSet="utf-8" />
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z3K6D9SXF4"></script>
  <script>
    {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Z3K6D9SXF4');`}
  </script>

  {/* Fonts Caching and Preconnect */}
  {cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href={googleFontHref(cfg.theme)} />
    </>
  )}

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href={iconPath} />
  <meta name="description" content={description} />
  <meta name="generator" content="Quartz" />

  {/* Canonical URL for SEO */}
  <link rel="canonical" href={`${cfg.baseUrl}/${slug}`} />

  {/* Open Graph (OG) Tags for Social Sharing */}
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={`${cfg.baseUrl}/${slug}`} />
  <meta property="og:site_name" content="Your Blog Name" />
  {cfg.baseUrl && <meta property="og:image" content={ogImagePath} />}
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="675" />
  <meta property="og:image:type" content="image/png" />
  <meta property="article:modified_time" content={new Date().toISOString()} />

  {/* Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImagePath} />

  {/* Structured Data (Schema Markup) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${cfg.baseUrl}/${slug}`
      },
      "headline": title,
      "image": ogImagePath,
      "author": {
        "@type": "Person",
        "name": "Keyyard"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Keyyard's Growth Blog",
        "logo": {
          "@type": "ImageObject",
          "url": `https://${cfg.baseUrl}/static/og-image.png`
        }
      },
      "datePublished": "2024-10-30T00:00:00+00:00",
      "dateModified": new Date().toISOString(),
      "description": description
    })}
  </script>

  {/* Additional CSS and JS */}
  {css.map((href) => (
    <link key={href} href={href} rel="stylesheet" type="text/css" spa-preserve />
  ))}
  {js
    .filter((resource) => resource.loadTime === "beforeDOMReady")
    .map((res) => JSResourceToScriptElement(res, true))}
</head>
    )
  }

  return Head
}) satisfies QuartzComponentConstructor
