
import { Router, Route,Set } from '@redwoodjs/router'

import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BlogLayout}>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/post/{id:Int}" page={PostPage} name="post" />
      <Route path="/newPost" page={NewPostPage} name="newPost" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
