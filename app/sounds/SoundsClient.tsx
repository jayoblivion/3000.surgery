'use client';

import { useState } from 'react';

export default function Sounds() {
  const [tab, setTab] = useState<'mixtape' | 'demo' | 'remix'>('mixtape');

  return (
    <main style={{ padding: '2rem', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '2rem' }}>Sounds</h1>

      {/* 탭 메뉴 */}
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '2rem',
        paddingBottom: '0.5rem'
      }}>
        {['mixtape', 'demo', 'remix'].map((key) => (
          <button
            key={key}
            onClick={() => setTab(key as 'mixtape' | 'demo' | 'remix')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              fontSize: '1rem',
              fontWeight: tab === key ? 600 : 400,
              color: tab === key ? '#000' : '#888',
              borderBottom: tab === key ? '2px solid #000' : '2px solid transparent',
              cursor: 'pointer',
              transition: 'color 0.3s ease, border-bottom 0.3s ease'
            }}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>

      {/* MIXTAPE 콘텐츠 */}
      {tab === 'mixtape' && (
        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>Mixtape</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/nNeg1gH8LiI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
            }}
          />
        </section>
      )}

      {/* DEMO 콘텐츠 */}
      {tab === 'demo' && (
        <section>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>Demo</h2>

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2101820277&color=%2383b4df&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem',
            }}
          />

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1690796700&color=%23b4acc4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem',
            }}
          />

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1651851801&color=%23730404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem',
            }}
          />

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1633062432&color=%23808080&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem',
            }}
          />

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1438222603%3Fsecret_token%3Ds-XMW2jCvfKIy&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem',
            }}
          />

          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2101827831&color=%23ececec&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            style={{
              borderRadius: '8px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
              marginBottom: '2rem',
            }}
          />
        </section>
      )}

      {/* REMIX 콘텐츠 */}
      {/* Remix 콘텐츠 */}
{tab === 'remix' && (
  <section>
    <h2 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>Remix</h2>

    {/* only kryptonite remix 카드 */}
    <div style={{
      borderRadius: '8px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      marginBottom: '3rem',
      padding: '1rem',
      backgroundColor: '#f9f9f9'
    }}>
      <h3 style={{
        fontSize: '1.125rem',
        fontWeight: 600,
        marginBottom: '1.25rem',
        color: '#111',
        lineHeight: '1.6'
      }}>
        only kryptonite<br />
        <span style={{ fontWeight: 400 }}>
          (don toliver, doja cat - lose my mind [From F1® The Movie] remix)
        </span>
      </h3>

      {/* YouTube */}
      <div style={{ marginBottom: '1.5rem' }}>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/BdMwi-is8Bw"
          title="only kryptonite remix (YouTube)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            borderRadius: '8px',
            width: '100%',
            boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
          }}
        />
      </div>

      {/* SoundCloud */}
      <iframe
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/jiyo3000/onlykryptonite&color=%23333333&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        style={{
          borderRadius: '8px',
          width: '100%',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
        }}
      />
    </div>
  </section>
)}
    </main>
  );
}
