/**
 * Created by jwdn on 2016/12/22.
 */
import React, { PropTypes } from 'react';

const Posts = ({posts}) => {
  return (
    <ul>
      {posts.map((post,i)=>
        <li key={i}>{post.title}</li>
      )}
    </ul>
  )
}

// const Posts = ({posts}) => (
//   <ul>
//     {posts.map((post, i) =>
//       <li key={i}>{post.title}</li>
//     )}
//   </ul>
// )

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts