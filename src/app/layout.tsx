import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import './globals.css';

export const metadata: Metadata = { title: 'Budi Sugiarto | Professional & Academic Portfolio', description: 'Professional and academic portfolio of Budi Sugiarto.' };
const links = [['About', '/about'], ['Experience', '/experience'], ['Projects', '/projects'], ['Academia', '/academia'], ['Insights', '/insight']];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><header className="shell flex items-center justify-between py-7"><Link href="/" className="font-bold tracking-tight">BS<span className="text-[#8aa83b]">.</span></Link><nav className="hidden gap-7 text-sm text-[#61706b] md:flex">{links.map(([label, href]) => <Link key={href} href={href} className="transition-colors hover:text-[#16463b]">{label}</Link>)}</nav><Link href="/contact" className="flex items-center gap-2 rounded-full bg-[#16463b] px-4 py-2 text-sm font-medium text-white">Let&apos;s talk <ArrowUpRight size={15} /></Link></header>{children}<footer className="shell flex flex-col justify-between gap-3 border-t border-[#d8ddd7] py-8 text-sm text-[#61706b] sm:flex-row"><span>© 2025 Budi Sugiarto</span><span>Built with curiosity & care.</span></footer></body></html>;
}