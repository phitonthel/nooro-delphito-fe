'use client';

import ColorPicker from '../atoms/ColorPicker';

type Props = {
  title: string;
  setTitle: (title: string) => void;
  color: string;
  setColor: (color: string) => void;
  isInvalid: boolean;
};

export default function TaskForm({ title, setTitle, color, setColor, isInvalid }: Props) {
  return (
    <div className="w-full max-w-lg mt-6">
      <label className="block text-blue-400 font-semibold mb-2">Title</label>
      <input
        type="text"
        placeholder="Ex. Brush your teeth"
        className="w-full p-3 bg-gray-800 rounded-lg text-white border border-gray-600 focus:outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {isInvalid && <p className="text-red-400 mt-2">Title is required</p>}

      <div className="mt-6">
        <label className="block text-blue-400 font-semibold mb-2">Color</label>
        <ColorPicker selectedColor={color} onChange={setColor} />
      </div>
    </div>
  );
}
