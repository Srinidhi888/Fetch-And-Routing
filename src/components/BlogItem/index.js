// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details
  return (
    <Link to={`/blogs/${id}`}>
      <li className="box list route">
        <img className="ima-1" src={imageUrl} alt={title} />
        <div>
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="box avt">
            <img className="ima" src={avatarUrl} alt={author} />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
