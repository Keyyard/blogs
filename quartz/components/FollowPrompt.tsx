import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const FollowPrompt: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <div>
      Enjoyed this post? Never miss out on future posts by{" "}
      <a
        href="https://follow.it/keyyard-digital-garden?leanpub"
        target="_blank"
        rel="noopener"
        style="color:var(--secondary);font-weight:600;text-decoration:underline;"
      >
        following me
      </a>
      .
    </div>
  )
}

export default (() => FollowPrompt) satisfies QuartzComponentConstructor
