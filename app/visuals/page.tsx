export const metadata = {
  title: 'Visuals | 3000',
};
export default function VisualsPage() {
  return (
    <section>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 500, marginBottom: '1rem' }}>
        Visuals
      </h2>

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
    </section>
  )
}
