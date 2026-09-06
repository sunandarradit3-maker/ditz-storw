import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DiTz Store — Cyber Security & Digital Engineering',
  description: 'Enterprise cyber security, web engineering and application development by DiTz Store.',
  metadataBase: new URL('https://ditz-store-portofolio-c1qe.vercel.app'),
  openGraph: { title: 'DiTz Store — Digital Defense & Engineering', description: 'Engineering secure digital systems for ambitious organizations.', type: 'website' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
