import { ClerkProvider } from '@clerk/nextjs';
import Header from '../components/Header';

export const metadata = {
  title: 'Next.js 13 with Clerk',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <Header />
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
