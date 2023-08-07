import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PostPage = () => {
  return (
    <>
      <MetaTags title="Post" description="Post page" />

      <h1>PostPage</h1>
      <p>
        Find me in <code>./web/src/pages/PostPage/PostPage.tsx</code>
      </p>
      <p>
        My default route is named <code>post</code>, link to me with `
        <Link to={routes.post()}>Post</Link>`
      </p>
    </>
  )
}

export default PostPage
