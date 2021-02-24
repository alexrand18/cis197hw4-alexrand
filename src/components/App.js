import React, { useState} from 'react'
import WelcomeBar from './welcomeBar.js'
import Post from './Post'
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

const App = () => {
  const [posts, changePosts] = useState([])
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-md-3 col-lg-3 col-xl-3"/>
        <div className="col col-md-6 col-lg-6 col xl-6">
          <div className="row title-row justify-content-center"><WelcomeBar /></div>
          <Post atName="" Posts={posts} isTitle changePosts={changePosts} />
          <br />
          {posts.map((post, i) => (
            <>
              <div className="card card-content" key={`post${post}`}>{post}</div>
              <br />
            </>
          ))}
        </div>
        <div className="col col-md-3 col-lg-3 col-xl-3" />
      </div>
    </div>
  )
}
export default App
