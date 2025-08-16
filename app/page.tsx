// app/page.tsx
export const metadata = {
  title: '3000 Surgery',
  description: '3000 Surgery',
  icons: {
    icon: '/favicon.png',
  },
};
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/sounds');
}
