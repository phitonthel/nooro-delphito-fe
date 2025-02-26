'use client';

type SummaryItemProps = {
  label: string;
  innerText: string;
  color: string;
};

export default function SummaryItem({ label, innerText, color }: SummaryItemProps) {
  return (
    <div className="flex items-center">
      <span className={`${color} font-semibold`}>{label}</span>
      <span className="bg-gray-700 text-white text-xs px-2 py-1 rounded-full ml-2">
        {innerText}
      </span>
    </div>
  );
}
