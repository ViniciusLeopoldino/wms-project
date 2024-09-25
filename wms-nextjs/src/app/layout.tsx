import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'WMS - Login',
  description: 'Sistema de gerenciamento de armazém',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
