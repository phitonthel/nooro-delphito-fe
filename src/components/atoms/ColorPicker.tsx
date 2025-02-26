'use client';

type Props = {
  selectedColor: string;
  onChange: (color: string) => void;
};

const colors = ['#FF0000', '#FFD700', '#32CD32', '#1E90FF', '#4169E1', '#8A2BE2', '#FF1493', '#8B4513'];

export default function ColorPicker({ selectedColor, onChange }: Props) {
  return (
    <div className="flex gap-3">
      {colors.map((color) => (
        <button
          key={color}
          className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? 'border-white' : 'border-transparent'}`}
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
        />
      ))}
    </div>
  );
}
