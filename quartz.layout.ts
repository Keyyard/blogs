import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
  ],
  afterBody: [
    Component.Backlinks(),
    Component.Darkmode(),
    Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'jackyzha0/quartz',
        // from data-repo-id
        repoId: 'MDEwOlJlcG9zaXRvcnkzODcyMTMyMDg',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDOFxRnmM4B-Xg6',
      }
    })  
  ],
  footer: 
    Component.Footer({
    links: {
      GitHub: "https://github.com/keyyard/blogs"
        },
  })
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [],
  right: [],
}
