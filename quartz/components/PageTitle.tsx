import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <span class="title-desktop">{title}</span>
        <span class="title-mobile">Keyyard blogs</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.title-mobile {
  display: none;
}

.title-desktop {
  display: inline;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 1.5rem;
  }
  
  .title-mobile {
    display: inline;
  }
  
  .title-desktop {
    display: none;
  }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
