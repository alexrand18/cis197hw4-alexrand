import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types'
import Content from './Content'

const Post = ({
  Posts, changePosts, isTitle, innerReplies, setInnerReplies, onSubmit, atName,
}) => {
  const [nameInput, changeNameInput] = useState('')
  const [postInput, changePostInput] = useState(`${atName}`)
  const appendPostAndReset = (event, posts) => {
    event.preventDefault()
    changePosts([...posts, <Content name={nameInput} post={postInput} />])
    changeNameInput('')
    changePostInput('')
  }
  const embedAndReset = event => {
    event.preventDefault()
    setInnerReplies([...innerReplies, { name: nameInput, post: postInput }])
  }
  const submit = e => {
    if (isTitle) appendPostAndReset(e, Posts, changePosts)
    else {
      onSubmit()
      embedAndReset(e, innerReplies, setInnerReplies)
    }
  }
  return (
    <>
      <div className="card make-post-component">
        {isTitle && (<h5>New Post</h5>)}
        <form className="post-form" onSubmit={e => submit(e)}>
          <div className="row">
            <input required type="text" className="form-control name-input" value={nameInput} onChange={e => changeNameInput(e.target.value)} placeholder="Name..." />
          </div>
          <br />
          <div className="row" style={{ paddingBottom: 25 }}>
            {atName && (<textarea required className="form-control post-input" value={postInput} onChange={e => changePostInput(e.target.value)} />)}
            {atName === '' && (<textarea required className="form-control post-input" value={postInput} onChange={e => changePostInput(e.target.value)} placeholder="Post..." />)}
          </div>
          <div className="row button-row justify-content-left">
            <button type="submit" className="btn btn-primary mb-2 post-button">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

Post.propTypes = {
  Posts: PropTypes.arrayOf(Post),
  changePosts: PropTypes.func,
  isTitle: PropTypes.bool.isRequired,
  innerReplies: PropTypes.arrayOf(Content),
  setInnerReplies: PropTypes.func,
  onSubmit: PropTypes.func,
  atName: PropTypes.string,
}

Post.defaultProps = {
  atName: '',
  onSubmit: () => (0),
  innerReplies: [],
  setInnerReplies: () => ([]),
  Posts: [],
  changePosts: () => ([]),
}

export default Post
