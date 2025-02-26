'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TrashIcon } from '@heroicons/react/24/solid';

type TaskItemsProps = {
  tasks: { id: string; title: string; completed_status: boolean; color: string }[];
  toggleTask: (id: string) => void;
  removeTask: (id: string) => Promise<void>;
};

export default function TaskItems({ tasks, toggleTask, removeTask }: TaskItemsProps) {
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this task?")) {
      setDeleting(id);
      await removeTask(id);
      setDeleting(null);
    }
  };

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow transition-all duration-200 hover:bg-gray-700"
        >
          <div className="flex items-center w-full">
            <input
              type="checkbox"
              checked={task.completed_status}
              onChange={() => toggleTask(task.id)}
              className="mr-4 w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center cursor-pointer transition-all peer-checked:bg-purple-500 peer-checked:border-transparent"
            />

            <Link
              href={`/edit/${task.id}`}
              className={`text-lg w-full cursor-pointer ${task.completed_status ? 'line-through text-gray-400' : 'text-white'
                }`}
            >
              {task.title}
            </Link>
          </div>

          <div className="flex items-center">
            <span
              className="w-4 h-4 rounded-full mr-3 border border-gray-500"
              style={{ backgroundColor: task.color }}
            ></span>

            <button
              onClick={() => handleDelete(task.id)}
              className="text-red-400 hover:text-red-600 transition"
              disabled={deleting === task.id}
            >
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
