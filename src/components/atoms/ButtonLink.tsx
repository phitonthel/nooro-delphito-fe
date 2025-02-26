'use client';

import Link from 'next/link';
import clsx from 'clsx';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'danger';
};

export default function ButtonLink({ href, children, className, variant = 'primary' }: ButtonLinkProps) {
  return (
    <Link href={href}>
      <button
        className={clsx(
          'px-6 py-3 rounded-lg shadow-lg font-medium transition',
          {
            'bg-blue-600 hover:bg-blue-700 text-white': variant === 'primary',
            'bg-gray-700 hover:bg-gray-800 text-white': variant === 'secondary',
            'bg-red-600 hover:bg-red-700 text-white': variant === 'danger',
          },
          className
        )}
      >
        {children}
      </button>
    </Link>
  );
}
