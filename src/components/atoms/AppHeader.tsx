'use client';

type AppHeaderProps = {
  text: string;
};

export default function AppHeader({ text }: AppHeaderProps) {
  return (
    <h1 className="text-4xl font-bold mt-8">
      <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
        {text}
      </span>
    </h1>

  );
}
