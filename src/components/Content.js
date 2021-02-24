import React, { useState } from 'react'
import * as Icons from 'react-bootstrap-icons'
import PropTypes from 'prop-types'
import Ticker from './Ticker'
import Post from './Post'

const Content = ({ name, post }) => {
  const [innerReplies, setInnerReplies] = useState([])
  const [innerPost, setInnerPost] = useState('')
  return (
    <>
      <div className="row">
        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="d-flex justify-content-between">
            <p className="h5 text-weight-bolder nametag">{name}</p>
            <span className="ticker-button"><Ticker /></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <span className="post-content">{post}</span>
        </div>
      </div>
      <div className="row reply-row">
        <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="reply-row">
            <Icons.ChatSquare onClick={e => setInnerPost(<Post isTitle={false} innerReplies={innerReplies} setInnerReplies={setInnerReplies} onSubmit={() => setInnerPost('')} atName={`@${name}`} />)} />
            <p className="h7 text-weight-lighter text-muted" style={{ marginLeft: 10 }}>Reply</p>
          </div>
        </div>
      </div>
      <div style={{ margin: 10 }}>{innerPost}</div>
      {innerReplies.map(obj => (
        <div style={{ marginLeft: 10, marginBottom: 10, borderLeft: 'solid', borderColor: 'lightgray' }} key={`content ${obj.name}${obj.post}`}>
          <Content name={obj.name} post={obj.post} />
        </div>
      ))}
    </>
  )
}

Content.propTypes = {
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
}

export default Content
