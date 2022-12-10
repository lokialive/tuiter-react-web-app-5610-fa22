import PostSummaryItem from './PostSummaryItem'
import Posts from './Posts.json'
import React from 'react'

const PostSummaryList = () => {
  let Posts = [
    {
      topic: 'Web Development',
      userName: 'ReactJS',
      time: '2h',
      title:
        'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
      image: '/tuiter/images/react.png',
    },
    {
      topic: '',
      userName: 'JavaScript',
      time: '1 day',
      title:
        'JavaScript is programming language that can run on browsers as well as desktops',
      image: '/tuiter/images/js.png',
      tweets: '123K',
    },
    {
      topic: 'Web Development',
      userName: '',
      title: 'jQuery',
      time: 'last week',
      image: '/tuiter/images/jquery.png',
      tweets: '122K',
    },
    {
      topic: 'Web Development',
      userName: 'NodeJS',
      title: '',
      time: 'last month',
      image: '/tuiter/images/nodejs.png',
      tweets: '120K',
    },
  ]

  return (
    <ul className="list-group">
      {Posts.map((post) => (
        <PostSummaryItem post={post} />
      ))}
    </ul>
  )
}
export default PostSummaryList
