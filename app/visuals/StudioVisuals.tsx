// app/visuals/StudioVisuals.tsx
import {client} from '../../lib/sanity'

type Visual = {
  _id: string
  title: string
  url: string
  publishedAt?: string
}

function toYouTubeEmbed(url: string) {
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtube.com') || u.hostname.includes('youtu.be')) {
      let id = ''
      if (u.hostname.includes('youtu.be')) {
        id = u.pathname.slice(1)
      } else {
        id = u.searchParams.get('v') || ''
      }
      if (id) return `https://www.youtube.com/embed/${id}`
    }
  } catch {}
  return null
}

function toVimeoEmbed(url: string) {
  // https://vimeo.com/123456 -> https://player.vimeo.com/video/123456
  try {
    const u = new URL(url)
    if (u.hostname.includes('vimeo.com')) {
      const id = u.pathname.split('/').filter(Boolean)[0]
      if (id) return `https://player.vimeo.com/video/${id}`
    }
  } catch {}
  return null
}

export default async function StudioVisuals() {
  const visuals = await client.fetch<Visual[]>(
    `*[_type=="visual"]|order(coalesce(publishedAt, _createdAt) desc){
      _id, title, url, publishedAt
    }`
  )

  if (!visuals?.length) return null

  return (
    <section style={{marginTop: '3rem'}}>
      <hr style={{marginBottom: '1.5rem'}} />
      <h2 style={{fontSize: '1.25rem', marginBottom: '1rem'}}>From Studio</h2>

      <div style={{display: 'grid', gap: '1.5rem'}}>
        {visuals.map((item) => {
          const yt = toYouTubeEmbed(item.url)
          const vm = toVimeoEmbed(item.url)
          const embed = yt || vm
          return (
            <article key={item._id} style={{border: '1px solid #ddd', padding: '1rem', borderRadius: 8}}>
              <h3 style={{marginBottom: '.5rem'}}>{item.title}</h3>
              {embed ? (
                <div style={{position: 'relative', paddingTop: '56.25%'}}>
                  <iframe
                    src={embed}
                    title={item.title}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{position:'absolute', inset:0, width:'100%', height:'100%', border:0}}
                  />
                </div>
              ) : (
                <a href={item.url} target="_blank" rel="noreferrer" style={{color:'#06f'}}>열기</a>
              )}
              {item.publishedAt && (
                <p style={{color:'#666', marginTop:'.5rem'}}>
                  {new Date(item.publishedAt).toLocaleDateString('ko-KR')}
                </p>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
