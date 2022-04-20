import { GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'


interface Props {
  posts: {
    id: number
    title: string
    author: {
      id: number
      name: string
      email: string
    }
  }[]
}

export default function Blog({ posts }: Props) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.title}`}>
          <a className="group">
            <div className="border border-slate-300 shadow-md transition group-hover:shadow-xl p-4">
              <h2 className="text-lg font-bold">{post.title}</h2>
              <p>{post.author.name}</p>
              <p>{post.author.email}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const posts = await fetch('http://localhost:8000/feed').then(res => res.json())
  return {
    props: {
      posts,
    },
  }
}
