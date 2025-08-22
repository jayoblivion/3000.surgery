// app/visuals/page.tsx
import StudioVisuals from './StudioVisuals'

export const metadata = {
  title: 'Visuals | 3000',
};

export default function VisualsPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 600, marginBottom: '2rem' }}>
        Visuals
      </h1>

      {/* 기존 하드코딩된 카드 */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%', // 16:9 비율
          borderRadius: '8px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <iframe
          src="https://www.youtube.com/embed/uHdTfRCa4FU?start=499"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* 스튜디오에서 불러온 카드들 */}
      <StudioVisuals />
    </main>
  );
}
