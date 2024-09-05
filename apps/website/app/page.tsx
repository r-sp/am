import type { Metadata } from 'next';
import IconCircle from '@repo/ui/icons/circle';

export const metadata: Metadata = {
  title: 'Website',
  description: 'Next.js',
};

export default function Home() {
  return (
    <>
      <IconCircle color={{ dark: '#0074E0', light: '#4EC0ED' }} size={32} />
      <h1>Home</h1>
    </>
  );
}
