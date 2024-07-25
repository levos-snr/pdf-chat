import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { ThemeProvider } from '@/components/theme-provider'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <ClerkProvider>
    <html lang="en">
      <body className="min-h-screen h-screen overflow-hidden flex flex-col"> 
      <ThemeProvider
                 enableSystem
                 attribute='class'
                 defaultTheme='light'
                 disableTransitionOnChange
               >
      {children}
       </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
