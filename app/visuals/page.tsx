export default function VisualsPage() {
  return (
    <main>
      <h1>Visuals</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <img src="/photo1.jpg" alt="사진1" style={{ width: '100%' }} />
        <img src="/photo2.jpg" alt="사진2" style={{ width: '100%' }} />
      </div>
    </main>
  );
}
