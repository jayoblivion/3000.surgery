export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head></head> {/* 🔧 여기에 head 명시 */}
      <body>
        <header style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <a href="/sounds">Sounds</a>
            <a href="/visuals">Visuals</a>
          </nav>
        </header>
        <main style={{ padding: '2rem' }}>{children}</main>
      </body>
    </html>
  );
}
