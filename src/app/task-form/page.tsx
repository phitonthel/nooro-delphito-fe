'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useTaskStore } from '../../store/taskStore';
import Link from 'next/link';
import TaskForm from '@/components/molecules/TaskForm';
import AppHeader from '@/components/atoms/AppHeader';

export default function TaskPage() {
  const router = useRouter();
  const { id } = useParams();
  const { addTask, updateTask, tasks } = useTaskStore();

  const isEditing = Boolean(id);
  const existingTask = tasks.find((task) => task.id === id);

  const [title, setTitle] = useState(existingTask?.title || '');
  const [color, setColor] = useState(existingTask?.color || '#FF0000');
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    if (isEditing && !existingTask) {
      router.push('/');
    }
  }, [isEditing, existingTask, router]);

  const handleSubmit = () => {
    if (!title.trim()) {
      setIsInvalid(true);
      return;
    }
    if (isEditing) {
      updateTask(id as string, title, color);
    } else {
      addTask(title, color);
    }
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <AppHeader text={isEditing ? 'Edit Task' : 'Create Task'} />

      <div className="w-full max-w-lg">
        <Link href="/">
          <button className="text-gray-400 hover:text-white text-xl">←</button>
        </Link>
      </div>

      <TaskForm title={title} setTitle={setTitle} color={color} setColor={setColor} isInvalid={isInvalid} />

      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full max-w-lg"
      >
        {isEditing ? 'Update Task' : 'Add Task'} ➕
      </button>
    </div>
  );
}
