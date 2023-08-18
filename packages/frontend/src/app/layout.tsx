import './globals.css';
import type { Metadata } from 'next';
import SideBarLayout from '@/layouts/sidebarLayout';

export const metadata: Metadata = {
 title: 'Superfluid App',
 description: 'Superfluid tokenized app',
};

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang='en'>
   <body>
    <SideBarLayout>{children}</SideBarLayout>
   </body>
  </html>
 );
}
