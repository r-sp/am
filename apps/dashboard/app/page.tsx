import type { Metadata } from 'next';
import IconSquircle from '@repo/ui/icons/squircle';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Next.js',
};

export default function Home() {
  return (
    <>
      <IconSquircle color={{ dark: '#008040', light: '#4CE08A' }} size={32} />
      <h1>Dashboard</h1>
    </>
  );
}
