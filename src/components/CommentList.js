import React from 'react'
import Comment from './Comment'

const CommentList = (props) => {

  const commentNodes = props.data.map((comment, index)=> {
    return(<Comment authorProp={comment.author} key={index}>{comment.body}</Comment>)
  })


  if (props.data.length < 1){
    return <div className="animation-bars">Loading...<div className="lds-facebook"><div></div><div></div><div></div></div></div>
  }
  else{
  return (
    
    <div className="comment-list">
      {commentNodes}
    </div>
  )
}
}

export default CommentList
