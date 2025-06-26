import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { QueryClientProviderWrapper } from '@/components/providers/query-client-provider';
import { Toast } from '@/components/ui/toast';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Profile Editor App',
  description: 'A simple profile editor with public viewer built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <QueryClientProviderWrapper>
          <div className='min-h-screen bg-gray-50'>
            {/* Navigation */}
            <nav className='bg-white shadow-sm border-b'>
              <div className='max-w-4xl mx-auto px-4 py-4'>
                <div className='flex items-center justify-between'>
                  <h1 className='text-xl font-semibold text-gray-900'>
                    Profile Editor
                  </h1>
                  <div className='flex gap-4'>
                    <Link
                      href='/profile'
                      className='text-sm text-gray-600 hover:text-gray-900 transition-colors'
                    >
                      View Profile
                    </Link>
                    <Link
                      href='/edit-profile'
                      className='text-sm text-gray-600 hover:text-gray-900 transition-colors'
                    >
                      Edit Profile
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <main className='max-w-4xl mx-auto px-4 py-8'>{children}</main>
          </div>

          {/* Toast Notifications */}
          <Toast />
        </QueryClientProviderWrapper>
      </body>
    </html>
  );
}
