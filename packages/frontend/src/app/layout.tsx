import './globals.css'
import type { Metadata } from 'next'
import SideBarLayout from '@/layouts/sidebarLayout'
import { ThemeProvider } from '@mui/material'
import { lightTheme } from './theme/themes'

export const metadata: Metadata = {
  title: 'Superfluid App',
  description: 'Superfluid tokenized app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SideBarLayout>
        {children}
      </SideBarLayout>
    </html>
  )
}
