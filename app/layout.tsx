import '../styles/globals.scss';
import CustomHeader from './components/header/head';

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
          <CustomHeader />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
