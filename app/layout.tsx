import '../styles/globals.scss';
import head from './components/header/head';

export const metadata = {
  title: 'Next.js 13 experimental',
  description: 'Next.js experimental',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='container'>
          <head />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
