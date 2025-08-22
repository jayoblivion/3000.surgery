import Link from 'next/link'
import {client} from '../../sanity/lib/client'

type Post = {
  _id: string
  title: string
  slug?: {current: string}
  publishedAt?: string
}

async function getPosts(): Promise<Post[]> {
  const query = `*[_type=="post"]|order(publishedAt desc){
    _id, title, slug, publishedAt
  }`
  return await client.fetch(query)
}

export const revalidate = 0

export default async function ArchivePage() {
  try {
    const posts = await getPosts()

    return (
      <section>
        <h1 style={{fontSize:'2rem', marginBottom:'1rem'}}>Archive</h1>
        {posts.length === 0 ? (
          <p style={{color:'#666'}}>아직 게시물이 없습니다. /studio에서 Post를 만들고 Publish 해주세요.</p>
        ) : (
          <ul style={{display:'grid', gap:'1rem', padding:0, listStyle:'none'}}>
            {posts.map((p) => (
              <li key={p._id} style={{border:'1px solid #ddd', padding:'1rem', borderRadius:8}}>
                <h2 style={{margin:'0 0 .5rem 0'}}>
                  <Link href={`/archive/${p.slug?.current}`} style={{textDecoration:'underline'}}>
                    {p.title || '(제목 없음)'}
                  </Link>
                </h2>
                {p.publishedAt && (
                  <div style={{color:'#666'}}>
                    {new Date(p.publishedAt).toLocaleDateString('ko-KR')}
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
      <pre style={{whiteSpace:'pre-wrap', color:'crimson', background:'#fff5f5', padding:'1rem'}}>
        Archive 오류: {err?.message || String(err)}
      </pre>
    )
  }
}
