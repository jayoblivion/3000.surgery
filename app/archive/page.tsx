export const dynamic = 'force-dynamic'
export const revalidate = 0

import Link from 'next/link'
import { client } from '../../lib/sanity'
import PortableBody from '@/components/PortableBody'

type Post = {
  _id: string
  title: string
  slug?: { current: string }
  publishedAt?: string
  body?: any
}

async function getPosts(): Promise<Post[]> {
  const query = `*[_type=="post"] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    body
  }`
  return await client.fetch(query)
}

export default async function ArchivePage() {
  try {
    const posts = await getPosts()

    return (
      <section
        style={{
          padding: '2rem',
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 600,
            marginBottom: '2rem',
          }}
        >
          Archive
        </h1>

        {posts.length === 0 ? (
          <p style={{ color: '#666' }}>
            이따 봐요.
          </p>
        ) : (
          <ul
            style={{
              display: 'grid',
              gap: '2rem',
              padding: 0,
              listStyle: 'none',
            }}
          >
            {posts.map((p) => (
              <li
                key={p._id}
                style={{
                  border: '1px solid #ddd',
                  padding: '1.5rem',
                  borderRadius: 12,
                  background: '#fff',
                }}
              >
                <h2
                  style={{
                    margin: '0 0 0.5rem 0',
                    fontSize: '1.25rem',
                  }}
                >
                  <Link
                    href={`/archive/${p.slug?.current ?? ''}`}
                    style={{ textDecoration: 'underline' }}
                  >
                    {p.title || '(제목 없음)'}
                  </Link>
                </h2>

                {p.publishedAt && (
                  <div
                    style={{
                      color: '#888',
                      fontSize: '0.9rem',
                      marginBottom: '1rem',
                    }}
                  >
                    {new Date(p.publishedAt).toLocaleDateString('ko-KR')}
                  </div>
                )}

                {p.body && (
                  <div style={{ marginTop: '1rem' }}>
                    <PortableBody value={p.body} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    )
  } catch (err: any) {
    return (
      <pre
        style={{
          whiteSpace: 'pre-wrap',
          color: 'crimson',
          background: '#fff5f5',
          padding: '1rem',
        }}
      >
        Archive 오류: {err?.message || String(err)}
      </pre>
    )
  }
}
