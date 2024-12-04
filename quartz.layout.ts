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
    Component.CommonNinjaComments()
    // Component.Comments({
    //   provider: 'giscus',
    //   options: {
    //     // from data-repo
    //     repo: 'keyyard/blogs',
    //     // from data-repo-id
    //     repoId: 'R_kgDONBaYDw',
    //     // from data-category
    //     category: 'Announcements',
    //     // from data-category-id
    //     categoryId: 'DIC_kwDONBaYD84CjdXM',
    //     reactionsEnabled: false,
    //     inputPosition: 'top',
    //     themeUrl: "https://keyyard.github.io/blogs/static/giscus",
    //     lightTheme: "light",
    //     darkTheme: "dark"
    //       }
    // })  
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
