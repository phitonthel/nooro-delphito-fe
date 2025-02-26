'use client';

export default function EmptyTaskState() {
  return (
    <div className="flex flex-col items-center text-gray-400">
      <svg
        className="w-16 h-16 mb-4 text-gray-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h3m4.293-10.707a1 1 0 00-1.414 0l-7.586 7.586a1 1 0 000 1.414l4.586 4.586a1 1 0 001.414 0l7.586-7.586a1 1 0 000-1.414l-4.586-4.586z"
        />
      </svg>
      <p className="text-lg font-semibold">You don’t have any tasks registered yet.</p>
      <p className="text-sm">Create tasks and organize your to-do items.</p>
    </div>
  );
}
