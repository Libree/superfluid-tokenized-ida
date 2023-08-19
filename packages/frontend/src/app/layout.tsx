import './globals.css';
import type { Metadata } from 'next';
import SideBarLayout from '@/layouts/sidebarLayout';
import { WagmiConfig } from 'wagmi';
import { wagmiConfig } from '../../wagmi.config';

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
    <WagmiConfig config={wagmiConfig}>
      <SideBarLayout>{children}</SideBarLayout>
    </WagmiConfig>
   </body>
  </html>
 );
}
