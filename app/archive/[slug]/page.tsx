export const dynamic = 'force-dynamic'

import {client} from '../../../sanity/lib/client'
import {PortableText} from '@portabletext/react'
import type {Metadata} from 'next'

type Post = {
  _id: string
  title?: string
  slug?: {current: string}
  publishedAt?: string
  body?: any
}

type Params = { slug: string }

export async function generateMetadata(
  { params }: { params: Params }
): Promise<Metadata> {
  const post = await getPost(params.slug)
  return {
    title: post?.title || 'Post',
    description: post?.title ? `${post.title} - 3000.surgery` : 'Post - 3000.surgery',
  }
}

async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type=="post" && slug.current==$slug][0]{
    _id, title, slug, publishedAt, body
  }`
  return await client.fetch(query, { slug })
}

export default async function PostPage({ params }: { params: Params }) {
  try {
    const post = await getPost(params.slug)

    if (!post) {
      return <p style={{color:'#666'}}>게시물을 찾을 수 없습니다.</p>
    }

    return (
      <article>
        <h1 style={{fontSize:'2rem', marginBottom:'.5rem'}}>{post.title || '(제목 없음)'}</h1>
        {post.publishedAt && (
          <p style={{ color: '#666', marginBottom: '1rem' }}>
            {new Date(post.publishedAt).toLocaleDateString('ko-KR')}
          </p>
        )}
        {post.body ? (
          <PortableText value={post.body} />
        ) : (
          <p style={{ color: '#666' }}>(본문 없음)</p>
        )}
      </article>
    )
  } catch (err: any) {
    return (
      <pre style={{whiteSpace:'pre-wrap', color:'crimson', background:'#fff5f5', padding:'1rem'}}>
        Post 오류: {err?.message || String(err)}
      </pre>
    )
  }
}
