// app/sounds/StudioSounds.tsx
export const revalidate = 0
export const dynamic = 'force-dynamic'

import {client} from '@/lib/sanity'

type Sound = {
  _id: string
  title: string
  url: string
  publishedAt?: string
  section: 'demo' | 'mixtape' | 'remix'
}

function toYouTubeEmbed(url: string) {
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtube.com') || u.hostname.includes('youtu.be')) {
      let id = ''
      if (u.hostname.includes('youtu.be')) id = u.pathname.slice(1)
      else id = u.searchParams.get('v') || ''
      if (id) return `https://www.youtube.com/embed/${id}`
    }
  } catch {}
  return null
}

function toSoundCloudEmbed(url: string) {
  try {
    const encoded = encodeURIComponent(url)
    return `https://w.soundcloud.com/player/?url=${encoded}&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`
  } catch {}
  return null
}

export default async function StudioSounds() {
  const sounds = await client.fetch<Sound[]>(
    `*[_type=="sound"]|order(coalesce(publishedAt, _createdAt) desc){
      _id, title, url, publishedAt, section
    }`
  )

  if (!sounds?.length) return null

  // 섹션별로 묶기 (데모, 믹스테입, 리믹스 순서)
  const order = ['demo','mixtape','remix'] as const
  const grouped = order.map(sec => ({
    section: sec,
    items: sounds.filter(s => s.section === sec)
  })).filter(g => g.items.length)

  return (
    <section style={{marginTop: '3rem'}}>
      <hr style={{marginBottom: '1.5rem'}} />
      <h2 style={{fontSize: '1.25rem', marginBottom: '1rem'}}>From Studio</h2>

      {grouped.map(group => (
        <div key={group.section} style={{marginTop:'1.5rem'}}>
          <h3 style={{fontSize:'1.1rem', marginBottom:'.75rem'}}>
            {group.section === 'demo' ? '데모'
             : group.section === 'mixtape' ? '믹스테입'
             : '리믹스'}
          </h3>

          <div style={{display: 'grid', gap: '1.5rem'}}>
            {group.items.map((item) => {
              const yt = toYouTubeEmbed(item.url)
              const sc = toSoundCloudEmbed(item.url)
              return (
                <article key={item._id} style={{border: '1px solid #ddd', padding: '1rem', borderRadius: 8}}>
                  <h4 style={{marginBottom: '.5rem'}}>{item.title}</h4>
                  {yt ? (
                    <div style={{position: 'relative', paddingTop: '56.25%'}}>
                      <iframe
                        src={yt}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{position:'absolute', inset:0, width:'100%', height:'100%', border:0}}
                      />
                    </div>
                  ) : sc ? (
                    <iframe
                      width="100%"
                      height="166"
                      scrolling="no"
                      frameBorder={0}
                      allow="autoplay"
                      src={sc}
                      title={item.title}
                    />
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
        </div>
      ))}
    </section>
  )
}
