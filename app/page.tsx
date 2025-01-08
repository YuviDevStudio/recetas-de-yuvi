import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog/new-post">first post</Link>
            <Link href="/blog/second-post">second post</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home