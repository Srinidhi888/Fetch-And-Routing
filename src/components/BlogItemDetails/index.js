// Write your JS code here
import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Link} from 'react-router-dom'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogItemData: {}}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
    }
    this.setState({blogItemData: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, blogItemData} = this.state
    const {title, imageUrl, content, avatarUrl, author, topic} = blogItemData
    const a = (
      <div className="lt">
        <h1 className="hed">{title}</h1>
        <div className="box">
          <img className="ima" src={avatarUrl} alt="avatar" />
          <p>{author}</p>
        </div>
        <img className="img" src={imageUrl} alt={title} />
        <p>{content}</p>
      </div>
    )
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          a
        )}
      </div>
    )
  }
}

export default BlogItemDetails
