import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import '../globals.css';

export const metadata = {
  title: 'Next.js 13 with Clerk',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          formButtonPrimary: 'bg-red-500',
        },
      }}
    >
      <html lang="en">
        <body className="">{children}</body>
      </html>
    </ClerkProvider>
  );
}
