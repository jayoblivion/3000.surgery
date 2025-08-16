import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: '3000.surgery',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
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
