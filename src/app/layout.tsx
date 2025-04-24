import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RootNav from '@/components/RootNav';
import ScrollTopButton from '@/components/ScrollTopButton';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '김찬기 | 포트폴리오',
  description: '프론트앤드 개발자 김찬기의 포트폴리오입니다.',
  openGraph: {
    type: 'website',
    siteName: '김찬기 | 포트폴리오',
    title: '김찬기 | 포트폴리오',
    description: '프론트앤드 개발자 김찬기의 포트폴리오입니다.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        <link
          rel='stylesheet'
          as='style'
          crossOrigin='anonymous'
          href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css'
        />
      </head>
      <body
        className={`${inter.variable} selection:bg-primary antialiased selection:text-white`}
      >
        <div className='fixed top-[-20vw] left-1/2 h-[100vw] w-[120vw] -translate-1/2 rounded-full bg-blue-500 opacity-10 blur-3xl md:top-[-14vw] md:h-[60vw] md:w-[80vw]'></div>
        <div className='relative mx-auto min-h-screen max-w-7xl px-8 py-12 lg:px-12 lg:py-32'>
          <RootNav />
          {children}
          <ScrollTopButton />
        </div>
      </body>
    </html>
  );
}
