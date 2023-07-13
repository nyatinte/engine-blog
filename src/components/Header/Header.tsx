import Link from 'next/link';
import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="flex h-24 w-screen items-center justify-between border-b bg-blue-300 px-4">
      <h1 className="text-3xl font-bold">My Blog</h1>
      <Link href="/posts">記事一覧</Link>
    </header>
  );
};
