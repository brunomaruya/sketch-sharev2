import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import '../clerkStyles.css';
import image from '../../public/images/image.avif';
import { Image } from 'next/dist/client/image-component';

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
      }}
    >
      <html lang="en">
        <body>
          <div>{children}</div>
          <div>
            <Image src={image} alt="" />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
